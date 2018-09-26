<template>
  <div class="swipers swiper-container">
    <div class="top-nav">
      <Nav/>
    </div>
        <swiper :options="swiperOption">
          <swiper-slide>
            <div class="slide-img first"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-img second"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-img third"></div>
          </swiper-slide>
        </swiper>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "Swipers",
  components: {
    Nav
  },
  data() {
    return {
      // list: data,
      swiperOption: {
        //http://idangero.us/swiper/api/
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 6000
        },
        speed:1000,
        loop: true,
        centeredSlides: true,
        effect:"fade"
      }
    };
  }
};
</script>

<style scoped lang="scss">
@media screen and (min-width: 767px) {
  .small{
    display: none;
  }

  .big{
    display: block;
  }

  .swiper-container {
    position: relative;
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
              color: red;
              li{
                font-size: 14px;
                display: inline-block;
                padding: 20px 18px;
                transition: 0.4s;
              }
            }
            .icon:hover li{
              background: red;
              transition: 0.4s;
            }
          }
        }
      }
    }
    .slide-img{
      width: 100%;
      height: 420px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .first{
      background-image: url(../assets/carmodel.png);
    }
    .second{
      background-image: url(../assets/kaito-work2.png);
    }
    .third{
      background-image: url(../assets/kaito-work1.png);
    }

  }

  img {
    width: 100%;;
  }
}

@media screen and (max-width: 767px) {
  .small{
    display: block;
  }

  .big{
    display: none;
  }

  .swiper-container {
    position: relative;
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
              color: red;
              li{
                font-size: 14px;
                display: inline-block;
                padding: 20px 18px;
                transition: 0.4s;
              }
            }
            .icon:hover li{
              background: red;
              transition: 0.4s;
            }
          }
        }
      }
    }
    .slide-img{
      width: 100%;
      height: 280px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .first{
      background-image: url(../assets/carmodel.png);
    }
    .second{
      background-image: url(../assets/kaito-work2.png);
    }
    .third{
      background-image: url(../assets/kaito-work1.png);
    }

  }

  img {
    width: 100%;;
  }

}
</style>
