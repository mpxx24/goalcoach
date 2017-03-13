import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCVULbaytiEb1XWWYqmppklVYxIu2PUkK8",
    authDomain: "goalcoach-30b86.firebaseapp.com",
    databaseURL: "https://goalcoach-30b86.firebaseio.com",
    storageBucket: "goalcoach-30b86.appspot.com",
    messagingSenderId: "690168149746"
  };

export const firebaseApp = firebase.initializeApp(config);

