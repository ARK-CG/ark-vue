<template>
  <div class="news">
  <Data title="News" />
    <button type="button" class="btn btn-default" @click="pushData">
    送信
    </button>
</div>
</template>

<script>
import Data from "@/components/Data.vue";

export default {
  name: "News",
  components: {
    Data
  },
  methods: {
    pushData() {
      firebase
        .firestore()
        .ref("news/")
        .push({
          title: "test",
          context: "asd",
          date: Date.now(),
          image:
            "https://firebasestorage.googleapis.com/v0/b/ark-cg.appspot.com/o/works%2Fimage.png?alt=media&token=82abb0b4-2ba4-402e-9435-2b0172a97c74"
        });
    }
  }
};
</script>

<style scoped>
/*News*/
.news {
  background: #ecf0f1;
  width: 100%;
  padding-bottom: 100px;
}

/*media-query*/

@media screen and (min-width: 767px) {
  .big {
    display: none;
  }

  .img {
    text-align: right;
    display: inline-block;
    width: 180px;
    border: solid 0.5px rgba(0, 0, 0, 0.3);
  }

  .content .text {
    display: inline-block;
    vertical-align: middle;
    max-width: 65%;
    margin-top: 30px;
    margin-left: 30px;
  }

  .content {
    width: 95%;
    margin: 10px auto 0px;
    padding: 20px 0;
    overflow: hidden;
  }

  .news h2 {
    width: 90%;
    margin: 0px auto 30px;
    padding-top: 50px;
    font-weight: lighter;
  }

  .contents {
    background: #fff;
    width: 90%;
    margin: 0 auto 30px;
  }

  .text h3 {
    display: inline-block;
    font-size: 18px;
  }

  .text-content {
    margin-top: 10px;
    font-size: 14px;
  }

  .sub {
    display: inline-block;
    font-size: 14px;
    color: #808080;
    margin: 0 0 0 20px;
  }
}

@media screen and (max-width: 767px) {
  .first {
    margin-top: 20px;
  }

  .small {
    display: none;
  }

  .news h2 {
    width: 90%;
    margin: 0px auto 30px;
    padding-top: 50px;
    font-weight: lighter;
    text-align: center;
    font-size: 24px;
  }

  .contents {
    background: #fff;
    width: 80%;
    margin: 0 auto 30px;
  }

  .content {
    width: 100%;
    margin: 0px auto 0px;
    overflow: hidden;
  }

  .content .text {
    margin: 30px auto;
    width: 90%;
  }

  .img {
    width: 100%;
  }

  .text h3 {
    display: inline-block;
    font-size: 14px;
  }

  .text-content {
    margin-top: 10px;
    font-size: 12px;
  }

  .date {
    display: inline-block;
    font-size: 10px;
    color: #808080;
    margin: 0 0 0 20px;
  }
}
</style>
