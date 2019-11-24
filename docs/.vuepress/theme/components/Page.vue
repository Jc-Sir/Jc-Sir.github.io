<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />

    <footer class="page-edit">
      <div class="edit-link" v-if="editLink">
        <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
        <OutboundLink />
      </div>

      <div class="last-updated" v-if="lastUpdated">
        <span class="prefix">{{ lastUpdatedText }}:</span>
        <span class="time">{{ lastUpdated }}</span>
      </div>
    </footer>

    <div class="page-nav" v-if="prev || next">
      <p class="inner">
        <span v-if="prev" class="prev">
          ←
          <router-link v-if="prev" class="prev" :to="prev.path">{{ prev.title || prev.path }}</router-link>
        </span>

        <span v-if="next" class="next">
          <router-link v-if="next" :to="next.path">{{ next.title || next.path }}</router-link>→
        </span>
      </p>
    </div>

    <slot name="bottom" />

    <Comments v-bind:is="viewComments"></Comments>
  </main>
</template>

<script>
import Comments from './Comments.vue'
import { resolvePage, outboundRE, endingSlashRE, normalize } from "../util";

export default {
  props: ["sidebarItems"],

  components: { Comments },

  data() {
    return {
      viewComments: "Comments"
    };
  },

  computed: {
    lastUpdated() {
      return this.$page.lastUpdated;
    },

    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === "string") {
        return this.$themeLocaleConfig.lastUpdated;
      }
      if (typeof this.$site.themeConfig.lastUpdated === "string") {
        return this.$site.themeConfig.lastUpdated;
      }
      return "Last Updated";
    },

    prev() {
      const prev = this.$page.frontmatter.prev;
      if (prev === false) {
        return;
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path);
      } else {
        return resolvePrev(this.$page, this.sidebarItems);
      }
    },

    next() {
      const next = this.$page.frontmatter.next;
      if (next === false) {
        return;
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path);
      } else {
        return resolveNext(this.$page, this.sidebarItems);
      }
    },

    editLink() {
      if (this.$page.frontmatter.editLink === false) {
        return;
      }
      const {
        repo,
        editLinks,
        docsDir = "",
        docsBranch = "master",
        docsRepo = repo
      } = this.$site.themeConfig;

      if (docsRepo && editLinks && this.$page.relativePath) {
        return this.createEditLink(
          repo,
          docsRepo,
          docsDir,
          docsBranch,
          this.$page.relativePath
        );
      }
    },

    editLinkText() {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
      );
    }
  },
  mounted() {
    // this.renderValine();
  },
  watch: {
    // 路由变化时重新初始化Valine组件
    // $route(a, b) {
    //   if (a.path != b.path) {
    //     this.renderValine();
    //   }
    // }
  },
  methods: {
    //  生成评论组件的 Dom 元素
    renderValine() {
      //  因为此方法会构建dom节点，所以<template>中不需要再加相关dom元素
      let $page = document.querySelector(".page");
      let vcomments = document.getElementById("vcomments");
      if (!vcomments) {
        vcomments = document.createElement("div");
        vcomments.id = "vcomments";
      }
      if (this.$page.frontmatter.hideFooter) {
        //    如果forntmatter中标注'hideFooter：true'则不渲染评论组件，
        //    使得评论组件在各个页面的显示可控
        vcomments.remove();
      } else {
        if ($page && !vcomments) {
          $page.appendChild(vcomments);
        } else {
          $page = document.querySelector(".page");
          $page.appendChild(vcomments);
        }
        this.valine();
      }
    },
    //  初始化valine实例
    valine() {
      const Valine = require("valine");
      const leancloudStorage = require("leancloud-storage");
      // require window
      if (typeof window !== "undefined") {
        window.AV = leancloudStorage;
      }
      //    配置valine参数
      new Valine({
        el: "#vcomments",
        appId: "2GlT2DnLy4iW1uW6sfyTvqpc-gzGzoHsz", // your appId
        appKey: "4QFcy7xkpj622FrfEzRQTPik", // your appKey
        notify: true,
        verify: false,
        visitor: true,
        avatar: "wavatar",
        placeholder: "Leave a comment！",
        path: window.location.pathname
      });
    },
    createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/;
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo) ? docsRepo : repo;
        return (
          base.replace(endingSlashRE, "") +
          `/src` +
          `/${docsBranch}/` +
          (docsDir ? docsDir.replace(endingSlashRE, "") + "/" : "") +
          path +
          `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        );
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`;
      return (
        base.replace(endingSlashRE, "") +
        `/edit` +
        `/${docsBranch}/` +
        (docsDir ? docsDir.replace(endingSlashRE, "") + "/" : "") +
        path
      );
    }
  }
};

function resolvePrev(page, items) {
  return find(page, items, -1);
}

function resolveNext(page, items) {
  return find(page, items, 1);
}

function find(page, items, offset) {
  const res = [];
  flatten(items, res);
  for (let i = 0; i < res.length; i++) {
    const cur = res[i];
    if (cur.type === "page" && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset];
    }
  }
}

function flatten(items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === "group") {
      flatten(items[i].children || [], res);
    } else {
      res.push(items[i]);
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}

.page-edit {
  @extend $wrapper;
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;

  .edit-link {
    display: inline-block;

    a {
      color: lighten($textColor, 25%);
      margin-right: 0.25rem;
    }
  }

  .last-updated {
    float: right;
    font-size: 0.9em;

    .prefix {
      font-weight: 500;
      color: lighten($textColor, 25%);
    }

    .time {
      font-weight: 400;
      color: #aaa;
    }
  }
}

.page-nav {
  @extend $wrapper;
  padding-top: 1rem;
  padding-bottom: 0;

  .inner {
    min-height: 2rem;
    margin-top: 0;
    border-top: 1px solid $borderColor;
    padding-top: 1rem;
    overflow: auto; // clear float
  }

  .next {
    float: right;
  }
}

@media (max-width: $MQMobile) {
  .page-edit {
    .edit-link {
      margin-bottom: 0.5rem;
    }

    .last-updated {
      font-size: 0.8em;
      float: none;
      text-align: left;
    }
  }
}
</style>
