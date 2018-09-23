<template>
    <div class="data">
      <h2>News</h2>
        <div class="contents fade-in">
            <div class="content">
              <div class="row" v-for="item in list" :key="item.id">
                <div class="item">
                  <div class="img">
                    <img :src="item.image" />
                  </div>
                  <div class="text">
                    <p class="date">Date:{{item.date}}</p>
                    <h3>{{item.title}}</h3>
                    <p class="context">{{item.context}}</p>
                  </div>
                </div>
              </div>
                <!--
                <div class="text">
                    <h3>{{item.title}}</h3>
                    <p class="sub">{{item.date}}</p>
                    <p class="text-content">{{item.context}}</p>
                    <p class="text-edit">Edit:{{item.timestamp}}</p>
                    <p class="text-content">{{ item.id }}</p>
                </div>
              -->
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
        var day = new Date(temp.date.seconds * 1000).toString();
        temp.date = moment(day).format("YYYY-MM-DD");
        temp.timestamp = new Date(temp.timestamp.seconds * 1000).toString();
        temp.id = doc.id;
        data.push(temp);
      });
    });
    return {
      list: data, // 最新状態はここにコピーされる
      step: 3,
      i: 0
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

  .data h2{
    font-size: 28px;
    text-align: left;
    display: block;
    margin: 0;
  }

  .contents{
    margin-top: 32px;
  }

  .row {
    margin: 0 auto;
    margin-bottom: 25px;
    background: #fff;
    padding: 15px;
  }

  .item{
    display: flex;
    align-items: center;
  }

  .img {
    width: 200px;
    border: solid 0.5px rgba(0, 0, 0, 0.3);
  }

  .img img {
    width: 100%;
    display: block;
  }

  .text{
    flex: 1;
    margin-left: 35px;
    text-align: left;
    max-width: 800px;
  }

  .text h3 {
    font-size: 18px;
    font-weight: bold;
  }

  .text p{
    margin: 0;
    text-align: left;
    font-size: 14px;
  }

  .text .date{
    color: #888;
    display: block;
    text-align: left;
    font-size: 12px;
    margin-bottom: 14px;
  }

  .text .context{
    line-height: 180%;
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
    font-size: 15px;
  }

  .text-content {
    margin-top: 10px;
    font-size: 14px;
  }

  .text-edit {
    font-size: 10px;
  }

  .date {
    display: inline-block;
    font-size: 10px;
    color: #808080;
    margin: 0 0 0 20px;
  }
}
</style>
