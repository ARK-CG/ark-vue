<template>
  <div class="home">
    <div class="eyecatch">
    </div>

    <div class="intro">
      <div class="text">
        <h1>Gallery</h1>
        <div class="detail-text">
          <p>幅広い分野で、メンバーの得意分野ですきなように作品を作り上げています。テキストが入りますテキストが入りますテキストが入ります</p>
          <div class="button">
            <router-link class="icon icon-layers" to="/gallery">もっと見る</router-link>
          </div>
        </div>
      </div>
      <div class="table">
        <table>
          <tr>
            <td>
              <img src="../assets/eyecatch.jpg" alt="">
            </td>
            <td>
              <img src="../assets/eyecatch.jpg" alt="">
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/eyecatch.jpg" alt="">
            </td>
            <td>
              <img src="../assets/eyecatch.jpg" alt="">
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="template">
      <Data title="Latest work" path='works' :limitNum="9" />
      <DataNews title="Latest News" path='news' :limitNum="3" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Swipers from "@/components/Swipers.vue";
import DataNews from "@/components/DataNews.vue";

export default {
  name: "home",
  components: {
    Swipers,
    DataNews
  }
};
</script>

<style>
/*top*/
.eyecatch{
  max-width: 800px;
  margin: 60px auto;
  height: 400px;
  background-image: url("../assets/eyecatch.jpg");
  background-repeat: no-repeat;
  background-position: center;
}

.intro{
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.intro .text{
  text-align: left;
  display: flex;
}

.intro .text h1{
  font-size: 28px;
  writing-mode: vertical-rl;
  display: inline-block;
}

.intro .detail-text{
  width: 260px;
}

.intro .detail-text p{
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  margin: 0;
  line-height: 180%;
}

.intro .button{
  text-align: right;
  margin-top: 60px;
}

.intro .text .detail-text a{
  border: solid 1.5px #1F4575;
  border-radius: 5px;
  padding: 6px 12px;
  background: transparent;
  transition: 0.4s;
  width: 100%;
  cursor: pointer;
  color: #1F4575;
  font-weight: bold;
  margin-top: 10px;
  font-size: 14px;
  text-decoration: none;
}

.intro .text .detail-text a:hover{
  background:#1F4575;
  transition: 0.4s;
  color: #fff;
  transition: 0.4s;
}

.intro .table{
  margin: 0;
}

.table table{
  margin: 0 auto;
}

.table table td{
  border-top: none;
  padding: 5px;
}

.table img{
  width: 180px;
  line-height: 0;
  font-size: 0;
}

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
  font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic';
}
</style>
