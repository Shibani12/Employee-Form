import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// import Vue from 'vue'
// import  BootstrapVue from 'bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'


// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

createApp(App).mount('#app')

import "bootstrap/dist/js/bootstrap.js"

import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
export default {
  components: {
    SidebarMenu
  }
}


