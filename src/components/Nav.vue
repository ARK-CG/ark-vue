<template>
    <div class="navigation">
        <div v-responsive.sm.md.lg.xl >
            <!-- https://at-ui.github.io/at-ui/#/en/docs/menu -->
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
                            <a class="dropdown-item" href="/">For member</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        </div>
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
        <div v-responsive.xs >
            <!-- https://github.com/AshleyLv/vue-quick-menu/blob/master/src/quickMenu.vue -->
            <quick-menu :menu-count=count :icon-class=icons :menu-url-list=list :position=position :backgroundColor=backgroundColor></quick-menu>
        </div>
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
        { isLink: false }
      ],
      backgroundColor: "#1976d2",
      color: "#ffffff",
      position: "bottom-right",
      isOpenNewTab: false
    };
  },
  components: {
    quickMenu
  },
  computed: {}
};
</script>

<style scoped>
/*header*/
#logo img {
  margin: 0 20px;
  width: 60px;
}

li a {
  margin-right: 35px;
}

.dropdown-item {
  padding-left: 10px;
}
</style>
