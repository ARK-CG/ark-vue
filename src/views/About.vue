<template>
<div class="about">
    <div class="eyecatch">
        <img src="../assets/eye.jpg" alt="" width="100%">
        <p>わたし達はたくさんの作品を作っています。</p>
    </div>
    <div class="content">
        <div class="row">
            <div class="col-12 col-md-6 fade-in left">
                <div class="category">
                    <h3>3D CG</h3>
                    <p>当サークルのメイン活動内容となっている 3DCGはメンバー個人個人がそれぞれのソフトを使いたくさんの作品を出しています。 基本的には個人作業だがサークル全体で撮影なども行っています。
                    </p>
                </div>
            </div>

            <div class="col-12 col-md-6 fade-in right">
                <div class="category">
                    <h3>イラストレーション</h3>
                    <p>この分野は得意なメンバーが各々の好きなイラストを描いています。またそのイラストをモデリングをする試みも行われています。</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-md-6 fade-in left">
                <div class="category">
                    <h3>webアプリケーション</h3>
                    <p>webアプリケーションは2018年から始まったプロジェクトです。エンジニアコースやデザインコースのメンバーが協力してサービスを作っています。</p>
                </div>
            </div>
        </div>
    </div>

    <div class="ex">
        <div class="ex2">
            <h2 class="fade-in">サークル概要</h2>
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
                <div
      id="map"
      :style="{width: mapWidth + 'px',height: mapHeight + 'px'}"></div>
                </div>
        </div>
    </div>
      <div class="member">
        <h2 class="fade-in">メンバー紹介</h2>
        <div class="content">
            <div class="row">
                <div class="col-12 col-md-4 left">
                    <div class="prf fade-in">
                        <img src="../assets/Yaegashi.jpg" style="width:100%" alt="">
                        <p class="position">会長</p>
                        <p class="name">堀米崇</p>
                        <p class="explain">デザインコース所属
                            <br>2017年サークルを創立。
                            <br>モデリングが出来ます。</p>
                    </div>
                </div>

                <div class="col-12 col-md-4 center">
                    <div class="prf fade-in">
                        <img src="../assets/Yaegashi.jpg" style="width:100%" alt="">
                        <p class="position">副会長</p>
                        <p class="name">石出港士</p>
                        <p class="explain">エンジニアコース所属
                            <br>サーバーの知識がすごい人。</p>
                    </div>
                </div>

                <div class="col-12 col-md-4 right">
                    <div class="prf fade-in">
                        <img src="../assets/Yaegashi.jpg" style="width:100%" alt="">
                        <p class="position">広報長</p>
                        <p class="name">八重樫建成</p>
                        <p class="explain">デザインコース所属
                            <br>インターフェースに詳しい人。</p>
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
    mapWidth: {
      type: Number,
      default: 600
    },
    mapHeight: {
      type: Number,
      default: 600
    },
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
        return [];
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
      this.formattedMarkers.forEach(marker => {
        marker.setMap(null);
      });
      // propsからも削除
      this.formattedMarkers.splice(0, this.formattedMarkers.length);

      // 再描画
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
          '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
          '<div id="bodyContent">' +
          "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
          "sandstone rock formation in the southern part of the " +
          "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
          "south west of the nearest large town, Alice Springs; 450&#160;km " +
          "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
          "features of the Uluru - Kata Tjuta National Park. Uluru is " +
          "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
          "Aboriginal people of the area. It has many springs, waterholes, " +
          "rock caves and ancient paintings. Uluru is listed as a World " +
          "Heritage Site.</p>" +
          '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
          "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
          "(last visited June 22, 2009).</p>" +
          "</div>" +
          "</div>";

        // マーカー
        let marker = new google.maps.Marker({
          position: markerInfo.position,
          icon:
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
          map: this.map,
          // ポップなアニメーションを付与
          animation: google.maps.Animation.DROP
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

h2 {
  font-size: 24px;
}

.text {
  display: inline-block;
}

@media screen and (min-width: 767px) {
  .eyecatch p {
    color: #fff;
  }

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

  .category {
    width: 100%;
    margin: 0 auto;
  }

  .category h3 {
    font-size: 18px;
  }

  .category p {
    font-size: 14px;
    margin-bottom: 70px;
    line-height: 200%;
    padding-right: 40px;
  }

  .ex {
    width: 100%;
    background: #ecf0f1;
    padding: 30px 0 50px 0;
  }

  .ex2 {
    width: 80%;
    margin: 0 auto;
  }

  .ex2 h2 {
    margin: 20px auto;
  }

  td {
    padding: 20px 40px 20px 0;
    vertical-align: top;
  }

  .map_wrap {
    margin: 20px auto;
  }

  #map {
    margin: 0 auto;
    width: 100%;
    height: 400px;
  }

  .member h2 {
    width: 80%;
    margin: 50px auto;
  }

  .member {
    margin-bottom: 100px;
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

  .position {
    text-align: center;
    margin: 5px auto;
  }

  .name {
    margin: 0 auto;
  }

  .explain {
    margin: 5px 0 auto;
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
  background: #1e1e1e;
  margin-top: 70px;
}
</style>
