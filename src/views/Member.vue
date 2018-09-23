<template>
<div class="member">
  <div class="template">
    <NewContact />
  </div>
</div>
</template>

<script>
import NewContact from "@/components/NewContact.vue";
import Test from "@/components/Test.vue";

export default {
  name: "member",
  components: {
    NewContact,
    Test
  }
};
</script>

<style media="screen">
/*News*/
.template{
  max-width: 1024px;
  padding-bottom: 100px;
  margin: 0 auto;
  padding:30px 30px 50px;
  font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic';
  text-align: left;
}

.member {
  background: #fafafa;
}
</style>
