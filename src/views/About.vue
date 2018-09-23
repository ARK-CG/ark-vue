<template>
<div class="about">
  <div class="template">
    <div class="content">
      <div class="content-title">
        <h1>Aout us</h1>
        <p>ARKについて</p>
      </div>
      <p>テキストが入りますテキストが入りますテキストが入りますテキストが入ります
      テキストが入りますテキストが入りますテキストが入りますテキストが入ります
    テキストが入りますテキストが入りますテキストが入りますテキストが入ります
  テキストが入りますテキストが入りますテキストが入りますテキストが入ります</p>
    </div>

    <div class="content">
      <div class="content-title">
        <h1>Activity</h1>
        <p>活動内容</p>
      </div>
      <div class="item">
        <h2>3DCG</h2>
        <p>当サークルのメイン活動内容となっている3DCGはメンバー個人個人がそれぞれのソフトを使いたくさんの作品を出しています。<br />
          基本的には個人作業ですが、サークル全体で撮影なども行っています。</p>
      </div>

      <div class="item">
        <h2>イラストレーション</h2>
        <p>この分野は得意なメンバーが各々の好きなイラストを描いています。<br />
          またそのイラストをモデリングをする試みも行われています。</p>
      </div>

      <div class="item">
        <h2>webアプリケーション</h2>
        <p>webアプリケーションは2018年から始まったプロジェクトです。<br />
          エンジニアコースやデザインコースのメンバーが協力してサービスを作っています。</p>
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
                  <td>[ARK] CG・映像制作サークル</td>
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
                <div class="col-12 col-md-4 left">
                    <div class="prf fade-in">
                        <img src="../assets/Yaegashi.jpg" style="width:100%" alt="">
                        <div class="info">
                          <p class="name">Takashi Horigome</p>
                          <p class="position">President</p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4 center">
                    <div class="prf fade-in">
                        <img src="../assets/Yaegashi.jpg" style="width:100%" alt="">
                        <div class="info">
                          <p class="name">Koshi Iside</p>
                          <p class="position">Vice-president</p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4 right">
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
let GoogleMapsLoader = require("google-maps");

GoogleMapsLoader.KEY = "AIzaSyBVLIBCpmJvpHg8j7_RY-rQX500dS3xltw";
GoogleMapsLoader.LANGUAGE = "ja";

export default {
  name: "Gmap",
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

<style scoped>
.fade-in {
  transition: opacity 0.4s;
  -moz-transition: opacity 0.4s;
  -webkit-transition: opacity 0.4s;
  -o-transition: opacity 0.4s;
}

.eycatch {
  width: 100%;
}

h1 {
  font-size: 24px;
  display: inline-block;
  font-weight: bold;
}

.content .content-title p{
  font-size: 14px;
  color: #999;
  display: inline-block;
  margin-left: 28px;
}

.content .item{
  margin-bottom: 40px;
}

h2{
  font-size: 20px;
  font-weight: bold;
}

.content p{
  font-size: 14px;
  line-height: 180%;
}

.text {
  display: inline-block;
}

.template{
  max-width: 1024px;
  padding-bottom: 100px;
  margin: 0 auto;
  padding:30px;
  font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic';
}

.about {
  background: #F1F1F1;
  color: #555;
}

@media screen and (min-width: 767px) {
  .content {
    width: 100%;
    margin-top: 50px;
  }

  .row {
    margin: auto;
    width: 80%;
  }

  .col-md-6 {
    padding: 0;
  }

  .left {
    padding-right: 20px;
  }

  .right {
    padding-left: 20px;
  }


  td {
    padding: 10px 40px 10px 0;
    vertical-align: top;
    font-size: 14px;
    line-height: 140%;
  }

  .map_wrap {
    margin: 20px auto;
  }

  #map {
    margin: 0 auto;
    width: 100%;
    height: 400px;
  }

  .member {
    background: transparent;
    margin-bottom: 100px;
  }

  .prf{
    position: relative;
  }

  .info{
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 10px;
  }

  .info p{
    margin: 0 10px;
    color: #fff;
  }

  .info .name{
    font-size: 12px;
    font-weight: bold;
  }

  .info .position{
    font-size: 10px;
  }


  .right {
    padding: 0 0 0 20px;
  }

  .center {
    padding: 0 10px;
  }

  .left {
    padding: 0 20px 0 0;
  }
}

@media screen and (max-width: 767px) {
  .eyecatch p {
    color: #fff;
  }

  p {
    font-size: 14px;
  }

  td {
    font-size: 12px;
    padding: 10px 5px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  #map {
    width: 100%;
    height: 250px;
  }

  .content {
    width: 80%;
    margin: 50px auto;
  }

  .category {
    margin: 0 0 80px auto;
  }

  .category h3 {
    font-size: 18px;
  }

  .category p {
    margin-bottom: 30px;
  }

  .text {
    margin-bottom: 30px;
  }

  .ex {
    width: 100%;
    background: #ecf0f1;
    padding: 30px 0;
  }

  .ex2 {
    width: 80%;
    margin: 0 auto;
  }

  .ex2 h2 {
    margin: 0px auto 30px;
  }

  .map_wrap {
    margin: 20px auto;
  }

  .member h2 {
    width: 80%;
  }

  .member h2 {
    width: 80%;
    margin: 50px auto;
  }

  .prf {
    margin-bottom: 60px;
  }

  .position {
    text-align: center;
    font-size: 14px;
  }

  .member p {
    margin: 0;
  }
}

footer {
  width: 100%;
  height: 120px;
  background: #1afafa;
  margin-top: 70px;
}
</style>
