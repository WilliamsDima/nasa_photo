import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import directives from '@/directives/'
import { store } from './store/store'

const app = createApp(App)

directives.forEach((directiv: any) => {
    app.directive(directiv.name, directiv)
})

app
    .use(router)
    .use(store)
    .mount('#app')
