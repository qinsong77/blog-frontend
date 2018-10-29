<template>
    <div class="blog-nav">
        <ul class="nav-menu">
            <li>
                <router-link to="/blog/recent"><i class="iconfont icon-reloadtime"></i><span>最近更新</span></router-link>
            </li>
            <li>
                <router-link to="/blog/frontend"><i class="iconfont icon-folder"></i><span>前端笔记</span></router-link>
            </li>
            <li>
                <router-link to="/blog/mobile"><i class="iconfont icon-shake"></i><span>移动端</span></router-link>
            </li>
            <li>
                <router-link to="/blog/background"><i class="iconfont icon-bg-colors"></i><span>后台壁垒</span>
                </router-link>
            </li>
            <li>
                <router-link to="/blog/notebooks"><i class="iconfont icon-experiment"></i><span>心情日记</span>
                </router-link>
            </li>
        </ul>
        <search-top-list/>
    </div>
</template>

<script>
    import SearchTopList from './search-top-list'
    export default {
        name: 'blog-nav',
        components: { SearchTopList },
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
    .blog-nav {
        top: 66px;
        position: fixed;
        width: 200px;
        background: $app-bg;
        transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
        margin-right: 10px;
        li {
            display: block;
        }
        .nav-menu > li > a {
            transition: $trans;
            display: block;
            font-size: $font-size-menu;
            line-height: $line-height-base;
            padding: 10px 15px;
            margin-bottom: 10px;
            background: $container-bg;
            &:hover {
                background: $module-hover-bg;
            }
            > i {
                vertical-align: -.115em;
                font-size: 21px;
            }
            > span {
                margin-left: 5px;
            }
        }
    }

</style>
