<template>
  <div class="home">
    <Swipers />
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
