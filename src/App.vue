<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav,
    Footer
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1f1f1f;
}

a {
  text-decoration: none;
  color: #1f1f1f;
}
a:hover {
  text-decoration: none !important;
  color: #1f1f1f !important;
}
</style>
