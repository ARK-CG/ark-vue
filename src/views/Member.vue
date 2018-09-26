<template>
<div class="member">
  <Nav />
  <div class="template">
    <NewContact />
  </div>
</div>
</template>

<script>
import NewContact from "@/components/NewContact.vue";
import Test from "@/components/Test.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "member",
  components: {
    NewContact,
    Test,
    Nav
  }
};
</script>

<style media="screen">
/*News*/
.template{
  max-width: 1024px;
  padding-bottom: 100px;
  margin: 0 auto;
  padding:50px 15px 100px;
  font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic';
  text-align: left;
}

.member {
  background: #fafafa;
}
</style>
