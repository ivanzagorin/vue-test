import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB22YTy3-r5rWQfef4Ry58RiSE1Nioh2MA",
  authDomain: "vue-crm-f63d8.firebaseapp.com",
  projectId: "vue-crm-f63d8",
  storageBucket: "vue-crm-f63d8.appspot.com",
  messagingSenderId: "318624532512",
  appId: "1:318624532512:web:9eaeb6d28bc7644dfe9445"
};
firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
