<template>
    <div class="wellcome">
      <MenuComponent/>
      <ButtonMoveFromWellcomComponent/>
    </div>
</template>
  
<script setup lang="ts">
  import ButtonMoveFromWellcomComponent from "./components/ButtonMoveFromWellcomComponent.vue"
  import MenuComponent from "./components/MenuComponent.vue"

  const root = document.documentElement;

  document.addEventListener('mousemove', evt => {
      const x = evt.clientX / innerWidth;
      const y = evt.clientY / innerHeight;
  
      root.style.setProperty('--mouse-x', x.toString());
      root.style.setProperty('--mouse-y', y.toString());
  });
</script>
  
<style lang="scss" scoped>
  .wellcome{
    width: 100vw;
    height: 100vh;
    background-image: url("../../../../assets/backgrounds/earch.gif");
    position: relative;
    z-index: 1;
    border-bottom: 2px solid;

    &:hover::after{
      content: "";
      margin-left: -100vw;
      width: 180%;
      height: 100%;
      position: absolute;
      z-index: -1;

      background: 
        radial-gradient(
          100vh 100vh at calc(var(--mouse-x, 0) * 100%) calc(var(--mouse-y, 0) * 100%),
          rgba(0, 255, 234, 0.137),
          rgba(29, 175, 233, 0)
        ) 
        no-repeat 0 0;
    }
  }
  
</style>
  