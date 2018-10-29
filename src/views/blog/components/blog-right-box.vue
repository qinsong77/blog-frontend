<template>
    <div class="blog-right-box">
        <div>
            <label>theme：</label>
            <input type="radio" v-bind:checked="checked" v-on:change="setT"/>
            <!--<switch-btn v-model="theme"/>-->
        </div>
    </div>
</template>

<script>
    import SwitchBtn from '_c/switch-btn'
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: 'blog-right-box',
        components: { SwitchBtn },
        data () {
            return {
                checked: false
            }
        },
        computed: {
            ...mapState({
                theme: state => state.theme
            })
        },

        methods: {
            ...mapMutations,
            setT (e) {
                if (e.target.checked) {
                    this.$store.commit('setTheme', 'theme-dark')
                }
            }
        }
    }
</script>

<style lang="scss">
    .blog-right-box {
        width: 200px;
        height: 100%;
        margin-left: 10px;
        > div {
            background: $container-bg;
        }
    }
</style>
