import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import BoardIcon from '@/components/SVG/BoardIcon.vue'
import CommodityIcon from './components/SVG/CommodityIcon.vue'

const pinia = createPinia();

const app = createApp(App).use(router).use(pinia).use(ElementPlus, { locale: zhCn })

app.component('BoardIcon', BoardIcon)
app.component('CommodityIcon', CommodityIcon)

app.mount('#app')
