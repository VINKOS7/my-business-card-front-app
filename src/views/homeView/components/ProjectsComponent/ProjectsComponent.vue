<template>
    <carousel :items-to-show="1.3">
      <slide v-for="slide in projects" :key="slide">
        <ProjectItemComponent/> 
      </slide>
  
      <template #addons>
        <navigation />
        <pagination/>
      </template>
    </carousel>
</template>

<script setup lang="ts">
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
    import ProjectItemComponent from "./components/ProjectItemComponent.vue"
// <ProjectItemComponent/>  
    const projects = [0,1,2,3,4]
</script>

<style lang="scss" scoped>
    .projects {
        display: inline-flex;
        overflow-x: scroll;
        width: 100vw;
    }
</style>