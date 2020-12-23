import Vue from 'vue'
import App from './App'
import 'core-js/stable'
import store from './store'
import VueMask from 'v-mask'
import router from './router'
import CoreuiVue from '@coreui/vue'
import vSelect from "vue-select"
import "vue-select/dist/vue-select.css"
import {iconsSet as icons} from './assets/icons/icons.js'

Vue.use(VueMask);

Vue.component("v-select", vSelect);

Vue.prototype.$apiAdress = 'http://127.0.0.1:8000'
Vue.config.performance = true
Vue.use(CoreuiVue)

new Vue({
    el: '#app',
    router,
    store,
    icons,
    template: '<App/>',
    components: {
        App
    },
})
