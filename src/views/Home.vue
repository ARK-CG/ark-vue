<template>
  <div class="home">
    <Swipers />
    <Data title="Latest work" path='works' :limitNum="9" />
    <Data title="Latest News" path='news' :limitNum="3" />
  </div>
</template>

<script>
// @ is an alias to /src
import Swipers from "@/components/Swipers.vue";
import Data from "@/components/Data.vue";

export default {
  name: "home",
  components: {
    Swipers,
    Data
  }
};
</script>

<style>
/*top*/
.home {
  max-width: 1024px;
  padding-bottom: 100px;
  margin: 0 auto;
}
</style>
