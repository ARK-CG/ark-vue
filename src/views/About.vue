<template>
<div class="about">
  <Nav />
  <div class="template">
    <div class="content">
      <div class="content-title">
        <h1>Aout us</h1>
        <p>ARKについて</p>
      </div>
      <p class="about">映像制作コンピュータエンジニアリング、グラフィックスデザイン及びインターフェースデザインその他に興味を持った現役大学生の団体です。
        <br />昨今のデジタルコンテンツ市場の拡大に伴う高度なCG技術やコンピュータ処理、その知識と教養を養うべく日々活動をしています。</p>
    </div>

    <div class="content">
      <div class="content-title">
        <h1>Activity</h1>
        <p>活動内容</p>
      </div>
      <div class="item odd">
        <div class="img small">
          <img src="../assets/carmodel.png" alt="">
        </div>
        <div class="texts">
          <h2>3DCG</h2>
          <p>当サークルのメイン活動内容となっている3DCGはメンバー個人個人がそれぞれのソフトを使いたくさんの作品を出しています。<br />
            基本的には個人作業ですが、サークル全体で撮影なども行っています。</p>
        </div>
        <div class="img big">
          <img src="../assets/carmodel.png" alt="">
        </div>
      </div>

      <div class="item even">
        <div class="img">
          <img src="../assets/carmodel.png" alt="">
        </div>
        <div class="texts">
          <h2>イラストレーション</h2>
          <p>この分野は得意なメンバーが各々の好きなイラストを描いています。<br />
            またそのイラストをモデリングをする試みも行われています。</p>
        </div>

      </div>

      <div class="item odd web">
        <div class="img small">
          <img src="../assets/motom-sample.png" alt="">
        </div>
        <div class="texts">
          <h2>webアプリケーション</h2>
          <p>webアプリケーションは2018年から始まったプロジェクトです。<br />
            エンジニアコースやデザインコースのメンバーが協力してサービスを作っています。</p>
        </div>
        <div class="img big">
          <img src="../assets/motom-sample.png" alt="">
        </div>
      </div>
    </div>

    <div class="content">
      <div class="content-title">
        <h1>Infomation</h1>
        <p>サークル概要</p>
      </div>
      <div class="text fade-in">
          <table>
              <tr>
                  <td>サークル名</td>
                  <td>[ARK] CG・映像制作<br class="small"/>サークル</td>
              </tr>
              <tr>
                  <td>アドレス</td>
                  <td>〒115-0053
                      <br>東京都北区赤羽台1-7-11</td>
              </tr>
              <tr>
                  <td>アクセス</td>
                  <td>赤羽駅西口から徒歩10分
                      <br />赤羽台岩渕駅から徒歩12分</td>
              </tr>
              <tr>
                  <td>部員数</td>
                  <td>20人</td>
              </tr>
          </table>
      </div>

      <hr>

      <div class="map_wrap fade-in">
          <div id="map"></div>
      </div>
    </div>
      <div class="member content">
        <div class="content-title">
          <h1 class="fade-in">Member</h1>
          <p>メンバー紹介</p>
        </div>
        <div class="content">
            <div class="row">
                <div class="col-6 col-md-4 left">
                    <div class="prf fade-in">
                        <img src="../assets/bear.jpg" style="width:100%" alt="">
                        <div class="info">
                          <p class="name">Takashi Horigome</p>
                          <p class="position">President</p>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-4 center">
                    <div class="prf fade-in">
                        <img src="../assets/Ishide.jpg" style="width:100%" alt="">
                        <div class="info">
                          <p class="name">Koshi Iside</p>
                          <p class="position">Vice-president</p>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-4 right">
                    <div class="prf fade-in">
                        <img src="../assets/Yaegashi.jpg" style="width:100%" alt="">
                        <div class="info">
                          <p class="name">Knesei Yaegashi</p>
                          <p class="position">Boss in PR</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
let GoogleMapsLoader = require("google-maps");

GoogleMapsLoader.KEY = "AIzaSyBVLIBCpmJvpHg8j7_RY-rQX500dS3xltw";
GoogleMapsLoader.LANGUAGE = "ja";

export default {
  name: "Gmap",
  components: {
    Nav
  },
  props: {
    lat: {
      type: Number,
      default: 35.780464
    },
    lng: {
      type: Number,
      default: 139.715601
    },
    zoom: {
      type: Number,
      default: 14
    },
    markers: {
      type: Array,
      default: () => {
        return [{ lat: 35.780464, lng: 139.715601 }];
      }
    }
  },
  data() {
    return {
      map: null,
      formattedMarkers: [
        {
          lat: 35.780464,
          lng: 139.715601
        }
      ]
    };
  },
  watch: {
    markers() {
      // マーカーを全削除
      // this.formattedMarkers.forEach(marker => {
      //   marker.setMap(null);
      // });
      // // propsからも削除
      // this.formattedMarkers.splice(0, this.formattedMarkers.length);
      // // 再描画
      this.addMarker();
    }
  },
  created() {},
  mounted() {
    // googleMap描画
    GoogleMapsLoader.load(this.loadMap);
  },
  methods: {
    addMarker() {
      this.markers.forEach(markerInfo => {
        var contentString =
          '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">INIAD</h1>' +
          '<div id="bodyContent">' +
          '<p>Attribution: INIAD, <a href="https://iniad.org">' +
          "https://iniad.org</a> " +
          ".</p>" +
          "</div>" +
          "</div>";

        // マーカー
        let marker = new google.maps.Marker({
          position: {
            lat: 35.780464,
            lng: 139.715601
          },
          map: this.map
          // ポップなアニメーションを付与
        });

        // マーカーのwindow
        let infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        // マーカークリック時にwindow表示
        marker.addListener("click", function() {
          infowindow.open(this.map, marker);
        });
        this.formattedMarkers.push(marker);
      });
    },
    loadMap(google) {
      // googleMapを初期化
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.lat, lng: this.lng },
        zoom: this.zoom,
        // スワイプ判定を強めに設定(地図を移動させるには..問題)
        gestureHandling: "greedy"
      });
      this.addMarker();
    },
    release() {
      GoogleMapsLoader.release(function() {
        console.log("No google maps api around");
      });
    }
  }
};
</script>

<style scoped lang="scss">
@media screen and (min-width: 767px) {
.big{
  display: block;
}

.small{
  display: none;
}

.content{
  text-align: left;
  width: 100%;
  margin-top: 80px;
  .about{
    font-size: 14px;
    line-height: 180%;
  }
  .content-title{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    h1 {
      font-size: 24px;
      display: inline-block;
      font-weight: bold;
      margin: 0;
    }
    p{
      font-size: 14px;
      color: #999;
      display: inline-block;
      margin-left: 28px;
      margin-bottom: 0;
    }
  }
  .item{
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    .img{
      width: 360px;
      padding: 10px;
      border: solid 0.8px #ccc;
      img{
        width: 100%;
      }
    }
    .texts{
      flex: 1;
      h2{
        font-size: 20px;
        font-weight: bold;
      }
      p{
        font-size: 14px;
        display: inline-block;
        line-height: 180%;
      }
    }
  }
  .web{
    .img{
      border: none;
      width: 340px;
    }
  }
  .odd{
    .texts{
      margin-right: 40px;
    }
  }
  .even{
    .texts{
      margin-left: 40px;
    }
  }
}

/*map*/
.map_wrap {
  margin: 20px auto;
  #map {
    margin: 0 auto;
    width: 100%;
    height: 400px;
  }
}


.template{
  max-width: 1024px;
  padding-bottom: 100px;
  margin: 0 auto;
  padding:15px;
  font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic';
}

.about {
  background: #FaFaFa;
  color: #555;
}
td {
  padding: 10px 40px 10px 0;
  vertical-align: top;
  font-size: 16px;
  line-height: 140%;
}

/*member*/
  .member {
    background: transparent;
    margin-bottom: 100px;
    .row {
      margin: auto;
      width: 80%;
      .left {
        padding: 0;
        padding-right: 20px;
      }
      .right {
        padding: 0;
        padding-left: 20px;
      }
      .center {
        padding: 0 10px;
      }
      .prf{
        position: relative;
        .info{
          position: absolute;
          bottom: 0;
          left: 0;
          margin-bottom: 10px;
          p{
            margin: 0 10px;
            color: #fff;
          }
          .name{
            font-size: 12px;
            font-weight: bold;
          }
          .position{
            font-size: 10px;
          }
        }
      }
    }
  }

}

@media screen and (max-width: 767px) {
  .big{
    display: none;
  }

  .small{
    display: block;
  }

  .content{
    text-align: left;
    width: 100%;
    margin-top: 15px;
    .about{
      font-size: 14px;
      line-height: 180%;
    }
    .content-title{
      margin-bottom: 30px;
      h1 {
        font-size: 24px;
        display: inline-block;
        font-weight: bold;
        margin: 0;
      }
      p{
        font-size: 12px;
        color: #999;
        margin-bottom: 0;
      }
    }
    .item{
      margin-bottom: 20px;
      .img{
        max-width: 380px;
        padding: 10px;
        border: solid 0.8px #ccc;
        margin: 20px auto;
        img{
          width: 100%;
        }
      }
      .texts{
        max-width: 350px;
        margin: 0 auto;
        h2{
          font-size: 20px;
          font-weight: bold;
        }
        p{
          font-size: 14px;
          display: inline-block;
          line-height: 180%;
        }
      }
    }
    .web{
      .img{
        border: none;
        max-width: 340px;
        img{

        }
      }
    }
    .odd{
      .texts{
        margin-right: auto;
      }
    }
    .even{
      .texts{
        margin-left: auto;
      }
    }
  }

  /*map*/
  .map_wrap {
    margin: 20px auto;
    #map {
      margin: 0 auto;
      width: 100%;
      height: 250px;
    }
  }


  .template{
    max-width: 1024px;
    padding-bottom: 100px;
    margin: 0 auto;
    padding:15px;
    font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic';
  }

  .about {
    background: #FaFaFa;
    color: #555;
  }
  td {
    padding: 10px 20px 10px 0;
    vertical-align: top;
    font-size: 14px;
    line-height: 140%;

  }

  /*member*/
    .member {
      background: transparent;
      margin-bottom: 100px;
      .row {
        margin: auto;
        width: 100%;
        .left {
          padding: 0;
          padding-right: 10px;
        }
        .center {
          padding: 0;
          padding-left: 10px;
        }
        .right {
          padding: 0;
          padding-right: 10px;
          margin-top: 20px;
        }
        .prf{
          position: relative;
          .info{
            position: absolute;
            bottom: 0;
            left: 0;
            margin-bottom: 10px;
            p{
              margin: 0 10px;
              color: #fff;
            }
            .name{
              font-size: 12px;
              font-weight: bold;
            }
            .position{
              font-size: 10px;
            }
          }
        }
      }
    }
}

</style>
