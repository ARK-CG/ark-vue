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
                    <p class="date big">Date:{{item.date}}</p>
                    <h3>{{item.title}}</h3>
                    <p class="context">{{item.context}}</p>
                    <p class="date small">Date:{{item.date}}</p>
                  </div>
                </div>
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

<style scoped lang="scss">

/*media-query*/

@media screen and (min-width: 767px) {
  .big {
    display: block;
  }

  .small{
    display: none;
  }

  .data{
    h2{
      font-size: 28px;
      text-align: left;
      display: block;
      margin: 0;
    }
    .contents{
      margin-top: 32px;
      .row {
        margin: 0 auto;
        margin-bottom: 25px;
        background: #fff;
        padding: 15px;
        .item{
          display: flex;
          align-items: center;
          .img {
            width: 200px;
            border: solid 0.5px rgba(0, 0, 0, 0.3);
            img {
              width: 100%;
              display: block;
            }
          }
          .text{
            flex: 1;
            margin-left: 35px;
            text-align: left;
            max-width: 800px;
            h3 {
              font-size: 18px;
              font-weight: bold;
            }
            p{
              margin: 0;
              text-align: left;
              font-size: 14px;
            }
            .date{
              color: #888;
              text-align: left;
              font-size: 12px;
              margin-bottom: 14px;
            }
            .context{
              line-height: 180%;
            }
          }
        }
      }
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

  .data{
    h2{
      font-size: 28px;
      text-align: left;
      display: block;
      margin: 0 auto;
      max-width: 310px;
    }
    .contents{
      margin-top: 32px;
      .row {
        margin: 0 auto 0px;
        margin-bottom: 65px;
        background: transparent;
        padding: 0;
        .item{
          display: block;
          margin: 0 auto;
          max-width: 310px;
          .img {
            width: 100%;
            border: solid 0.5px rgba(0, 0, 0, 0.3);
            img {
              width: 100%;
              display: block;
            }
          }
          .text{
            text-align: left;
            max-width: 310px;
            margin-top: 20px;
            h3 {
              font-size: 22px;
              font-weight: bold;
            }
            p{
              margin: 0;
              text-align: left;
              font-size: 14px;
            }
            .date{
              color: #999;
              text-align: right;
              margin-top: 8px;
            }
            .context{
              line-height: 180%;
              vertical-align: top;
              font-size: 14px;
              margin: 0;
            }
          }
        }
      }
    }
  }


}
</style>
