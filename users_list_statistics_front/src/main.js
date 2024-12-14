import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import axios from 'axios'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  MdBordercolorOutlined,
  CoUser,
  BiPersonRolodex
} from 'oh-vue-icons/icons'

window.axios = axios
window.axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'
window.axios.defaults.headers.common['Accept'] = 'application/json'
window.axios.defaults.headers.common['Content-Type'] = 'application/json'
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

addIcons(
  MdBordercolorOutlined,
  CoUser,
  BiPersonRolodex
)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.use(router)

app.mount('#app')