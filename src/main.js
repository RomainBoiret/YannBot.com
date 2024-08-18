import { createApp } from 'vue'
import './style.css'

import HelloWorld from './components/HelloWorld.vue'

const app = createApp({})

app.component('hello-world', HelloWorld)
app.mount('#app')
