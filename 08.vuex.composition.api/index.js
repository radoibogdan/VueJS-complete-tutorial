import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store';

const app = createApp(App)

// Plugin Vuex used
app.use(store);
app.mount('#app');