<template>
    <div class="navigation">
      <div class="common">
        <div class="logo">
          <router-link  id="logo" to="/">
            <img src="../assets/arklogo01.png" alt="">
          </router-link>
        </div>

        <div class="nav">
          <ul>
            <router-link class="icon icon-layers link" to="/" id="home_link"><li>Home</li> </router-link>
            <router-link class="icon icon-layers link" to="/gallery" id="works_link"><li>Works</li> </router-link>
            <router-link class="icon icon-layers link" to="/news" id="news_link" ><li>News</li> </router-link>
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

<style>
@media screen and (min-width: 767px) {
  .big {
    display: block;
  }
  .small{
    display: none;
  }

.navigation{
  width: 100%;
  padding: 1rem;
  position: absolute;
}
  .common{
    display: flex;
    align-items: center;
    max-width: 1004px;
    margin: 0 auto;
  }

  .common .logo #logo img{
    width: 100px;
  }
  .nav {
    margin-left: auto;

  }
  .nav ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  .icon{
    color: #1f1f1f;
    font-weight: bold;
    }
    li{
      font-size: 16px;
      padding: 0.5rem;
      border-bottom: solid 2px rgba(0,0,0,0);
      transition: 0.2s;
    }

    .nav ul .link{
      margin-left: 1rem;
      text-decoration: none;
    }

    #home_link li:hover {
      border-bottom: solid 2px #1f1f1f;
      transition: 0.2s;
    }

    #works_link li:hover {
      border-bottom: solid 2px #1f1f1f;
      transition: 0.2s;
    }

    #news_link li:hover {
      border-bottom: solid 2px #1f1f1f;
      transition: 0.2s;
    }

    a:hover {
      text-decoration: none !important;
      color: #1f1f1f !important;
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
    padding: 1rem;
    position: absolute;
  }
    .common{
      display: flex;
      align-items: center;
      max-width: 1004px;
      margin: 0 auto;
    }

    .common .logo #logo img{
      width: 60px;
    }
    .nav {
      margin-left: auto;

    }
    .nav ul{
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
    }
    .icon{
      color: #1f1f1f;
      font-weight: bold;
      }
      li{
        font-size: 16px;
        margin-left: 0.5rem;
        padding: 0.5rem;
      }

}
</style>


<style scoped>
/*header*/
.logo{

}
#logo img {
  width: 60px;
}

</style>
