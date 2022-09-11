import { createApp } from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue3-lazyload'
import './index.css'

createApp(App).use(VueLazyLoad,{}).mount('#app')
