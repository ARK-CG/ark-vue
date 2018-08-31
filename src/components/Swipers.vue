<template>
  <div class="swipers swiper-container">
        <!-- swiper -->
        <swiper :options="swiperOption">
          <!-- <swiper-slide v-for="item in list" :key="item.id"><img :src="item.url"></swiper-slide>-->
          <swiper-slide><img src="../assets/logo.png"></swiper-slide>
          <swiper-slide><img src="https://pbs.twimg.com/media/DlcFfdkVAAIN_Bo.jpg"></swiper-slide>
          <swiper-slide><img src="https://pbs.twimg.com/media/DlcFfdxU0AUNqLX.jpg"></swiper-slide>
          <swiper-slide><img src="https://pbs.twimg.com/media/Dd-rYFaVQAAXsOy.jpg"></swiper-slide>
          <swiper-slide><img src="https://firebasestorage.googleapis.com/v0/b/ark-cg.appspot.com/o/swiper%2F39025550_318120438733120_1924821303445946368_n.jpg?alt=media&token=21b5f4b8-5fae-492d-9364-f774ad3b5c4f"></swiper-slide>
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
@media screen and (min-width: 767px) {
  .swiper-container {
    padding: 2% 5%;
  }
  img {
    height: 30vw;
    width: auto;
    padding-bottom: 3%;
    margin-bottom: 3%;
  }
}
@media screen and (max-width: 767px) {
  .swiper-container {
    padding: 3% 3%;
  }
  img {
    height: 33vh;
    width: 66vw;
    padding-bottom: 3%;
    margin-bottom: 3%;
    object-fit: cover;
  }
}
</style>
