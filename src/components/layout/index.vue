<template>
    <div class="app-container">
        <app-header/>
        <main class="app-main-container">
            <router-view/>
        </main>
        <app-footer/>
    </div>
</template>

<script>
    import AppHeader from '_c/header'
    import AppFooter from '_c/footer'

    export default {
        name: 'index',
        components: { AppHeader, AppFooter }
    }
</script>

<style lang="scss">
    .app-container {
        padding-top: 56px;
        /*height: 100%;
        background: $app-bg; */
        .app-main-container {
            @include margin-auto-width();
            background: $container-bg;
            margin-top: 10px;
            padding: $container-pd;
            box-sizing: border-box;
            box-shadow: $box-shadow;
        }
    }
</style>
