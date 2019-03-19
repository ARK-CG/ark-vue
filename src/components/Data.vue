<template>
    <div class="data">
      <h1>Works</h1>
      <p class="border_deco"></p>
      <div v-masonry transition-duration="0.6s" fit-width="True"
      class="masonry-container big" column-width="245" item-selector=".item">
      <div v-masonry-tile class="item" v-for="item in list" id="demo">
        <div>
          <div class="masonry-img">
            <img :src="item.image" />
          </div>
          <div class="text">
            <h2>{{item.title}}</h2>
            <!-- <p class="context">{{item.context}}</p>
            <p class="date">{{item.date}}</p> -->
          </div>
        </div>
      </div>
    </div>

    <div v-masonry transition-duration="0.6s" fit-width="True"
    class="masonry-container small" column-width="172" item-selector=".item">
    <div v-masonry-tile class="item" v-for="item in list">
      <div class="masonry-img">
        <img :src="item.image" />
      </div>
      <div class="text">
        <h2>{{item.title}}</h2>
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
      list: data ,// 最新状態はここにコピーされる
    };
  },
  methods: {}
};

</script>

<style>
.data {
  min-height: 110vh;
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
.masonry-container{
  max-width: 1004px;
  margin: 30px auto;
}
.masonry-container .item{
  margin: 0 8px;
  margin-bottom: 2rem;
  width: 220px;
}
.masonry-container .item .masonry-img{
  width: 220px;
}
.masonry-container .item .masonry-img img{
  width: 100%;
}
.masonry-container .item .text{
}
.masonry-container .item .text h2{
  font-size: 14px;
  color: #1f1f1f;
  margin: 0.5rem 0;
  font-weight: bold;
}
.masonry-container .item .text p{
  font-size: 12px;
  margin: 0;
  color: #555;
}
.masonry-container .item .text .explain{
  margin: 4px 0 0;
}
.masonry-container .item .text .date{
  float: right;
  font-size: 10px;
}
.masonry-container .item .text .context{
  font-size: 13px;
  white-space: pre-wrap;
  word-break: break-word;
}
  .big{
    display: block;
  }

  .small{
    display: none;
  }


/*media-query*/
@media screen and (max-width: 767px) {
  .data h1 {
    font-weight: bold;
    color: #1f1f1f;
    margin-bottom: 3rem;
    text-align: center;
    max-width: 1004px;
    margin: 5rem auto 1rem;
    font-size: 1.5rem;
  }
  .data .border_deco {
    width: 60px;
    border-bottom: solid 5px #c30d23;
    margin: 0 auto;
    margin-bottom: 5rem;
  }
  .masonry-container{
    max-width: 1004px;
    margin: 30px auto;
  }
  .masonry-container .item{
    width: 156px;
    margin: 0 8px;
    margin-bottom: 2rem;
  }
  .masonry-container .item .masonry-img{
    width: 156px;
  }
  .masonry-container .item .masonry-img img{
    width: 100%;
  }
  .masonry-container .item .text{
  }
  .masonry-container .item .text h2{
    font-size: 14px;
    color: #1f1f1f;
    margin: 0.5rem 0;
    font-weight: bold;
  }
  .masonry-container .item .text p{
    font-size: 12px;
    margin: 0;
    color: #555;
  }
  .masonry-container .item .text .explain{
    margin: 4px 0 0;
  }
  .masonry-container .item .text .date{
    float: right;
    font-size: 10px;
  }
  .masonry-container .item .text .context{
    font-size: 13px;
    white-space: pre-wrap;
    word-break: break-word;
  }


  .big{
    display: none;
  }
  .small {
    display: block;
  }
}

</style>
