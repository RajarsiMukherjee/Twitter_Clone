
const config = {
    apiKey: "AIzaSyBLpIe8KugbhLgpALi-8zNn2do8vWt2DRM",
    authDomain: "sample-efb24.firebaseapp.com",
    databaseURL: "https://sample-efb24-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sample-efb24",
    storageBucket: "sample-efb24.appspot.com",
    messagingSenderId: "393745501171",
    appId: "1:393745501171:web:db77896f67f92fc0e6a086",
    measurementId: "G-VV6JJ8JLFM"
  };
  
  export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return config;
    }
  }