import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBvKuw3TWOqRcm9e1cCfAYOaEHPSCclGTU",
  authDomain: "chatbytedemo.firebaseapp.com",
  databaseURL: "https://chatbytedemo.firebaseio.com",
  projectId: "chatbytedemo",
  storageBucket: "chatbytedemo.appspot.com",
  messagingSenderId: "342972550212"
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };
