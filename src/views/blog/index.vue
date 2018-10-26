<template>
    <div class="blog-container">
        <blog-nav/>
        <div class="blog-main-container">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import BlogNav from './blog-nav'
    export default {
        name: 'index',
        components: { BlogNav },
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
    .blog-container{
        background: $container-bg;
        >.blog-main-container{
            margin-left: 15%;
        }
    }
</style>
