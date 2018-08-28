<template>
  <div class="swipers">
    <md-card>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide><img src="https://firebasestorage.googleapis.com/v0/b/ark-cg.appspot.com/o/works%2Fimage.png?alt=media&token=82abb0b4-2ba4-402e-9435-2b0172a97c74"></swiper-slide>
        <swiper-slide><img src="https://firebasestorage.googleapis.com/v0/b/ark-cg.appspot.com/o/works%2Fparking_underground_marking_118795_3840x2160.jpg?alt=media&token=ad428cc3-a8e0-4b6d-bb5c-fd831ea2ed7c"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </md-card-media>
  </md-card>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
img {
  width: 30%;
}
</style>
