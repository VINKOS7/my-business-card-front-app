<template>
    <carousel :items-to-show="1.3">
      <slide v-for="slide in projects" :key="slide">
        <ProjectItemComponent url='https://selmach.com/wp-content/uploads/2018/09/10-things-you-never-realised-you-didnt-know-about-metal-1024x683.jpg'/> 
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