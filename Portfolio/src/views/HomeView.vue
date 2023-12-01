<script setup>
import { ref, onMounted, nextTick } from 'vue';

import ContactForm from '@/components/ContactForm.vue'

const bgTextWrapper = ref(null);

const showForm = ref(true)

onMounted(async () => {
  // Wait for the next DOM update using nextTick
  await nextTick();

  // Check if bgTextWrapper.value is not null before accessing properties
  if (bgTextWrapper.value) {
    // Triggering a reflow to apply the initial styles before adding the in-view class
    bgTextWrapper.value.offsetHeight;

    // Add a class to trigger the animation when the component is mounted
    bgTextWrapper.value.classList.add('in-view');
  }
});

function scrollToTopOrBottom() {
  setTimeout(() => {
    const scrollingElement = document.scrollingElement || document.body;
    const isAtBottom = scrollingElement.scrollTop === scrollingElement.scrollHeight - scrollingElement.clientHeight;

    if (isAtBottom) {
      // If already at the bottom, scroll to the top
      scrollingElement.scrollTop = 0;
    } else {
      // If not at the bottom, scroll to the bottom
      scrollingElement.scrollTop = scrollingElement.scrollHeight;
    }
  }, 100); // 100 milliseconds
}
</script>

<template>
  <main class="home-page">
    <div class="personal-wrapper">
      <div class="introduction">Hey there! My name is</div>
      <div class="name">My Name.</div>
      <div class="job">I bring visions into reality.</div>
      <div class="story">
        While already gaining first experiences during college,
        I really started mastering my work shortly after I graduated
        in early 20XX.
        Designwise, I spezialized myself in the fields of dark, neon
        and vibrant solutions, resulting in more than twenty top notch
        projects, making me and my work <span class="highlighted">the ideal choice</span> to bring your
        imagination and wishes to life.
      </div>
    </div>
    <div class="contact-wrapper">
      <div @click="showForm = !showForm; scrollToTopOrBottom()" class="contact-header" :class="{ showForm: showForm }">
        {{ showForm ? 'Lets get in touch! &#9660;' : 'Lets get in touch! &#9650;' }}
      </div>
      <ContactForm :class="{ 'formFadeIn': !showForm, 'formFadeOut': showForm }" class="contactForm" ref="contactForm" />
    </div>
    <div class="bubble-purple"></div>
    <div class="bubble-yellow"></div>
  </main>
</template>
