<template>
  <div class="swipers swiper-container">
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
export default {
  name: "Swipers",
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
  .swiper-container {
    .slide-img{
      width: 100%;
      height: 400px;
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
  .swiper-container {
  }
}
</style>
