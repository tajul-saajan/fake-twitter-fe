import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

/* add font awesome icon component */

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
