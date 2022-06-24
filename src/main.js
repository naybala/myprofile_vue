import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

import AOS from "aos";
import "aos/dist/aos.css";
app.mount('#app');
app.AOS = new AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000 // values from 0 to 3000, with step 50ms
});







