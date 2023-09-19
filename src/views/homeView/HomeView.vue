
<template>
  <div class="home">
    <WellcomeComponent/>
    <ProjectsComponent/>
  </div>
</template>

<script setup lang="ts">
  import WellcomeComponent from './components/WellcomeComponent/WellcomeComponent.vue';
  import ProjectsComponent from './components/ProjectsComponent/ProjectsComponent.vue'
//    <ProjectsComponent/>

</script>

<style lang="css" scoped>
  .home {
    overflow-y: hidden;
  }
</style>
