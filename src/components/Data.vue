<template>
    <div class="data">
      <h1>Gallrey</h1>
      <div v-masonry transition-duration="0.6s" fit-width="True"
      class="masonry-container big" column-width="245" item-selector=".item">
      <div v-masonry-tile class="item" v-for="item in list">
        <div class="masonry-img">
          <img :src="item.image" />
        </div>
        
      </div>
    </div>

    <div v-masonry transition-duration="0.6s" fit-width="True"
    class="masonry-container small" column-width="172" item-selector=".item">
    <div v-masonry-tile class="item" v-for="item in list">
      <div class="masonry-img">
        <img :src="item.image" />
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

<style scoped lang="scss">
.masonry-container{
  max-width: 1024px;
  margin: 30px auto;
  .item{
    margin: 0 8px;
    margin-bottom: 20px;
  }
}

.masonry-img{
  width: 220px;
  img{
    width: 100%;
  }
}
  .big{
    display: block;
  }

  .small{
    display: none;
  }

h1{
  text-align: left;
  font-size: 28px;
  padding: 0 8px;
}


/*media-query*/
@media screen and (max-width: 767px) {
  .big{
    display: none;
  }
  .small {
    display: block;
  }

  .masonry-container{
    width: 800px;
    margin: 30px auto;
    width: auto;
    .item{
      margin-bottom: 20px;
    }
  }

  .masonry-img{
    width: 156px;
    margin: 0 auto;
    img{
      width: 100%;
    }
  }
}

</style>
