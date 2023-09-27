<template>
    <div 
        @click="goNextScreen"
        class="buttom"
    ><img class="go-icon" src="../../../../../assets/icons/1486348532-music-play-pause-control-go-arrow_80458.svg">
    </div>
</template>

<script setup lang="ts">
    const goNextScreen = () => window.scroll({top: window.innerHeight, left: 0, behavior: "smooth",}) 
</script>

<style lang="scss" scoped>
    .go-icon {
        height: 100px;
        margin-left: -35px;
        margin-top: -35px;
    }
     
    .buttom {
        border-style: outset;
        position: absolute;
        background: rgb(33, 148, 168);
        color: black;
        padding: 40px;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        margin-left: 80%;

        &:hover{
            background-color: rgb(0, 255, 234);
            border-style:groove;
        }
    }
</style>