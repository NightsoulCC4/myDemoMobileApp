import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCV1b47X_8k8wBCSGLqcTUvMSLccyamot4",
  authDomain: "react-native-crud-8285a.firebaseapp.com",
  projectId: "react-native-crud-8285a",
  storageBucket: "react-native-crud-8285a.appspot.com",
  messagingSenderId: "817728174528",
  appId: "1:817728174528:web:f0d59440b4a0b91d8a3025",
  measurementId: "G-RDLJWBSQ2M",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;