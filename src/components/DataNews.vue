<template>
    <div class="data">
      <h1>News</h1>
      <p class="border_deco"></p>
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

<style>

/*media-query*/

@media screen and (min-width: 767px) {
  .data {
    min-height: 110vh;
  }
  .big {
    display: block;
  }

  .small{
    display: none;
  }

  .data h1 {
    font-weight: bold;
    color: #1f1f1f;
    margin-bottom: 3rem;
    text-align: center;
    max-width: 1004px;
    margin: 5rem auto 1rem;
  }
  .data .border_deco {
    width: 60px;
    border-bottom: solid 5px #c30d23;
    margin: 0 auto;
    margin-bottom: 5rem;
  }

.data .row {
  margin: 0 auto;
  margin-bottom: 8rem;
  padding: 2rem;
  border-bottom: solid 2px #1f1f1f;
  border-left: solid 2px #1f1f1f;
}
.data .row .item{
  display: flex;
  align-items: center;
}
.data .row .item .img {
  width: 200px;
  border: solid 0.5px rgba(0, 0, 0, 0.3);
}
.data .row .item .img img {
  width: 100%;
  display: block;
}
.data .row .item .text {
  flex: 1;
  margin-left: 35px;
  text-align: left;
  max-width: 800px;
}
.data .row .item .text h3 {
  font-size: 16px;
  font-weight: bold;
}
.data .row .item .text p{
  margin: 0;
  text-align: left;
  font-size: 14px;
}
.data .row .item .text .date{
  color: #888;
  text-align: left;
  font-size: 12px;
  margin-bottom: 14px;
}
.data .row .item .text .context{
  line-height: 180%;
  white-space: pre-wrap;
}

}
@media screen and (max-width: 767px) {
  .data {
    min-height: 110vh;
  }
  .big {
    display: block;
  }

  .small{
    display: none;
  }

  .data h1 {
    font-weight: bold;
    color: #1f1f1f;
    margin-bottom: 3rem;
    text-align: center;
    max-width: 1004px;
    margin: 5rem auto 1rem;
  }
  .data .border_deco {
    width: 60px;
    border-bottom: solid 5px #c30d23;
    margin: 0 auto;
    margin-bottom: 5rem;
  }

.data .row {
  margin: 0 auto;
  margin-bottom: 4rem;
  padding: 2rem;
  border-bottom: solid 2px #1f1f1f;
  border-left: solid 2px #1f1f1f;
  max-width: 600px;
}
.data .row .item{
  display: block;
  align-items: center;
}
.data .row .item .img {
  width: 100%;
  margin: 0 auto;
  border: solid 0.5px rgba(0, 0, 0, 0.3);
}
.data .row .item .img img {
  width: 100%;
  display: block;
}
.data .row .item .text {
  text-align: left;
  max-width: 800px;
  margin: 0.5rem
}
.data .row .item .text h3 {
  font-size: 14px;
  font-weight: bold;
}
.data .row .item .text p{
  margin: 0;
  text-align: left;
  font-size: 13px;
}
.data .row .item .text .date{
  color: #888;
  text-align: left;
  font-size: 12px;
  margin-bottom: 14px;
}
.data .row .item .text .context{
  line-height: 180%;
  white-space: pre-wrap;
}


}
</style>
