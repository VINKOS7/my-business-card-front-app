
<template>
  <div class="home">
    <WellcomeComponent/>
    <ProjectsComponent/>
    <BannerComponent>
      Меня зовут Костя, я fullstack разработчик. Данный сайт моя визитка, тут вы можете найти примеры моих работ.<br>
      Также тут можно узнать мою историю, если вам интресно)) Сам сайт лежит на гитхабе - [ссылка]<br>
      Я прикрасно знаю о том что дизайн не соотвествует совремным тенденциям, но я хотел сделать что-то свое)<br>
      Вот вам картинка котика: <img class="cat" 
        src="https://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG-2.png"
        width="700"
        height="400"
      ><br>
      Я люблю стратегии, игры, настолки, ну все такое) Если по моим проффисиональным навыкам:<br>
      back: C#\ASP.NET\Microservice\SOA\PostgreSQL\Mongo\Redis<br>
      front: Vue\React\TypeScript\JavaScript<br><br>
      Всегда онлайн, дружелюбен, нахожу язык с заказчиком, внимателен к деталям.<br>
      Всегда интересны необычные задачи, технолгии и кофе)
    </BannerComponent>
    <FooterComponent/>
  </div>
</template>

<script setup lang="ts">
  import FooterComponent from './components/FooterComponent.vue';
  import BannerComponent from './components/BannerComponent.vue'
  import WellcomeComponent from './components/WellcomeComponent/WellcomeComponent.vue'
  import ProjectsComponent from './components/ProjectsComponent/ProjectsComponent.vue'
//    <ProjectsComponent/>

</script>

<style lang="css" scoped>

  .home {
    overflow: hidden;
  }
</style>
