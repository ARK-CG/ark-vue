<template>
  <div class="swipers swiper-container">
        <!-- swiper -->
        <swiper :options="swiperOption">
          <swiper-slide><img src="../assets/logo.png"></swiper-slide>
          <swiper-slide><img src="https://firebasestorage.googleapis.com/v0/b/ark-cg.appspot.com/o/works%2Fparking_underground_marking_118795_3840x2160.jpg?alt=media&token=ad428cc3-a8e0-4b6d-bb5c-fd831ea2ed7c"></swiper-slide>
          <swiper-slide><img src="https://firebasestorage.googleapis.com/v0/b/ark-cg.appspot.com/o/works%2Fimage.png?alt=media&token=82abb0b4-2ba4-402e-9435-2b0172a97c74"></swiper-slide>
          <swiper-slide><img src="https://firebasestorage.googleapis.com/v0/b/ark-cg.appspot.com/o/works%2Fparking_underground_marking_118795_3840x2160.jpg?alt=media&token=ad428cc3-a8e0-4b6d-bb5c-fd831ea2ed7c"></swiper-slide>
          <swiper-slide><img src="https://firebasestorage.googleapis.com/v0/b/ark-cg.appspot.com/o/works%2Fimage.png?alt=media&token=82abb0b4-2ba4-402e-9435-2b0172a97c74"></swiper-slide>
          <!-- <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
            <img :src="banner">
          </div> -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
  </div>
</template>

<script>
export default {
  name: "Swipers",
  data() {
    console.log("swiper");
    return {
      //banners: [ '/1.jpg', '/2.jpg', '/3.jpg' ],
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
