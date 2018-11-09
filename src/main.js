import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'

import './style/index.scss'
import './style/iconfont/iconfont'

import icon from '_c/svg-icon'
Vue.component('icon', icon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
