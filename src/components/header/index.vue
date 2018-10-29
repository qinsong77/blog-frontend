<template>
    <header class="header">
        <nav class="header-container">
            <div class="header-log">
                <router-link to="/blog">Sysuke</router-link>
            </div>
            <div class="header-menu">
                <ul>
                    <li class="nav-bar-menu" @click="setShowNav" >
                        <a>
                            <i class="iconfont icon-menu"></i>
                        </a>
                    </li>
                    <li>
                        <router-link to="/blog" title="博客">
                            <i class="iconfont icon-tag-fill"></i>
                            <span>博客</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/demos">
                            <i class="iconfont icon-rocket-fill"></i>
                            <span>Demos</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/archive">
                            <i class="iconfont icon-calendar-check-fill"></i>
                            <span>Archive</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/me">
                            <i class="iconfont icon-contacts-fill"></i>
                            <span>Me</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'index',
        data () {
            return {}
        },
        methods: {
            setShowNav () {
                this.$store.commit('setShowNav')
            }
        }
    }
</script>

<style lang="scss">
    .header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        height: $header-height;
        line-height: $header-height;
        width: 100%;
        background-color: $bg-opacity-m;
        box-shadow: 0 1px 2px rgba(0,0,0,.1);
        > .header-container {
            @include margin-auto-width;
            display: flex;
            justify-content: space-between;
            align-items: center;
            > .header-log {
                > a {
                    padding-left: 25px;
                    line-height: 1.4;
                    font-size: $font-size-h1;
                    color: $primary;
                }
            }
            > .header-menu {
                .nav-bar-menu{
                    display: none;
                }
                ul {
                    display: flex;
                    i{
                        font-size: 23px;
                    }
                    a {
                        font-size: $font-size-menu;
                        line-height: $line-height-base;
                        padding: 0 15px;
                        text-decoration: none;
                        cursor: pointer;
                        >span{
                            margin-left: 5px;
                        }
                    }
                }
            }
        }

    }
</style>
