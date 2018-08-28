<template>
    <div class="data">
        <h2>{{ title }}</h2>
        <div class="contents fade-in" v-for="item in list" :key="item.id">
            <div class="content">
                <div class="img">
                    <img src="item.image" style="width:100%" />
                </div>
                <div class="text">
                    <h3>{{item.title}}</h3>
                    <p class="sub">{{item.date}}</p>
                    <p class="text-content">{{item.context}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Data",
  props: {
    title: String
  },
  data() {
    return {
      list: [] // 最新状態はここにコピーされる
    };
  },
  methods: {
    listen() {
      firebase
        .firestore()
        .ref("News/")
        .on("value", snapshot => {
          if (snapshot) {
            const rootList = snapshot.val();
            let list = [];
            // データオブジェクトを配列に変更する
            Object.keys(rootList).forEach((val, key) => {
              rootList[val].id = val;
              list.push(rootList[val]);
            });
            // vueのdataに突っ込む
            this.list = list;
          }
        });
    }
  }
};
</script>
