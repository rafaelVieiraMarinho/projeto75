import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD8BcudkUOxSO11_-MS3mUMxW6Ijsi7jdc",
  authDomain: "projeto-71-4c2e6.firebaseapp.com",
  databaseURL: "https://projeto-71-4c2e6-default-rtdb.firebaseio.com",
  projectId: "projeto-71-4c2e6",
  storageBucket: "projeto-71-4c2e6.appspot.com",
  messagingSenderId: "960296936086",
  appId: "1:960296936086:web:ff6b6764918c423b1d98b7"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
