<template id="">
  <footer>
    <div class="nav">
      <ul>
        <router-link class="icon icon-layers" to="/about"><li>＞ About</li> </router-link>
        <router-link class="icon icon-layers" to="/gallery"><li>＞ Gallery</li> </router-link>
        <router-link class="icon icon-layers" to="/news"><li>＞ News</li> </router-link>
        <router-link class="icon icon-layers" to="/member"><li>＞ For member</li> </router-link>
      </ul>

      <p>©  2018 ARK. All Rights Reserved.</p>
    </div>
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

<style lang="scss">
  footer{
    background: #0F2138;
    text-align: center;
    .nav{
      padding: 25px 0 15px;
      text-align: center;
      display: block;
      a{
        margin: 0 15px;
      }
      ul{
        padding: 0;
        margin: 0;
        list-style: none;
        li{
          color: #fff;
          font-size: 12px;
          display: inline-block;
        }
      }
      p{
        margin: 20px 0 0;
        color: rgba(255,255,255,0.6);
        font-size: 12px;
        font-weight: lighter;
      }
    }
  }
</style>
