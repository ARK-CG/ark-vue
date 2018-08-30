<template>
  <div class="swipers swiper-container">
        <!-- swiper -->
        <swiper :options="swiperOption">
          <!-- <swiper-slide v-for="item in list" :key="item.id"><img :src="item.url"></swiper-slide>-->
          <swiper-slide><img src="../assets/logo.png"></swiper-slide>
          <swiper-slide><img src="https://pbs.twimg.com/media/DlcFfdkVAAIN_Bo.jpg"></swiper-slide>
          <swiper-slide><img src="https://storage.googleapis.com/ark-cg.appspot.com/imgae/1534996294.3607738.jpg"></swiper-slide>
          <swiper-slide><img src="https://pbs.twimg.com/media/DlcFfdxU0AUNqLX.jpg"></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
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
          delay: 2500
        },
        loop: true,
        centeredSlides: true
      }
    };
  }
};
</script>

<style scoped>
.swiper-container {
  padding: 2% 5%;
}
img {
  height: 30vw;
  width: auto;
  padding-bottom: 3%;
  margin-bottom: 3%;
}
</style>
