<template>
    <div class="navigation">
        <div v-responsive.sm.md.lg.xl >
            <!-- https://at-ui.github.io/at-ui/#/en/docs/menu -->
            <at-menu mode="horizontal" active-name="1">
                <at-menu-item name="1"><router-link class="icon icon-home" to="/">Home</router-link></at-menu-item>
                <at-menu-item name="2"><router-link class="icon icon-layers" to="/about">About</router-link></at-menu-item>
                <at-menu-item name="3"><router-link to="/news">News</router-link></at-menu-item>
                <at-menu-item name="4"><router-link to="/gallery">Gallery</router-link></at-menu-item>
                <at-menu-item name="5"><router-link to="/project">Project</router-link></at-menu-item>
                <at-menu-item name="6"><i class="icon icon-settings"></i>For member</at-menu-item>
            </at-menu>
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
