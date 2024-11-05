import './assets/main.css'

import { createApp } from 'vue'
import Toast from 'vue-toastification'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Tooltip from 'primevue/tooltip'
// imported css file for toastification styles | overiding a VERY small amount of styles using !important 😈
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Toast, {
  position: 'top-center',
  timeout: 4000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  toastClassName: 'toast-style',
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: 'button',
  icon: true,
  rtl: false,
})
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.directive('tooltip', Tooltip)

app.mount('#app')
