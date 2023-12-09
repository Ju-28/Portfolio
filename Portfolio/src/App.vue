<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue';
import '@/assets/global-stylesheet.css';
import '@/assets/home-page-stylesheet.css';
import '@/assets/contactform-stylesheet.css';
// import HomeLogo from '/public/svg/icons8-home-100.svg'

import CursorFollower from '@/components/CursorBubble.vue';
import { init } from 'emailjs-com';

const pdfPath = import.meta.env.BASE_URL + 'public/downloads/Julius_Buller_CV.pdf';

const isNavbarVisible = ref(false);

const leftNavbarItems = [
  { label: 'Home', to: '/' }
];

const rightNavbarItems = [
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/services' }
];

onMounted(() => {
  // Show the navbar after a delay
  setTimeout(() => {
    isNavbarVisible.value = true;
  }, 500);
  init();
});

</script>

<template>
  <CursorFollower />
  <main class="landing-page">
    <header>
      <nav class="navbar" v-if="isNavbarVisible">
        <div class="left-navbar" ref="leftNavbar">
          <ul>
            <RouterLink :to="item.to" class="navbar-item" v-for="(item, index) in leftNavbarItems" :key="index"
              :style="{ 'animation-delay': `${index * 0.2}s` }"><span class="material-symbols-outlined" style="transform: scale(1.8);">
                home_app_logo
              </span></RouterLink>
          </ul>
        </div>
        <div class="right-navbar" ref="rightNavbar">
          <ul>
            <router-link v-for="(item, index) in rightNavbarItems" :to="item.to" class="navbar-item" :key="index"
              :style="{ 'animation-delay': `${(index + leftNavbarItems.length) * 0.2}s` }">{{ item.label
              }}</router-link>
            <a class="pdf-button" :href="pdfPath" download="Julius_Buller_CV.pdf"
              :style="{ 'animation-delay': `${(leftNavbarItems.length + rightNavbarItems.length) * 0.2}s` }">Resume<span
                class="material-symbols-outlined">
                download
              </span></a>
          </ul>
        </div>
      </nav>
    </header>
    <RouterView />
  </main>
</template>