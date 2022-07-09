import firebase from "firebase";
import "firebase/firestore";

var config = {
    apiKey: "AIzaSyAPBXECe0BFTdD_KmlMxe9ZhuLYY9rUHu4",
    authDomain: "vuejsappchat.firebaseapp.com",
    databaseURL: "https://vuejsappchat-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vuejsappchat",
    storageBucket: "vuejsappchat.appspot.com",
    messagingSenderId: "844571085394",
    appId: "1:844571085394:web:c54e3ad4391ba43e8bed8b"
};

var fire = firebase.initializeApp(config);
export default fire;