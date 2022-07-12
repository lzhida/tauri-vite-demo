import { createApp } from 'vue';
import App from './App.vue';
import { useStore } from './store';

const app = createApp(App);

// pinia
useStore(app);

app.mount('#app');
