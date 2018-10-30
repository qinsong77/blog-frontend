<template>
    <div class="blog-container">
        <blog-nav :class="{'blog-nav-open':showNav}"/>
        <div class="blog-main-container">
            <router-view/>
        </div>
        <blog-right-box/>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import BlogNav from './components/blog-nav'
    import BlogRightBox from './components/blog-right-box'
    export default {
        name: 'index',
        components: { BlogRightBox, BlogNav },
        data () {
            return {}
        },
        computed: {
            ...mapState({
                showNav: state => state.app.showNav
            })
        },

        created () {
        },

        mounted () {
        },

        methods: {}
    }
</script>

<style lang="scss">
    .blog-container{
        display: flex;
        >.blog-main-container{
            transition: $trans;
            background: $container-bg;
            margin-left: 210px;
            width: calc(100% - 420px);
            min-height: 80vh;
            padding: $container-pd;
        }
    }
</style>
