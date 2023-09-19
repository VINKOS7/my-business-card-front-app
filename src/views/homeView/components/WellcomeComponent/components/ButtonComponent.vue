<template>
    <div 
        @click="$router.push({ path: path })"
        class="buttom"
    >
        <slot>Главная</slot>
    </div>
</template>

<script setup lang="ts">
    withDefaults(defineProps<{path: string}>(), {
        path: "home"
    })


</script>

<style lang="scss" scoped>
    .buttom {
        background: rgb(0, 217, 255);
        color: black;
        text-align: right;
        margin-top: 5%;
        margin-left: 5%;
        margin-right: 25%;
        padding: 3%;
        border-radius: 50px;

        &:hover{
            background-color: rgb(0, 255, 234);
        }
    }
</style>