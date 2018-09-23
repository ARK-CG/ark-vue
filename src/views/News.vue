<template>
  <div class="news">
    <div class="template">
      <DataNews title="News" path='news'/>
    </div>
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
.template{
  max-width: 1024px;
  padding-bottom: 100px;
  margin: 0 auto;
  padding:30px;
  font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic';
}

.news {
  background: #fafafa;
}
</style>
