import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'

interface Widget {
    id: string
    component: string
}

const widget:Array<Widget> = [
    {id: 'widget-app', component: './components/widget/AppWidget.vue'},
    {id: 'widget-search', component: './components/widget/SearchWidget.vue'}
]

const app = createApp(App)

widget.map(w => {
    app.component(w.id, defineAsyncComponent(() => import(w.component)))
})

app.mount('#app')