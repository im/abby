import { createApp } from 'vue'
import './style.styl'
import './index.css'
import App from './App.vue'
import vueRouter from './router'

import { Tabbar, TabbarItem, Tabs, Tab,Popup, Skeleton, Cell,Picker, CellGroup, Card,ContactCard,Field,Radio,RadioGroup } from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(Tabbar)
app.use(TabbarItem)
app.use(Tabs)
app.use(Skeleton)
app.use(Tab)
app.use(Cell)
app.use(CellGroup)
app.use(Card)
app.use(ContactCard)
app.use(Field)
app.use(Picker)
app.use(Popup)
app.use(Radio)
app.use(RadioGroup)

app.use(vueRouter)

app.mount('#app')
