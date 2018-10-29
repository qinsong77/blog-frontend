<template>
    <div class="switch-container">
        <index type="checkbox"
               v-bind:checked="checked"
               v-on:change="$emit('change', $event.target.checked)"/>
    </div>
</template>

<script>
    export default {
        name: 'switch-btn',
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            default: false,
            checked: Boolean
        }
    }
</script>

<style scoped>

</style>
