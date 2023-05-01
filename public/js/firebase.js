// const firebase = require("firebase");
// // Required for side-effects
// // require("firebase/firestore");
// let firebaseConfig = {
 
// };

// // // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
  
// let db = firebase.firestore();




// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyB8ZV7DUY1SjyBJR8SVWJ2vnVuAWQlJZxk",
  authDomain: "blog-portal-001.firebaseapp.com",
  projectId: "blog-portal-001",
  storageBucket: "blog-portal-001.appspot.com",
  messagingSenderId: "3135626011",
  appId: "1:3135626011:web:dd9d93f0fdcf45310411be",
  measurementId: "G-84Q5WDVC5Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
let db = firebase.firestore();
let auth = firebase.auth();
// 
const logoutUser = () => {
  auth.signOut();
  location.reload();
}