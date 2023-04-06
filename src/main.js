
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LottieVuePlayer from '@lottiefiles/vue-lottie-player'
//firebase specific imports
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


Vue.use(LottieVuePlayer)
Vue.config.productionTip = false


// The web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAxYk2h3QLpGDZwYEC73KaQjXPHXDB0UY",
  authDomain: "csi-3370-website.firebaseapp.com",
  projectId: "csi-3370-website",
  storageBucket: "csi-3370-website.appspot.com",
  messagingSenderId: "253186344751",
  appId: "1:253186344751:web:fa03ee90f4a7c36b6ec3da"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// use these for db and auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
