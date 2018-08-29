<template>
  <div class="gallery">
  <Data title="Gallery" path='works' />
</div>
</template>

<script>
import Data from "@/components/Data.vue";

export default {
  name: "Gallery",
  components: {
    Data
  },
  methods: {}
};
</script>

<style>
/*News*/
.gallery {
  background: #ecf0f1;
  width: 100%;
  padding-bottom: 100px;
}
</style>
