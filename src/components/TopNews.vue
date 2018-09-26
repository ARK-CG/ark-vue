<template>
    <div class="data">
      <div class="intro">
        <h1 class="small"><span>N</span>ews</h1>
        <div class="img small">
          <img :src="list[0].image" />
        </div>

        <div class="title-text">
          <h1 class="big"><span>N</span>ews</h1>
          <div class="detail-text">
            <div class="texts">
              <h2>{{list[0].title}}</h2>
              <p class="context">{{list[0].context}}</p>
              <p class="date">{{list[0].date}}</p>
              </div>
          </div>
        </div>

        <div class="img big">
          <img :src="list[0].image" />
        </div>

      </div>
    </div>
</template>

<style scoped lang="scss">
/*media-query*/
@media screen and (min-width: 767px) {
  .small{
    display: none;
  }

  .big{
    display: block;
  }
.data{
  padding: 0px 0 100px;
}

.intro{
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .title-text{
    display: flex;
    align-items: flex-start;
    h1{
      font-size: 28px;
      writing-mode: vertical-rl;
      margin: 0 15px 0 0;
    }
    .detail-text{
      width: 260px;
      .texts{
        text-align: left;
        margin-right: 20px;
        h2{
          font-size: 24px;
        }
        p{
          white-space: pre-wrap;
        }
        .date{
          display: block;
          color: #999;
          text-align: right;
          margin-top: 8px;
        }
      }
    }
  }
  .img{
    margin-left: auto;
    width: 375px;
    img{
      width: 100%;
    }
  }
}
}

@media screen and (max-width: 767px) {
  .small{
    display: block;
  }

  .big{
    display: none;
  }

  .data{
    padding: 0px 0 100px;
  }

  .intro{
    max-width: 800px;
    margin: 0 auto;
    .title-text{
      width: 310px;
      margin: 20px auto 30px;
      h1{
        font-size: 28px;
        margin: 0 0 14px;
      }
      .detail-text{

        .texts{
          text-align: left;
          margin-right: 20px;
          h2{
            font-size: 24px;
          }
          p{
            white-space: pre-wrap;
          }
          .date{
            display: block;
            color: #999;
            text-align: right;
            margin-top: 8px;
          }
        }
      }
    }
    .img{
      width: 310px;
      margin: 0 auto;
      img{
        width: 100%;
      }
    }
  }
}
</style>

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
