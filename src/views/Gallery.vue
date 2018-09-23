<template>
    <div class="gallery">
      <div class="template">
        <Data title="Gallery" path='works' />
      </div>
    </div>
</template>

<script>
import Data from "@/components/Data.vue";

export default {
  name: "Gallery",
  components: {
    Data
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
.gallery {
  background: #fafafa;
  color: #555;
}
</style>
