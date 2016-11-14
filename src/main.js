import Vue from 'vue'
import Vuex from 'vuex'
import Quasar from 'quasar'
import router from './router'
import store from './store/store'
import App from './App'

Quasar.theme.set(__THEME)
Vue.use(Vuex)
Vue.use(Quasar) // Install Quasar Framework

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#quasar-app',
    router,
    store,
    render: h => h(App)
  })
})
