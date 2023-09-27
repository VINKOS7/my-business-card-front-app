<template>
    <div class="item" :style="{ 'background-image': 'url(' + url + ')' }">
        <slot>project item</slot>
    </div>
</template>

<script setup lang="ts">
    defineProps<{url: string}>()
</script>

<style lang="scss" scoped>
    .item {
        color: black;
        width: 100vw;
        height: 70vh;
        margin: 10vw;
        border-radius: 5%;
    }
</style>