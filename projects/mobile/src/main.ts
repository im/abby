import { createApp } from 'vue'
import './style.styl'
import './index.css'
import App from './App.vue'
import vueRouter from './router'

import { Tabbar, TabbarItem, Tabs, Tab, Skeleton, Cell, CellGroup, Card,ContactCard } from 'vant'
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

app.use(vueRouter)

app.mount('#app')
