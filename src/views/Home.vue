<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Swiper />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Swiper from "@/components/Swiper.vue";

export default {
  name: "home",
  components: {
    Swiper,
    HelloWorld
  }
};
</script>
