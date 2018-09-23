<template>
  <div class="news">
  <DataNews title="News" path='news'/>
</div>
</template>

<script>
import DataNews from "@/components/DataNews.vue";

export default {
  name: "News",
  components: {
    DataNews
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
