import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import components from '@/components'

const app = createApp(App)

components.forEach((component) => {
    app.component(component.name, component);
});

app.mount('#app');