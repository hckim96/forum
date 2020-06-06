import * as firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAiG2h8iNFTtMK-MWXzOGUE2bH7uK7_a2A",
    authDomain: "forum-48db4.firebaseapp.com",
    databaseURL: "https://forum-48db4.firebaseio.com",
    projectId: "forum-48db4",
    storageBucket: "forum-48db4.appspot.com",
    messagingSenderId: "947775514976",
    appId: "1:947775514976:web:172fde2c4f84ce0a58d605",
    measurementId: "G-RHT1GZH59V"
  };


firebase.initializeApp(firebaseConfig);


// export const fire = () => {

//     if (!firebase.apps.length) {
//         firebase.initializeApp(firebaseConfig);

//     }
    
// }


export const dataBase = firebase.database();
