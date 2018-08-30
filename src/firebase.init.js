//https://console.firebase.google.com/
import firebase from "firebase/app";
const config = {
  apiKey: "AIzaSyARbgUiJHCXzACcE3eUb8EIXYzNCdLrQ5U",
  authDomain: "ark-cg.firebaseapp.com",
  databaseURL: "https://ark-cg.firebaseio.com",
  projectId: "ark-cg",
  storageBucket: "ark-cg.appspot.com",
  messagingSenderId: "987515047211"
};
export const firebaseApp = firebase.initializeApp(config);
