<template>
    <div 
        @click=""
        class="buttom"
    ><img class="go-icon" src="../../../../../assets/icons/moveFromWallcom.svg">
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
    .go-icon {
        height: 100px;
        margin-left: -35px;
        margin-top: -35px;
        
    }
    .buttom {
        position: absolute;
        background: rgba(0, 217, 255, 0.527);
        color: black;
        padding: 40px;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        margin-left: 80%;

        &:hover{
            background-color: rgb(0, 255, 234);
        }
    }
</style>