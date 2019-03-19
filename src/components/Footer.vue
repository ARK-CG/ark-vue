<template id="">
  <footer class="footer">
    <div class="img">

    </div>
    <router-link class="icon icon-layers member" to="/member"><p>メンバーはこちらから</p> </router-link>
  </footer>
</template>

<script>
//https://github.com/AshleyLv/vue-quick-menu
import quickMenu from "vue-quick-menu";

export default {
  name: "Vue",
  data() {
    return {
      count: 3,
      icons: ["fas fa-home", "fas fa-users", "fas fa-ellipsis-h"],
      list: [
        { isLink: true, url: "/" },
        { isLink: true, url: "/about" },
        { isLink: true, url: "/gallery" }
      ],
      backgroundColor: "#1976d2",
      color: "#ffffff",
      position: "bottom-right"
    };
  },
  components: {
    quickMenu
  },
  computed: {}
};
</script>

<style>
  .footer{
    background-color: #1f1f1f;
    padding: 1rem;
    display: flex;
    align-items: center;
  }
  .member {
    margin-left: auto;
  }
  .footer p {
    font-size: 14px;
    color: #fff;
    margin:0;
    font-weight: normal;
  }
  footer img {
    width: 80px;
  }
</style>
