module.exports = {
    title: '前端劝退师',
    description: '从入门到放弃',
    head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav"),
        sidebar: require("./slidebar")
    }
}