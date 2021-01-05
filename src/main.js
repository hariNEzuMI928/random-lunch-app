import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';

createApp(App).use(router).mount('#app');

const firebaseConfig = {
  apiKey: 'AIzaSyCwbzwxmHKpOntyNFabrTXTch53lOHa5tM',
  authDomain: 'random-lunch-app.firebaseapp.com',
  projectId: 'random-lunch-app',
  storageBucket: 'random-lunch-app.appspot.com',
  messagingSenderId: '852598060019',
  appId: '1:852598060019:web:e82b4998f05884b6539886',
  measurementId: 'G-JE6SHRCBGR',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
