<template>
    <div class="tags-container">
        <ul>
            <li class="tag-li" v-for="tag in tags" :key="tag.id">
                <a>
                    {{tag.name}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'tag-list',
        data () {
            return {
                tags: []
            }
        },
        computed: {},

        created () {
            this.$Axios.get('/tag/all').then(res => {
                if (res.result) {
                    this.tags = res.content
                }
            })
        },

        mounted () {
        },

        methods: {}
    }
</script>

<style lang="scss">
    .tags-container{
        margin-top: 10px;
        padding: 10px;
        ul>li{
            display: inline-block;
            margin-right: 7px;
            margin-bottom: 10px;
            a{
                display: inline-block;
                background-color: $secondary-bg;
                padding: 5px 10px 5px 3px;
                transition: $trans;
                &:hover{
                    background: $secondary-bg-darken;
                }
                >i{
                    margin-right: 3px;
                }
            }
        }
    }
</style>
