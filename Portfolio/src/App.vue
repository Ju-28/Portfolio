<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted, onBeforeUnmount } from 'vue';
import '@/assets/global-stylesheet.css';
import '@/assets/home-page-stylesheet.css';
import '@/assets/contactform-stylesheet.css';
import '@/assets/experience-stylesheet.css';
// import HomeLogo from '/public/svg/icons8-home-100.svg'

// import CursorFollower from '@/components/CursorBubble.vue';
import { init } from 'emailjs-com';

const pdfPath = import.meta.env.BASE_URL + 'public/downloads/Julius_Buller_CV.pdf';

const isNavbarVisible = ref(false);
const scrollPosition = ref(0);

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

function scrollToHeight(height) {
  setTimeout(() => {
    const scrollingElement = document.scrollingElement || document.body;
    scrollingElement.scrollTop = height;
  }, 100);
}

function scrollToTop() {

  scrollPosition.value = 0;
  scrollToHeight(scrollPosition.value)

}

const handleScroll = () => {
  scrollPosition.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <!-- <CursorFollower /> -->
  <main class="landing-page">
    <header>
      <div class="blur"></div>
      <nav class="navbar" v-if="isNavbarVisible">
        <div class="inner-nav">
          <div class="left-navbar" ref="leftNavbar">
            <ul>
              <RouterLink :to="item.to" class="navbar-item" v-for="(item, index) in leftNavbarItems" :key="index"
                :style="{ 'animation-delay': `${index * 0.2}s` }"><span class="material-symbols-outlined"
                  style="transform: scale(1.8);">
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
        </div>
      </nav>
    </header>
    <RouterView />
    <div v-if="scrollPosition >= 500" class="scroll-to-top" @click="scrollToTop"><span class="material-symbols-sharp">
        arrow_upward
      </span></div>
    <div class="bubble-purple"></div>
    <div class="bubble-peach"></div>
    <div class="bubble-yellow"></div>
  </main>
</template>