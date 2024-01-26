import { createApp } from 'vue'
import { createPinia } from 'pinia'
import drie from '@janvorisek/drie'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(MotionPlugin)
app.use(createPinia())
app.use(router)
app.use(drie)

app.mount('#app')

// window.onmousemove = e => {
//     const mouseX = e.clientX;
//     const mouseY = e.clientX;

//     const bubble = document.createElement("span");

//     bubble.style.left = `${mouseX}px`;
//     bubble.style.top = `${mouseY}px`;

//     document.body.appendChild('bubble');
//   }
