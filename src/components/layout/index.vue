<template>
    <div class="app-container">
        <app-header/>
        <main class="main-container">
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
        .main-container {
            @include margin-auto-width();
            background: $container-bg;
        }
    }
</style>
