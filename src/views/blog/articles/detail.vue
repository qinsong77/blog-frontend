<template>
    <div class="article">
        <p class="title">{{article.title}}</p>
        <p class="banner-img">
            <img :src="article.imgUrl">
        </p>
        <div class="markdown-body" ref="content" id="content" v-html="compiledMarkdown">

        </div>

        </div>
</template>

<script>
    import marked from 'marked'
    import hljs from 'highlight.js'
    import 'highlight.js/styles/default.css'
    marked.setOptions({
        renderer: new marked.Renderer(),
        breaks: true,
        gfm: true,
        headerIds: true,
        tables: true,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code, lang) {
            if (lang && hljs.getLanguage(lang)) {
                return hljs.highlight(lang, code, true).value
            } else {
                return hljs.highlightAuto(code).value
            }
        }
    })
    export default {
        name: 'detail',
        data () {
            return {
                article: {}
            }
        },
        computed: {
            compiledMarkdown () {
                return marked(this.article.content || '', {
                    // sanitize: true
                })
            }
        },

        created () {
            this.$Axios.get(`/article/${this.$route.params.id}`).then(res => {
                console.log(res)
                this.article = res.content
            })
        },

        mounted () {

        },

        methods: {}
    }
</script>

<style lang="scss">
    .article{
        background: $container-bg;
        padding: $container-pd;
        .markdown-body{
            overflow-x: auto;
            padding: 10px 15px;
        }
        .title{
            font-size: $font-size-h3;
            text-align: center;
            padding: 20px 0;
        }
        .banner-img{
            padding: 10px 15px;
            text-align: center;
            img{
                max-height: 25vh;
                max-width: 100%;
            }
        }
    }
</style>
