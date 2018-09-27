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

<style lang="scss">
@media screen and (min-width: 767px) {
  .big {
    display: block;
  }

  .small{
    display: none;
  }

.navigation{
  width: 100%;
  padding: 0 62px;
  background: linear-gradient(to bottom, #FfFFFF, #f0f0f0);
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
        color: #555;
        li{
          font-size: 16px;
          display: inline-block;
          padding: 20px 18px;
          transition: 0.4s;
        }
      }
      .icon:hover li{
        background: linear-gradient(to bottom, #f2f2f2, #dfdfdf);
        transition: 0.4s;
      }
    }
  }
  .nav:last-of-type{
    margin-left: auto;
  }
}

}

@media screen and (max-width: 767px) {
  .big{
    display: none;
  }
  .small {
    display: block;
  }

  .navigation{
    width: 100%;
    padding: 0 5px;
    background: linear-gradient(to bottom, #FfFFFF, #f0f0f0);
    .common{
      display: block;
      max-width: 1024px;
      margin: 0 auto;
    }
    .logo{
    }
    .nav{
      ul{
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin: 0 auto;
        max-width: 320px;
        padding: 0;
        .icon{
          color: #555;
          li{
            font-size: 14px;
            display: inline-block;
            padding: 12px 10px;
            transition: 0.4s;
          }
        }
        .icon:hover li{
          background: linear-gradient(to bottom, #f2f2f2, #dfdfdf);
          transition: 0.4s;
        }
      }
    }
    .nav:last-of-type{
      margin-left: auto;
    }
  }

}
</style>


<style scoped>
/*header*/
.logo{
  text-align: center;
}
#logo img {
  width: 60px;
}

</style>
