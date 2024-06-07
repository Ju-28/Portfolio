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

const pdfPath = import.meta.env.BASE_URL + './downloads/Julius_Buller_CV.pdf';

const isNavbarLoaded = ref(false);
const scrollPosition = ref(0);
const showMobileMenu = ref(false);

const state = {
  showMobileMenu: ref(false),
  width: ref(window.innerWidth),
};

const handleResize = () => {
  state.width.value = window.innerWidth;
  if (state.width.value >= 1500) {
    state.showMobileMenu.value = false;
    document.querySelector('.navbar').classList.remove('visible');
  }
};

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
  document.querySelector('.navbar').classList.toggle('visible');
};

const closeMobileNav = () => {
  state.width.value = window.innerWidth;
  if (state.width.value <= 1370) {
    if (showMobileMenu.value == true) {
      showMobileMenu.value = false;
      document.querySelector('.navbar').classList.toggle('visible');
    }
  }
}

onMounted(() => {

  window.addEventListener('resize', handleResize);
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.burger-menu') && state.showMobileMenu.value) {
      state.showMobileMenu.value = false;
    }
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

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
    isNavbarLoaded.value = true;
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

<template v-if="$width < 1135">
  <main class="landing-page">
    <header>
      <RouterLink @click="scrollToTop(); closeMobileNav();" :to="item.to" class="home-button-mobile"
        v-for="(item, index) in leftNavbarItems" :key="index" :style="{ 'animation-delay': `${index * 0.2}s` }">
        <span class="material-symbols-outlined" style="transform: scale(1.8);">
          home_app_logo
        </span>
      </RouterLink>
      <div class="burger-menu" @click="toggleMobileMenu" :class="{ 'open': showMobileMenu }">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
      </div>
      <nav class="navbar" v-if="isNavbarLoaded" v-bind:class="{ 'visible': showMobileMenu }">
        <div class="inner-nav">
          <div class="left-navbar" ref="leftNavbar">
            <ul>
              <RouterLink @click="scrollToTop(); closeMobileNav();" :to="item.to" class="navbar-item"
                v-for="(item, index) in leftNavbarItems" :key="index" :style="{ 'animation-delay': `${index * 0.2}s` }">
                <span class="material-symbols-outlined" style="transform: scale(1.8);">
                  home_app_logo
                </span>
              </RouterLink>
            </ul>
          </div>
          <div class="right-navbar" ref="rightNavbar">
            <ul>
              <router-link v-for="(item, index) in rightNavbarItems" :to="item.to" class="navbar-item" :key="index"
                :style="{ 'animation-delay': `${(index + leftNavbarItems.length) * 0.2}s` }"
                @click="scrollToTop(); closeMobileNav();">{{
          item.label
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
    <!-- <div class="bubble-purple"></div>
    <div class="bubble-peach"></div>
    <div class="bubble-yellow"></div> -->
  </main>
</template>