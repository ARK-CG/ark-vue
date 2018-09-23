<template>
    <div class="navigation">
      <div class="common">
        <div class="logo">
          <a href="#">
            <router-link  id="logo" to="/">
              <img src="../assets/logo.png" alt="">
            </router-link>
          </a>
        </div>

        <div class="nav">
          <ul>
            <router-link class="icon icon-layers" to="/about"><li>About</li> </router-link>
            <router-link class="icon icon-layers" to="/gallery"><li>Gallery</li> </router-link>
            <router-link class="icon icon-layers" to="/news"><li>News</li> </router-link>
            <router-link class="icon icon-layers" to="/member"><li>For member</li> </router-link>

          </ul>
        </div>
      </div>
        <!--<div v-responsive.xs.sm.md.lg.xl >
            https://at-ui.github.io/at-ui/#/en/docs/menu
            <div class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top" role="navigation">
        <div class="container">
            <router-link class="navbar-brand" id="logo" to="/">
                <img src="../assets/logo.png" alt=""> </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                        <router-link class="icon icon-layers" to="/about">About</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/news">News</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/gallery">Gallery</router-link>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            Board
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link to="/project">Project</router-link>
                            <router-link to="/member">For member</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div> -->
        <!-- <div v-responsive.sm >
            <at-menu mode="horizontal" active-name="1">
              <at-menu-item name="1"><router-link class="icon icon-home" to="/">Home</router-link></at-menu-item>
              <at-menu-item name="2"><router-link class="icon icon-layers" to="/about">About</router-link></at-menu-item>
              <at-submenu>
                <template slot="title"><i class="icon icon-life-buoy"></i>Detail pages</template>
                  <at-menu-item name="3-1"><router-link to="/news">News</router-link></at-menu-item>
                  <at-menu-item name="3-2"><router-link to="/gallery">Gallery</router-link></at-menu-item>
                  <at-menu-item name="3-3"><router-link to="/project">Project</router-link></at-menu-item>
              </at-submenu>
            <at-menu-item name="4"><i class="icon icon-settings"></i>For member</at-menu-item>
            </at-menu>
        </div> -->
        <!-- https://github.com/AshleyLv/vue-quick-menu/blob/master/src/quickMenu.vue -->
        <!-- <div v-responsive.xs >
            <quick-menu :menu-count=count :icon-class=icons :menu-url-list=list :position=position :backgroundColor=backgroundColor></quick-menu>
        </div> -->
    </div>
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

<style lang="scss" scoped>
.navigation{
  width: 100%;
  padding: 0 62px;
  background: #1B324F;
  .common{
    display: flex;
    align-items: center;
    max-width: 1024px;
    margin: 0 auto;
  }
  .logo{
  }
  .nav{
    ul{
      list-style: none;
      margin: 0;
      padding: 0;
      .icon{
        color: #fafafa;
        li{
          font-size: 14px;
          display: inline-block;
          padding: 20px 18px;
          transition: 0.4s;
        }
      }
      .icon:hover li{
        background: #d0d0d0;
        transition: 0.4s;
      }
    }
  }
  .nav:last-of-type{
    margin-left: auto;
  }
}
</style>


<style scoped>
/*header*/
#logo img {
  width: 60px;
}

</style>
