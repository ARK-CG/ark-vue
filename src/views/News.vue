<template>
  <div class="news">
  <Data title="News" path='news'/>
</div>
</template>

<script>
import Data from "@/components/Data.vue";

export default {
  name: "News",
  components: {
    Data
  },
  methods: {}
};
</script>

<style>
/*News*/
.news {
  background: #ecf0f1;
  width: 100%;
  padding-bottom: 100px;
}
</style>
