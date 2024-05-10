//main.js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app"
//import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import 'firebase/auth'

const firebaseConfig = {
    
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

createApp(App).use(router).mount('#app')
export const auth = firebase.auth()
export{
    db
}