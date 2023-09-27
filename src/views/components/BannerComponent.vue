<template>
    <div class="banner">
        <slot >Баннер</slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
$widthBanner: 1000px;

.banner {
    width: 80vw;
    height: 80vh;
    max-width: $widthBanner;
    margin-left: calc(50% - $widthBanner / 2);
    margin-bottom: 10vh;
    margin-top: 10vh;
    background: linear-gradient(152deg,rgb(255, 255, 255), rgb(0, 255, 221)) border-box;
    border-radius: 15px;
    color: black;
    padding: 3%;
}
</style>