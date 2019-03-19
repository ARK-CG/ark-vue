<template>
  <div class="home">
    <div class="eyecacth">
      <div class="eyecacth_content">
        <div class="logo_svg">
          <svg version="1.1" id="layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
          	 y="0px" viewBox="0 0 238.7 115.7" style="enable-background:new 0 0 238.7 115.7;" xml:space="preserve">
          <path class="round" d="M0.4,2.2v113.5h238.3V2.2H0.4z M227.3,104.3H11.7V13.5h215.6V104.3z"/>
          <g>
          	<path class="st0" d="M102.6,36.2c0-6.3-5.1-11.3-11.3-11.3H68.5V93h11.3V64.5h8.5c1.6,0,2.9,1.3,2.9,2.9V93h11.3V66.9
          		c0-3.2-1.3-6-3.4-8.1c2.1-2.1,3.4-4.9,3.4-8.1V36.2z M79.9,53.4V36.2h8.5c1.6,0,2.9,1.3,2.9,2.9v11.3c0,1.6-1.3,2.9-2.9,2.9H79.9z"
          		/>
          </g>
          <g>
          	<path class="st0" d="M148,50.6c0,3.2-1.3,6.1-3.4,8.1c2.1,2.1,3.4,4.9,3.4,8.1V93h-11.3V67.4c0-1.6-1.3-2.9-2.9-2.9h-8.5V93h-11.3
          		V24.9h11.3v28.5h8.5c1.6,0,2.9-1.3,2.9-2.9V24.9H148V50.6z"/>
          </g>
          <polygon class="st1" points="159.2,24.9 159.2,93 181.9,93 181.9,81.6 170.6,81.6 170.6,36.2 181.9,36.2 181.9,24.9 "/>
          <polygon class="st1" points="216,93 216,24.9 193.3,24.9 193.3,36.2 204.6,36.2 204.6,81.6 193.3,81.6 193.3,93 "/>
          <g>
          	<path class="st0" d="M45.8,24.9H34.4c-6.3,0-11.3,5.1-11.3,11.3V93h11.3l0-28.5h11.3l0,28.5h11.3V36.2C57.1,30,52,24.9,45.8,24.9z
          		 M45.8,53.4H34.4V41.9c0-0.8,0.2-1.6,0.5-2.3c0.9-2,2.9-3.3,5.2-3.3c2.3,0,4.3,1.4,5.2,3.3c0.3,0.7,0.5,1.5,0.5,2.3V53.4z"/>
          </g>
          <path class="st0" d="M11.7,13.5"/>
          </svg>

        </div>
        <p class="chatphrase">デジタルテックで世界にプラスα。</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v13M5 12l7 7 7-7"/></svg>
      </div>
    </div>

    <div class="feature">
      <div class="img odd small" v-bind:class="{ active_img01: isActive01}">
        <img src="../assets/newlp.png" alt="" style="width:100%">
      </div>
      <div class="text" v-bind:class="{ active01: isActive01}">
        <h3>Web Development</h3>
        <p class="sub">webサイト制作</p>
        <p>webアプリケーションは2018年から始まったプロジェクトです。
エンジニアコースやデザインコースの
メンバーが協力してサービスを作っています。
</p>
      </div>
      <div class="img odd big" v-bind:class="{ active_img01: isActive01}">
        <img src="../assets/newlp.png" alt="" style="width:100%">
      </div>
    </div>

    <div class="feature">
      <div class="img even small" v-bind:class="{ active_img02: isActive02}">
        <img src="../assets/carmodel.png" alt="" style="width:100%">
      </div>
      <div class="img big" v-bind:class="{ active_img02: isActive02}">
        <img src="../assets/carmodel.png" alt="" style="width:100%">
      </div>
      <div class="text even" v-bind:class="{ active02: isActive02}">
        <h3>3D Computer graphic</h3>
        <p class="sub">3DCG制作</p>
        <p>当サークルのメイン活動内容となっている3DCGは
メンバー個人個人がそれぞれのソフトを
使いたくさんの作品を出しています。
基本的には個人作業ですが、サークル全体で撮影なども行っています。</p>
      </div>
    </div>

    <div class="feature">
      <div class="img odd small" v-bind:class="{ active_img03: isActive03}">
        <img src="../assets/work01.jpg" alt="" style="width:100%">
      </div>
      <div class="text" v-bind:class="{ active03: isActive03}">
        <h3>2D illustration</h3>
        <p class="sub">2Dイラストレーション</p>
        <p>この分野は得意なメンバーが各々の好きなイラストを描いています。
またそのイラストをモデリングをする試みも行われています。</p>
      </div>
      <div class="img odd big" v-bind:class="{ active_img03: isActive03}">
        <img src="../assets/work01.jpg" alt="" style="width:100%">
      </div>
    </div>

    <div class="about">
      <div class="">
        <div class="img">
          <img src="../assets/arklogo01.png" alt="">
        </div>
        <p class="text">映像制作コンピュータエンジニアリング、グラフィックスデザイン及びインターフェースデザインその他に興味を持った現役大学生の団体です。
昨今のデジタルコンテンツ市場の拡大に伴う高度なCG技術やコンピュータ処理、その知識と教養を養うべく日々活動をしています。</p>
      </div>
    </div>


    <!-- <TopNews title="Latest News" path='news' :limitNum="1" /> -->

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      isActive01: false,
      isActive02: false,
      isActive03: false,
      modal: false,
      message: '',
      scrollY: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
        this.scrollY = window.scrollY;
        if (this.scrollY > 400) {
          this.isActive01 = true
        }
        if (this.scrollY > 700) {
          this.isActive02 = true
        }
        if (this.scrollY > 1400) {
          this.isActive03 = true
        }
    }
  }
};
</script>
<style>
/*top*/
@keyframes charctor02 {
  0% {
    stroke-dashoffset: 2000;
    fill:rgba(195, 13, 35,0);
    stroke:rgba(195, 13, 35,0);
  }
  40% {
    stroke-dashoffset: 2000;
    fill:rgba(195, 13, 35,0);
    stroke:rgba(195, 13, 35,0);
  }
  50% {
    fill:rgba(195, 13, 35,0);
    stroke:rgba(195, 13, 35,0.6);
  }

  60% {
    fill:rgba(195, 13, 35,1);
  }

  80% {
    fill:rgba(195, 13, 35,1);
  }

  100% {
    fill:rgba(195, 13, 35,1);
    stroke:rgba(195, 13, 35,1);
    stroke-dashoffset: 0;
  }
}

@keyframes charctor01 {
  0% {
    stroke-dashoffset: 2000;
    fill:rgba(29,30,30,0);
    stroke:rgba(29,30,30,0);
  }
  40% {
    stroke-dashoffset: 2000;
    fill:rgba(29,30,30,0);
    stroke:rgba(29,30,30,0);
  }
  50% {
    fill:rgba(29,30,30,0);
    stroke:rgba(29,30,30,1);
  }

  60% {
    fill:rgba(29,30,30,1);
    stroke-dashoffset: 0;
  }

  80% {
    fill:rgba(29,30,30,1);
    stroke-dashoffset: 0;
  }

  100% {
    fill:rgba(29,30,30,1);
    stroke:rgba(29,30,30,1);
  }
}

@keyframes round {
  0% {
    stroke-dashoffset: 2000;
    fill:rgba(0,0,0,0);
    stroke:rgba(0,0,0,0);
  }
  40% {
    stroke-dashoffset: 2000;
    fill:rgba(0,0,0,0);
    stroke:rgba(0,0,0,0);
  }
  50% {
    fill:rgba(0,0,0,0);
    stroke:rgba(29,30,30,0.6);
  }

  80% {
    stroke-dashoffset: 0;
  }

  100% {
    fill:rgba(29,30,30,1);
    stroke:rgba(29,30,30,1);
  }
}

@keyframes fadein01 {
  0% {
    color:rgba(31,31,31,0);
    transform: translateY(30px);
  }
  100% {
    color:rgba(31,31,31,1);
    transform: translateY(0px);
  }
}

@keyframes fadein02 {
  0% {
    color:rgba(31,31,31,0);
    transform: translateX(-80px);
    opacity: 0;
  }
  80% {
    color:rgba(31,31,31,1);
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes fadein03 {
  0% {
    color:rgba(31,31,31,0);
    transform: translateX(80px);
    opacity: 0;
  }
  40% {
    color:rgba(31,31,31,0);
    transform: translateX(80px);
    opacity: 0;
  }
  80% {
    color:rgba(31,31,31,1);
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes updown {
  0% {
    transform: translateY(15px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(15px);
  }
}
@media screen and (min-width: 767px) {

.st0 {
  animation: charctor01 5s ease-in 0s;
  stroke:#1D1E1E;
  fill:#1D1E1E;
  stroke-dasharray: 2000;
  stroke-dashoffset: 0;
  stroke-width: 1;
}

.st1 {
  animation: charctor02 5s ease-in 0s;
  stroke:#C30D23;
  fill:#C30D23;
  stroke-dasharray: 2000;
  stroke-dashoffset: 0;
  stroke-width: 1;
}


.round {
  animation: round 3s ease-in 0s;
  stroke:#1D1E1E;
  fill:#1D1E1E;
  stroke-dasharray: 2000;
  stroke-dashoffset: 0;
  stroke-width: 1;
}

.logo_svg svg {
  width: 200px;
}


  .small {
    display: none;
  }

  .big {
    display: block;
  }
  .template {
    max-width: 1024px;
    padding-bottom: 100px;
    margin: 0 auto;
    padding: 30px;
    font-family: 'Avenir', 'Helvetica Neue', 'Helvetica', 'Arial',
      'Hiragino Sans', 'ヒラギノ角ゴシック', YuGothic, 'Yu Gothic', 'メイリオ',
      Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic';
  }
  .home {
    font-family: 'Avenir', 'Helvetica Neue', 'Helvetica', 'Arial',
      'Hiragino Sans', 'ヒラギノ角ゴシック', YuGothic, 'Yu Gothic', 'メイリオ',
      Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic';
  }

  .eyecacth {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    z-index: -1;
  }
  .eyecacth img {
    width: 200px;
  }



  .eyecacth_content > svg {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%,0%);
    animation: updown 1s ease-in 0s;
    animation-iteration-count: infinite;
  }
  .eyecacth .chatphrase {
    color: #1f1f1f;
    font-weight: bold;
    margin-top: 1rem;
    padding-left: 1rem;
    font-size: 1rem;
    animation: fadein01 1s ease-in 0s;
  }

  .feature {
    height: 100vh;
    display: flex;
    max-width: 800px;
    margin: 0 auto;
    align-items: center;
  }

  .feature .img {
    width: 280px;
    background-color: #ddd;
    opacity: 0;
    box-shadow: 0px 0px 2px rgba(0,0,0,0.3);
  }

  .feature .odd {
    margin-left: auto;
  }

  .feature .even {
    margin-left: 1.5rem;
  }

  .feature .text {
    padding: 3rem 1rem 1rem 3rem;
    border-top: 5px solid #1f1f1f;
    border-left: 5px solid #1f1f1f;
    opacity: 0;
  }

  .feature .active01 {
    animation: fadein02 1s ease-in 0s;
    opacity: 1;
  }

  .feature .active02 {
    animation: fadein02 1s ease-in 0s;
    opacity: 1;
  }

  .feature .active03 {
    animation: fadein02 1s ease-in 0s;
    opacity: 1;
  }

  .feature .active_img01 {
    animation: fadein03 1s ease-in 0s;
    opacity: 1;
  }

  .feature .active_img02 {
    animation: fadein03 1s ease-in 0s;
    opacity: 1;
  }

  .feature .active_img03 {
    animation: fadein03 1s ease-in 0s;
    opacity: 1;
  }



  .feature .text h3 {
    color: #1f1f1f;
    font-weight: bold;
    margin: 0;
  }

  .feature .text h3::first-letter{
    color: #c30d23;
  }

  .feature .text p {
    white-space: pre-wrap;
    font-size: 14px;
    color: #1f1f1f;
  }

  .feature .text .sub {
    font-size: 1rem;
  }

  .about {
    max-width: 800px;
    margin: 0 auto 5rem;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about .img {
    margin: 0 auto;
    width: 120px;
  }

  .about .img img {
    width: 100%;
  }

  .about .text {
    margin-top: 1.5rem;
    color: #1f1f1f;
    font-size: 14px;
    line-height: 2.2;
    text-align: center;
  }

  /*slide*/
}

@media screen and (max-width: 767px) {
  .st0 {
    animation: charctor01 5s ease-in 0s;
    stroke:#1D1E1E;
    fill:#1D1E1E;
    stroke-dasharray: 2000;
    stroke-dashoffset: 0;
    stroke-width: 1;
  }

  .st1 {
    animation: charctor02 5s ease-in 0s;
    stroke:#C30D23;
    fill:#C30D23;
    stroke-dasharray: 2000;
    stroke-dashoffset: 0;
    stroke-width: 1;
  }


  .round {
    animation: round 3s ease-in 0s;
    stroke:#1D1E1E;
    fill:#1D1E1E;
    stroke-dasharray: 2000;
    stroke-dashoffset: 0;
    stroke-width: 1;
  }

  .logo_svg svg {
    width: 200px;
  }


  .small {
    display: block;
  }

  .big {
    display: none;
  }
  .template {
    max-width: 1024px;
    padding-bottom: 100px;
    margin: 0 auto;
    padding: 30px;
    font-family: 'Avenir', 'Helvetica Neue', 'Helvetica', 'Arial',
      'Hiragino Sans', 'ヒラギノ角ゴシック', YuGothic, 'Yu Gothic', 'メイリオ',
      Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic';
  }
  .home {
    font-family: 'Avenir', 'Helvetica Neue', 'Helvetica', 'Arial',
      'Hiragino Sans', 'ヒラギノ角ゴシック', YuGothic, 'Yu Gothic', 'メイリオ',
      Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic';
  }

  .eyecacth {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    z-index: -1;
  }
  .eyecacth img {
    width: 200px;
  }
  .eyecacth_content > svg {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%,0%);
    animation: updown 1s ease-in 0s;
    animation-iteration-count: infinite;
  }
  .eyecacth .chatphrase {
    color: #1f1f1f;
    font-weight: bold;
    margin-top: 1rem;
    padding-left: 1rem;
    font-size: 1rem;
    animation: fadein01 1s ease-in 0s;
  }

  .feature {
    max-width: 800px;
    margin: 0 auto;
    align-items: center;
    padding: 1rem;
    margin-bottom: 4rem;
  }

  .feature .img {
    margin: 0 auto;
    width: 200px;
    background-color: #ddd;
    opacity: 0;
    box-shadow: 0px 0px 2px rgba(0,0,0,0.3);
  }

  .feature .odd {
    margin-left: auto;
  }

  .feature .even {
    margin-left: auto;
  }

  .feature .text {
    padding: 1rem;
    border-bottom: 5px solid #1f1f1f;
    border-right: 5px solid #1f1f1f;
    opacity: 0;
    margin-top: 1rem;
    text-align: center;
  }

  .feature .active01 {
    animation: fadein02 1s ease-in 0s;
    opacity: 1;
  }

  .feature .active02 {
    animation: fadein02 1s ease-in 0s;
    opacity: 1;
  }

  .feature .active03 {
    animation: fadein02 1s ease-in 0s;
    opacity: 1;
  }

  .feature .active_img01 {
    animation: fadein03 1s ease-in 0s;
    opacity: 1;
  }

  .feature .active_img02 {
    animation: fadein03 1s ease-in 0s;
    opacity: 1;
  }

  .feature .active_img03 {
    animation: fadein03 1s ease-in 0s;
    opacity: 1;
  }

  .feature .text h3 {
    color: #1f1f1f;
    font-weight: bold;
    margin: 0;
  }

  .feature .text h3::first-letter{
    color: #c30d23;
  }

  .feature .text p {
    white-space: pre-wrap;
    font-size: 14px;
    color: #1f1f1f;
    text-align: left;
  }

  .feature .text .sub {
    font-size: 1rem;
    text-align: center;
  }

  .about {
    max-width: 800px;
    margin: 0 auto 5rem;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about .img {
    margin: 0 auto;
    width: 120px;

  }

  .about .img img {
    width: 100%;
  }

  .about .text {
    margin-top: 1.5rem;
    color: #1f1f1f;
    font-size: 14px;
    line-height: 2.2;
    text-align: center;
    padding: 1rem;
  }
}
</style>
