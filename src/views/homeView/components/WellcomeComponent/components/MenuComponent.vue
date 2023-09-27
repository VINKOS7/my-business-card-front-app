<template>
    <div class="menu">
        <ButtonComponent/>
        <ButtonComponent>Проекты</ButtonComponent>
        <ButtonComponent>Услуги</ButtonComponent>
        <ButtonComponent>Отзывы</ButtonComponent>
        <ButtonComponent><div @click="$router.push('/about')">О сайте</div></ButtonComponent>
    </div>
</template>

<script setup lang="ts">
    import ButtonComponent from "./ButtonComponent.vue"
</script>

<style lang="scss" scoped>
    .menu {
        background: linear-gradient(45deg,purple,orange) border-box;
        min-width: 450px;
        width: 20vw;
        height: 60vh;
        margin-left: 7vw;
        margin-top: 20vh;
        border-radius: 20px;
        border-top-right-radius: 150px; 
        border-bottom-left-radius: 150px;
        display:inline-block;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            background-color: transparent;
            width: 10px;
            height: 20px;
        }

        &::-webkit-scrollbar-track{
            height: 20px;
        }
    

        &::-webkit-scrollbar-thumb {
            background-color: transparent;
        }
        
        &::before{
            content: "";
            position: absolute;
            z-index: -1;
            min-width: 460px;
            max-width: 520px;
            width: 21vw;
            height: 61vh;
            margin-left: 0;
            margin-top: -2px;
            border-radius: 20px;
            border-top-right-radius: 150px; 
            border-bottom-left-radius: 150px;
            display:inline-block;

            background: linear-gradient(45deg,rgb(255, 255, 255),rgb(0, 255, 221)) border-box;
        }
    }
</style>