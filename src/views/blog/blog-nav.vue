<template>
    <div class="blog-nav">
        <ul>
            <li>
                <router-link to="/articles">articles</router-link>
            </li>
            <li>2</li>
            <li>2</li>
            <li>3</li>
            <li>5</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'blog-nav',
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
    .blog-nav{
        top:76px;
        background: #5394ec;
        position: fixed;
        width:210px;
    }

</style>
