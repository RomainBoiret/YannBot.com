import './style.css'
import { createApp } from 'vue'

import HeaderEmbed from './components/HeaderEmbed/HeaderEmbed.vue'
import HeaderNavbar from './components/HeaderNavbar/HeaderNavBar.vue'

const app = createApp({})

app.component('header-embed', HeaderEmbed)
app.component('header-navbar', HeaderNavbar)

app.mount('#app')