<template>
  <div class="home">
    <div class="template">
      <Data title="Latest work" path='works' :limitNum="9" />
      <DataNews title="Latest News" path='news' :limitNum="3" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Swipers from "@/components/Swipers.vue";
import Data from "@/components/Data.vue";
import DataNews from "@/components/DataNews.vue";

export default {
  name: "home",
  components: {
    Swipers,
    Data,
    DataNews
  }
};
</script>

<style>
/*top*/
.template{
  max-width: 1024px;
  padding-bottom: 100px;
  margin: 0 auto;
  padding:30px;
  font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic';
}
.home {
  background: #fafafa;
  color: #555;
}
</style>
