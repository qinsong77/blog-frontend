<template>
    <header class="header">
        <nav class="container">
            <div class="header-log">
                <router-link to="/blog">Sysuke</router-link>
            </div>
            <div class="header-menu">
                <ul>
                    <li><a>博客</a></li>
                    <li><a>Demos</a></li>
                    <li><a>Archive</a></li>
                    <li><a>Me</a></li>
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
        }
    }
</script>

<style lang="scss">
    .header {
        position: fixed;
        top: 0;
        left: 0;
        z-index:999;
        height: $header-height;
        line-height: $header-height;
        width: 100%;
        background-color: $bg-opacity-m;
    > .container {
            @include margin-auto-width;
            display: flex;
            justify-content: space-between;
            align-items: center;
            > .header-log {
                > a {
                    line-height: 1.4;
                    font-size: $font-size-h1;
                    color: $primary;
                }
            }
            >.header-menu{
                ul{
                    display: flex;
                    a{
                        padding: 0 15px;
                        text-decoration: none;
                        cursor: pointer;
                    }
                }
            }
        }

    }
</style>
