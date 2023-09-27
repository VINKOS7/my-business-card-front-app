<template>
  <div class="about">
    <BannerComponent>
      Данный сайт моя визитка, как моих услуг, так и моих навыков и знании.
      Весь его исходный код, лежит на гитхабе - [ссылка]<br><br>
      <h1>Используемые технологии</h1><br>
      &emsp; <h3>•</h3>

    </BannerComponent>
  </div>
</template>

<script setup lang="ts">
    import BannerComponent from '../components/BannerComponent.vue'
</script>

<style lang="css">
  h1 {
    background-color: rgb(143, 103, 180);
    padding: 15px;
    border-radius: 20px;
    color: aliceblue;
    width: 400px;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  h3 {
    
  }
</style>
