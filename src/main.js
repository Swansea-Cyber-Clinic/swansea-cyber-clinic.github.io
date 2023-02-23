import {createApp} from 'vue'
import ServiceMapping from './components/ServiceMapping.vue'

const app = createApp({})

app.component('serviceMapping', ServiceMapping)

app.mount('#app')