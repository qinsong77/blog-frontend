<template>
    <div class="article-link-card">
        <img src="../../../assets/1212.png">
        <div>
            <div>
                <p class="title">这是一个文章标题</p>
                <p class="sub-title">这是一个文章简单简绍</p>
            </div>
            <div>
                <span>时间</span>
                <span>阅读量</span>
                <span>评论</span>
                <span>标签</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'blog-article-link-card',
        data () {
            return {}
        },
        computed: {},

        created () {
        },

        mounted () {
        },

        methods: {}
    }
</script>

<style lang="scss">
    .article-link-card{
        box-shadow: $box-shadow;
        display: flex;
        margin-top: 10px;
        padding: 10px;
        transition: $trans;
        &:hover{
            background: $secondary-bg-lighten;;
        }
    }
</style>
