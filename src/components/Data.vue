<template>
    <div class="data">
        <h2>{{ title }}</h2>
        <div class="contents fade-in" v-for="item in list" :key="item.id">
            <div class="content">
                <div class="img">
                    <img :src="item.image" style="width:100%" />
                </div>
                <div class="text">
                    <h3>{{item.title}}</h3>
                    <p class="sub">{{item.date}}</p>
                    <p class="text-content">{{item.context}}</p>
                    <p>{{ item.id }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//https://console.firebase.google.com/
import { firebaseApp } from "../firebase.init";
import "firebase/firestore";
var db = firebaseApp.firestore();
db.settings({
  timestampsInSnapshots: true
});
export default {
  name: "Data",
  props: {
    title: String,
    path: String,
    limitNum: {
      type: Number,
      default: 0
    }
  },
  data() {
    var data = [];
    var ids = [];
    var ref = db.collection(this.path).orderBy("date", "desc");
    if (this.limitNum > 0) {
      ref = ref.limit(this.limitNum);
    }
    ref.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        ids.push(doc.id);
        var temp = doc.data();
        temp.id = doc.id;
        data.push(temp);
      });
    });
    return {
      list: data // 最新状態はここにコピーされる
    };
  },
  methods: {}
};
</script>

<style scoped>
.fade-in {
  transition: opacity 0.4s;
  -moz-transition: opacity 0.4s;
  -webkit-transition: opacity 0.4s;
  -o-transition: opacity 0.4s;
}

#content {
  margin-bottom: 80px;
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
