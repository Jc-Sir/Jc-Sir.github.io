module.exports = [{
        text: '首页',
        link: '/'
    }, {
        text: '指南',
        link: '/guide/notes/one'
    },
    {
        text: '学习笔记',
        link: '/note/',
        items: [
            { text: 'JavaScript', link: '/note/javascript/' },
            { text: 'Css', link: '/note/css/' },
            { text: 'Html', link: '/note/Html/' },
            { text: 'Vue', link: '/note/Vue/' }
        ]
    },
    {
        text: '工具箱',
        items: [{
                text: '在线编辑',
                items: [
                    { text: '图片压缩', link: 'https://tinypng.com/' },
                    { text: '代码格式化', link: 'https://tool.oschina.net/codeformat/js/' },
                    { text: 'Esay-mock', link: 'https://www.easy-mock.com/' },
                    { text: '在线绘图', link: 'https://www.processon.com/' },

                ]
            },
            {
                text: '在线服务',
                items: [
                    { text: '阿里云', link: 'https://www.aliyun.com/' },
                    { text: '腾讯云', link: 'https://cloud.tencent.com/' }
                ]
            },
            {
                text: '博客指南',
                items: [
                    { text: '掘金', link: 'https://juejin.im/' },
                    { text: 'CSDN', link: 'https://blog.csdn.net/' }
                ]
            }
        ]
    }
]