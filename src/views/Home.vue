<template>
  <div class="home">
    <Swipers path='swipers'/>
    <div class="intro">
      
      <div class="table small">
        <table>
          <tr>
            <td>
              <img src="../assets/carmodel.png" alt="">
            </td>
            <td>
              <img src="../assets/kaito-work1.png" alt="">
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/kaito-work4.png" alt="">
            </td>
            <td>
              <img src="../assets/kaito-work2.png" alt="">
            </td>
          </tr>
        </table>
      </div>
      <div class="text">
        <h1><span>G</span>allery</h1>
        <div class="detail-text">
          <p>幅広い分野で、メンバーの得意分野ですきなように作品を作り上げています。テキストが入りますテキストが入りますテキストが入ります</p>
          <div class="button">
            <router-link class="icon icon-layers" to="/gallery">もっと見る</router-link>
          </div>
        </div>
      </div>
      <div class="table big">
        <table>
          <tr>
            <td>
              <img src="../assets/carmodel.png" alt="">
            </td>
            <td>
              <img src="../assets/kaito-work1.png" alt="">
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/kaito-work4.png" alt="">
            </td>
            <td>
              <img src="../assets/kaito-work2.png" alt="">
            </td>
          </tr>
        </table>
      </div>
    </div>

    <TopNews title="Latest News" path='news' :limitNum="1" />

  </div>
</template>

<script>
// @ is an alias to /src
import Swipers from "@/components/Swipers.vue";
import TopNews from "@/components/TopNews.vue";

export default {
  name: "home",
  components: {
    Swipers,
    TopNews
  }
};
</script>
<style media="screen" scoped>


</style>


<style lang="scss">

/*top*/
@media screen and (min-width: 767px) {
  .small{
    display: none;
  }

  .big{
    display: block;
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

/*slide*/
.top-nav{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  .navigation{
    background: rgba(0,0,0,0);
    .nav{
      ul{
        list-style: none;
        margin: 0;
        padding: 0;
        .icon{
          li{
            font-size: 16px;
            display: inline-block;
            padding: 20px 18px;
            transition: 0.4s;
          }
        }
        .icon:hover li{
          background: rgba(0,0,0,0.2);
          transition: 0.4s;
        }
      }
    }
  }
}

/*content*/
.intro{
  max-width: 800px;
  margin: 0px auto;
  padding: 70px 15px 0;
  display: flex;
  align-items: center;
  .text{
    text-align: left;
    display: flex;
    h1{
      font-size: 28px;
      writing-mode: vertical-rl;
      display: inline-block;
      margin: 0 15px 0 0 ;
      h1 span{
        color: #FF8C00;
      }
    }
  }
  .detail-text{
    width: 260px;
    a{
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
    a:hover{
      background:#1F4575;
      transition: 0.4s;
      color: #fff;
      transition: 0.4s;
    }
    p{
      display: inline-block;
      vertical-align: top;
      font-size: 14px;
      margin: 0;
      line-height: 180%;
    }
  }
  .button{
    text-align: right;
    margin-top: 60px;
  }
  .table{
    margin-left: auto;
    table{
      margin-left: auto;
      td{
        border-top: none;
        padding: 5px;
        img{
          width: 180px;
          line-height: 0;
          font-size: 0;
        }
      }
    }
  }
}
}

@media screen and (max-width: 767px) {
  .small{
    display: block;
  }

  .big{
    display: none;
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

  /*slide*/
  .top-nav{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    .navigation{
      background: rgba(0,0,0,0);
      .nav{
        ul{
          list-style: none;
          margin: 0;
          padding: 0;
          .icon{
            li{
              font-size: 16px;
              display: inline-block;
              padding: 20px 18px;
              transition: 0.4s;
            }
          }
          .icon:hover li{
            background: rgba(0,0,0,0.2);
            transition: 0.4s;
          }
        }
      }
    }
  }

  /*content*/
  .intro{
    max-width: 800px;
    margin: 0px auto 0px;
    padding: 40px 5px 0;
    .text{
      width: 310px;
      margin: 20px auto 30px;
      text-align: left;
      padding: 5px;
      h1{
        font-size: 28px;
        margin:0 0 14px ;
        h1 span{
          color: #FF8C00;
        }
      }
    }
    .detail-text{

      a{
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
      a:hover{
        background:#1F4575;
        transition: 0.4s;
        color: #fff;
        transition: 0.4s;
      }
      p{
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
        margin: 0;
        line-height: 180%;
      }
    }
    .button{
      text-align: right;
      margin-top: 20px;
    }
    .table{
      margin: 0 auto;
      table{
        margin: 0 auto;
        td{
          border-top: none;
          padding: 5px;
          img{
            width: 140px;
            line-height: 0;
            font-size: 0;
          }
        }
      }
    }
  }
}

</style>
