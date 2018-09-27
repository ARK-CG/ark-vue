<template>
    <div class="gallery">
      <Nav />
      <div class="template">
        <Data title="Gallery" path='works' />
      </div>
    </div>
</template>

<script>
import Data from "@/components/Data.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "Gallery",
  components: {
    Data,
    Nav
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
  padding:50px 15px 100px;
  font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic';
}
.gallery {
  background: #fafafa;
  color: #555;
}

@media screen and (max-width: 767px) {
  .template{
    max-width: 1024px;
    padding-bottom: 100px;
    margin: 0 auto;
    padding:30px 15px 60px;
    font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic';
  }
}
</style>
