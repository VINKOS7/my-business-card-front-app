<template>
    <div class="projects">
        <div  v-for="project in projects">
            <ProjectItemComponent/>  
        </div>         
    </div>
</template>

<script setup lang="ts">
    import ProjectItemComponent from "./components/ProjectItemComponent.vue"

    const projects = [0,2,3,5,4]
</script>

<style lang="css" scoped>
    .projects{
        overflow-x: hidden;
        width: 40vw;
    }
</style>