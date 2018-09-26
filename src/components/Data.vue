<template>
    <div class="data">
      <h1>Gallrey</h1>
        <div class="contents fade-in big">
          <div class="collum first">
            <table>
              <tr v-for="item in list.length" :key="item.id">
                <div v-if="list[item]">
                  <div class="img">
                    <td><img :src="list[item].image" /></td>
                  </div>
                </div>
              </tr>
            </table>
          </div>

          <div class="collum second">
            <table>
              <tr v-for="(item) in list.length" :key="item.id">
                <div v-if="list[item]">
                  <div class="img">
                    <td><img :src="list[item].image" /></td>
                  </div>
                </div>

              </tr>
            </table>
          </div>

          <div class="collum third">
            <table>
              <tr v-for="(item) in list.length" :key="item.id">
                <div v-if="list[item + 1]">
                  <div class="img">
                    <td><img :src="list[item + 1].image" /></td>
                  </div>
                </div>
              </tr>
            </table>
          </div>

          <div class="collum forth">
            <table>
              <tr v-for="(item) in list.length" :key="item.id">
                <div v-if="list[item + 2]">
                  <div class="img">
                    <td><img :src="list[item + 2].image" /></td>
                  </div>
                </div>
              </tr>
            </table>
          </div>
        </div>

        <div class="contents fade-in md">
          <div class="collum first">
            <table>
              <tr v-for="item in list.length" :key="item.id">
                <div v-if="list[item]">
                  <div class="img">
                    <td><img :src="list[item].image" /></td>
                  </div>
                </div>
              </tr>
            </table>
          </div>

          <div class="collum second">
            <table>
              <tr v-for="(item) in list.length" :key="item.id">
                <div v-if="list[item]">
                  <div class="img">
                    <td><img :src="list[item].image" /></td>
                  </div>
                </div>

              </tr>
            </table>
          </div>

          <div class="collum third">
            <table>
              <tr v-for="(item) in list.length" :key="item.id">
                <div v-if="list[item + 1]">
                  <div class="img">
                    <td><img :src="list[item + 1].image" /></td>
                  </div>
                </div>
              </tr>
            </table>
          </div>
        </div>

        <div class="contents fade-in small">
          <div class="collum first">
            <table>
              <tr v-for="item in list.length" :key="item.id">
                <div v-if="list[item]">
                  <div class="img">
                    <td><img :src="list[item].image" /></td>
                  </div>
                </div>
              </tr>
            </table>
          </div>

          <div class="collum second">
            <table>
              <tr v-for="(item) in list.length" :key="item.id">
                <div v-if="list[item]">
                  <div class="img">
                    <td><img :src="list[item].image" /></td>
                  </div>
                </div>

              </tr>
            </table>
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
      i: 0
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
  .big{
    display: flex;
  }

  .md{
    display: none;
  }

  .small{
    display: none;
  }

h1{
  text-align: left;
  font-size: 28px;
}
.contents{
  justify-content: space-between;
  .collum{
    table{
      max-width: 220px;
      .img{
        margin: 15px 8px;
      }
      td{
        padding: 8px;
        border: solid 0.8px #ccc;
        img{
          width: 100%;
        }
      }
    }
  }
}


@media screen and (max-width: 920px){
    .big{
      display: none;
    }
    .small {
      display: none;
    }
    .md{
      display: flex;
    }

    .contents{
      max-width: 700px;
      margin: 0 auto;
      justify-content: space-between;
      .collum{
        table{
          max-width: 220px;
          .img{
            margin: 15px 8px;
          }
          td{
            padding: 8px;
            border: solid 0.8px #ccc;
            img{
              width: 100%;
            }
          }
        }
      }
    }


}
/*media-query*/
@media screen and (max-width: 697px) {
  .big{
    display: none;
  }
  .small {
    display: flex;
  }

  .md{
    display: none;
  }

  .contents{
    max-width: 450px;
    margin: 0 auto;
    justify-content: space-between;
    .collum{
      table{
        max-width: 220px;
        .img{
          margin: 10px 8px;
        }
        td{
          padding: 8px;
          border: solid 0.8px #ccc;
          img{
            width: 100%;
          }
        }
      }
    }
  }
}

</style>
