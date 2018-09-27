<template>
  <section class="">
    <header class="">
      <!-- ログイン時にはフォームとログアウトボタンを表示 -->
      <div v-if="user.uid" key="login">
        <h1>投稿フォーム</h1>
        <div class="user">
          <p class="name">
            {{ user.displayName }}
          </p>
          <button type="button" class=" logout" @click="doLogout">
            <p>
              <i class="fas fa-sign-out-alt"></i> ログアウト
            </p>
          </button>
        </div>
      </div>
      <!-- 未ログイン時にはログインボタンを表示 -->
      <div v-else key="logout" class="login">
        <form class="" action="index.html" method="post">
          <div class="login-form">
            <div class="login-item">
              <label class="login-label" for="email">メールアドレス</label>
              <input type="" name="" value="" id="email" class="login-input">
            </div>
            <div class="login-item">
              <label class="login-label" for="password">パスワード</label>
              <input type="text" name="" value="" id="password" class="login-input">
            </div>
            <p class="attention">*当サークルメンバーのみが<br />利用できるようになっております</p>
            <div class="button">
              <p>ログインする</p>
            </div>
          </div>
        </form>

        <div class="deco">
          <p>googleでログイン</p>
        </div>

        <button type="button" class="google-button" @click="doGoogle">
          <span class="google-button__icon">
            <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg"><path d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z" id="Shape" fill="#EA4335"/><path d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z" id="Shape" fill="#FBBC05"/><path d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z" id="Shape" fill="#4285F4"/><path d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z" fill="#34A853"/></svg>
          </span>
          <span class="google-button__text">Sign in with INIAD Google</span>
        </button>
      </div>
    </header>
    <!-- 投稿フォーム -->
    <form v-if="user.uid" @submit.prevent="saveContact" autocomplete="off">
      <!-- ラジオボタン -->
      <div class="item">
        <div class="item-title">
          <label for="example-url-input" class="">カテゴリー</label>
          <p>必須</p>
        </div>
        <div class="radio-item">
          <input type="radio" id="customRadioInline1" name="customRadioInline" class="radio" v-model="picked" value="works" required>
          <label class="reradio" for="customRadioInline1">Gallery</label>
        </div>
        <div class="radio-item">
          <input type="radio" id="customRadioInline2" name="customRadioInline" class="radio" v-model="picked" value="news" required>
          <label class="reradio" for="customRadioInline2">News</label>
        </div>
      </div>

      <div class="item">
        <div class="item-title">
          <label for="example-text-input" class="" >タイトル</label>
          <p>必須</p>
        </div>
        <div class="form-item">
          <input type="textarea" value="Artisanal kale" id="example-text-input" v-model="title" class="text-form" required>
        </div>
      </div>
      <div class="item">
        <div class="item-title pic-form">
          <label for="example-text-input" >説明</label>
          <p>必須</p>
        </div>
        <div class="form-item">
          <textarea name="name" rows="8" cols="80" id="example-text-input" v-model="context" class="text-form" required value="Artisanal kale"></textarea>
        </div>
      </div>

      <div class="item">
        <div class="item-title pic-form">
          <label for="example-url-input" class="">写真</label>
          <p>必須</p>
        </div>
        <div class="form-item">
          <input class="" type="url" placeholder="画像だけが表示されるURLを貼ってください" id="example-url-input" v-model="image" class="text-form" required>
          <!--<input type="file" class="" id="exampleInputFile" aria-describedby="fileHelp" disabled="disabled">-->
          <div class="sub-text">
            <p class="sub">Twitterなどの画像URL</p>
            <p class="sub">ex) https://pbs.twimg.com/media/??????????.jpg</p>
          </div>
          <!--<a target="_blank" href="https://qiita.com/arribux/items/0394968fa318d9309d33">Google Driveから追加する</a>-->
        </div>
      </div>
      <div class="item">
        <div class="item-title">
          <label class="">作成日</label>
          <p>必須</p>
        </div>
        <div class="">
          <div class="form-item">
            <input class="" type="date" value="2011-08-19" id="example-date-input" class="text-form" v-model="date" required>
          </div>
        </div>
      </div>
      <div class="">
        <div class="submit-btn">
          <button type="submit" class="submit">投稿する</button>
        </div>
      </div>
    </form>
  </section>
</template>
<script>
//https://console.firebase.google.com/
import { firebaseApp } from "../firebase.init";
import firebase from "firebase";
import "firebase/firestore";
var db = firebaseApp.firestore();
db.settings({
  timestampsInSnapshots: true
});
export default {
  name: "new-contact",
  data() {
    return {
      title: null,
      context: null,
      image: null,
      date: null,
      time: null,
      picked: null,
      user: {} // ユーザー情報
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user ? user : {};
      if (!user.email.match(/^[A-Za-z0-9]+[\w-]+@iniad.org$/)) {
        firebase.auth().signOut();
        alert("INIADアカウントでログインしてください");
        user
          .delete()
          .then(function() {
            console.log("User deleted.");
          })
          .catch(function(error) {
            // An error happened.
          });
      }
    });
  },
  methods: {
    doGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    // ログアウト処理
    doLogout() {
      firebase.auth().signOut();
    },
    saveContact() {
      var date = {
        seconds: moment(this.date).unix(),
        nanoseconds: 0 //moment(this.time)
      };
      db
        .collection(this.picked)
        .add({
          title: this.title,
          context: this.context,
          image: this.image,
          date: date,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          post_by: this.user.uid
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          location.href = "/";
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    }
  }
};
</script>

<style scoped>
/*未ログイン状態*/
@media screen and (min-width: 767px) {
  .big {
    display: block;
  }

  .small{
    display: none;
  }
.attention{
  max-width: 1024px;
  margin: 0 auto;
  text-align: left;
  color: red;
  font-size: 10px;
  margin: 0 auto 5px;
}
.login-form{
  display: inline-block;
  margin: 0px auto;
  background: #fff;
  padding: 15px 22px;
  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  white-space: nowrap;
}
.login-item{
  text-align: left;
  margin-bottom: 15px;
}

.login-form .button{
  border: solid 1.5px #1F4575;
  border-radius: 5px;
  padding: 2px 8px;
  background: transparent;
  transition: 0.4s;
  width: 100%;
  cursor: pointer;
  color: #1F4575;
  font-weight: bold;
  margin-top: 10px;
}

.login-form .button:hover{
  background:#1F4575;
  transition: 0.4s;
  color: #fff;
  transition: 0.4s;
}

.login-label{
  font-size: 14px;
  display: block;
  margin-bottom: 4px;
}

.login-input{
  border: solid 0.8px #ccc;
  border-radius: 5px;
  height: 28px;
  padding: 0 8px;
  font-size: 14px;
}

.deco p{
  margin: 0;
  color: #ccc;
  font-size: 12px;
  text-align: center;
  margin: 20px 0;
  position: relative;
  display: inline-block;
}

.deco p::before{
  content: "";
  border: solid #ccc 0.5px;
  position: absolute;
  width: 60px;
  left: -70px;
  top: 9px;
}

.deco p::after{
  content: "";
  border: solid #ccc 0.5px;
  position: absolute;
  width: 60px;
  right: -70px;
  top: 9px;
}

h1{
  font-size: 28px;
  display: inline-block;
  text-align: left;
  font-weight: bold;
}

.user{
  text-align: right;
}
.user p{
  display: inline-block;
  font-weight: bold;
}

.user .name{
  font-size: 14px;

  margin: 0 24px;
}

.user .logout{
  border: solid 1.5px #1F4575;
  border-radius: 5px;
  padding: 5px 8px;
  background: transparent;
  transition: 0.4s;
}

.user .logout:hover{
  background:#1F4575;
  transition: 0.4s;
}

.user .logout p{
  color: #1F4575;
  transition: 0.4s;
  font-size: 14px;
}

.user .logout:hover p{
  color: #fff;
  transition: 0.4s;
}

.header {
  margin-bottom: 2em;
  padding: 0.4em 0.8em;
}

.header btn-logout {
  color: white;
  background-color: #5c5c5c;
}

.item{
    display: flex;
    margin: 25px 0;
}

.item-title{
  width: 180px;
  margin-right: 20px;
  text-align: left;
  align-items: center;
  display: flex;
  font-weight: bold;
}

.item-title label{
}

.item-title p{
  background: #E5000B;
  color: #fff;
  font-size: 8px;
  border-radius: 4px;
  padding: 5px 8px;
  margin-left: 15px;
}

.item .pic-form{
  display: flex;
  align-items: flex-start;
}

.form-item{
  flex: 1;
  text-align: left;
}

.text-form{
  width: 100%;
  border: solid 0.8px #ccc;
  border-radius: 5px;
  height: 32px;
  padding: 3px 8px;
  font-size: 14px;
}

.form-item textarea{
  width: 100%;
  border: solid 0.8px #ccc;
  border-radius: 5px;
  height: 95px;
  padding: 3px 8px;
  font-size: 14px;
  line-height: 160%;
}

/*ラジオボタン*/
.radio{
  display: none;
}

.radio + .reradio{
  padding-left: 25px;
  position:relative;
  margin-right: 20px;
  cursor: pointer;
}

.radio + .reradio::before{
  content: "";
  display: block;
  position: absolute;
  top: 2px;
  left: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 50%;
}

.radio:checked + .reradio::after{
  content: "";
  display: block;
  position: absolute;
  top: 5.5px;
  left: 3.55px;
  width: 11px;
  height: 11px;
  background: #1F4575;
  border-radius: 50%;
}

.sub-text{
  margin-top: 4px;
}

.sub{
  font-size: 14px;
  color: #aaa;
  margin: 0;
}

.submit-btn{
  width: 100%;
  margin-top: 50px;
}

.submit{
  border: solid 1.5px #1F4575;
  border-radius: 5px;
  padding:8px;
  background: transparent;
  transition: 0.4s;
  width: 100%;
  cursor: pointer;
  color: #1F4575;
  font-weight: bold;
}

.submit:hover{
  background:#1F4575;
  transition: 0.4s;
  color: #fff;
  transition: 0.4s;
}

label{
  margin: 0;
}

p{
  margin: 0;
}

/*googleボタン*/
.login{
  text-align: center;
  margin: 20px auto;
  border-radius: 8px;
}

.login h1{
  text-align: center;
  font-size: 28px;
}

.google-button {
  height: 40px;
  border-width: 0;
  background: white;
  color: #737373;
  white-space: nowrap;
  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);
  transition-property: background-color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
  padding: 0;
  border-radius: 5px;
}

.google-button:focus,
.google-button:hover {
  box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);
}

.google-button:active {
  background-color: #e5e5e5;
  box-shadow: none;
  transition-duration: 10ms;
}

.google-button__icon {
  display: inline-block;
  vertical-align: middle;
  margin: 8px 0 8px 8px;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
}

.google-button__icon--plus {
  width: 27px;
}
.google-button__text {
  display: inline-block;
  vertical-align: middle;
  padding: 0 24px;
  font-size: 14px;
  font-weight: bold;
  font-family: "Roboto", arial, sans-serif;
}

}

@media screen and (max-width: 767px) {
  .big{
    display: none;
  }
  .small {
    display: block;
  }

.attention{
  max-width: 1024px;
  margin: 0 auto;
  text-align: left;
  color: red;
  font-size: 10px;
  margin: 0 auto 5px;
}
.login-form{
  display: inline-block;
  margin: 0px auto;
  background: #fff;
  padding: 15px 22px;
  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  white-space: nowrap;
}
.login-item{
  text-align: left;
  margin-bottom: 15px;
}

.login-form .button{
  border: solid 1.5px #1F4575;
  border-radius: 5px;
  padding: 2px 8px;
  background: transparent;
  transition: 0.4s;
  width: 100%;
  cursor: pointer;
  color: #1F4575;
  font-weight: bold;
  margin-top: 10px;
}

.login-form .button:hover{
  background:#1F4575;
  transition: 0.4s;
  color: #fff;
  transition: 0.4s;
}

.login-label{
  font-size: 14px;
  display: block;
  margin-bottom: 4px;
}

.login-input{
  border: solid 0.8px #ccc;
  border-radius: 5px;
  height: 28px;
  padding: 0 8px;
  font-size: 14px;
}

.deco p{
  margin: 0;
  color: #ccc;
  font-size: 12px;
  text-align: center;
  margin: 20px 0;
  position: relative;
  display: inline-block;
}

.deco p::before{
  content: "";
  border: solid #ccc 0.5px;
  position: absolute;
  width: 60px;
  left: -70px;
  top: 9px;
}

.deco p::after{
  content: "";
  border: solid #ccc 0.5px;
  position: absolute;
  width: 60px;
  right: -70px;
  top: 9px;
}

h1{
  font-size: 28px;
  display: inline-block;
  text-align: left;
  font-weight: bold;
}

.user{
  text-align: right;
}
.user p{
  display: block;
  font-weight: bold;
}

.user .name{
  font-size: 14px;
  margin-bottom: 5px;
}

.user .logout{
  border: solid 1.5px #1F4575;
  border-radius: 5px;
  padding: 5px 8px;
  background: transparent;
  transition: 0.4s;
}

.user .logout:hover{
  background:#1F4575;
  transition: 0.4s;
}

.user .logout p{
  color: #1F4575;
  transition: 0.4s;
  font-size: 14px;
}

.user .logout:hover p{
  color: #fff;
  transition: 0.4s;
}

.header {
  margin-bottom: 2em;
  padding: 0.4em 0.8em;
}

.header btn-logout {
  color: white;
  background-color: #5c5c5c;
}

.item{
    display: block;
    margin: 25px 0;
}

.item-title{
  width: 180px;
  margin-right: 20px;
  margin-bottom: 18px;
  text-align: left;
  align-items: center;
  display: flex;
  font-weight: bold;
}

.item-title label{
}

.item-title p{
  background: #E5000B;
  color: #fff;
  font-size: 8px;
  border-radius: 4px;
  padding: 5px 8px;
  margin-left: 15px;
}

.item .pic-form{
  display: flex;
  align-items: flex-start;
}

.form-item{
  flex: 1;
  text-align: left;
}

.text-form{
  width: 100%;
  border: solid 0.8px #ccc;
  border-radius: 5px;
  height: 32px;
  padding: 3px 8px;
  font-size: 14px;
}

.form-item textarea{
  width: 100%;
  border: solid 0.8px #ccc;
  border-radius: 5px;
  height: 95px;
  padding: 3px 8px;
  font-size: 14px;
  line-height: 160%;
}

/*ラジオボタン*/
.radio{
  display: none;
}

.radio-item{
  margin: 8px 0;
}

.radio + .reradio{
  padding-left: 25px;
  position:relative;
  margin-right: 20px;
  cursor: pointer;
}

.radio + .reradio::before{
  content: "";
  display: block;
  position: absolute;
  top: 2px;
  left: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 50%;
}

.radio:checked + .reradio::after{
  content: "";
  display: block;
  position: absolute;
  top: 5.5px;
  left: 3.55px;
  width: 11px;
  height: 11px;
  background: #1F4575;
  border-radius: 50%;
}

.sub-text{
  margin-top: 4px;
}

.sub{
  font-size: 14px;
  color: #aaa;
  margin: 0;
}

.submit-btn{
  width: 100%;
  margin-top: 50px;
}

.submit{
  border: solid 1.5px #1F4575;
  border-radius: 5px;
  padding: 5px 8px;
  background: transparent;
  transition: 0.4s;
  width: 100%;
  cursor: pointer;
  color: #1F4575;
  font-weight: bold;
}

.submit:hover{
  background:#1F4575;
  transition: 0.4s;
  color: #fff;
  transition: 0.4s;
}

label{
  margin: 0;
}

p{
  margin: 0;
}

/*googleボタン*/
.login{
  text-align: center;
  margin: 20px auto;
  border-radius: 8px;
}

.login h1{
  text-align: center;
  font-size: 28px;
}

.google-button {
  height: 40px;
  border-width: 0;
  background: white;
  color: #737373;
  white-space: nowrap;
  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);
  transition-property: background-color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
  padding: 0;
  border-radius: 5px;
}

.google-button:focus,
.google-button:hover {
  box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);
}

.google-button:active {
  background-color: #e5e5e5;
  box-shadow: none;
  transition-duration: 10ms;
}

.google-button__icon {
  display: inline-block;
  vertical-align: middle;
  margin: 8px 0 8px 8px;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
}

.google-button__icon--plus {
  width: 27px;
}
.google-button__text {
  display: inline-block;
  vertical-align: middle;
  padding: 0 24px;
  font-size: 14px;
  font-weight: bold;
  font-family: "Roboto", arial, sans-serif;
}

}
</style>
