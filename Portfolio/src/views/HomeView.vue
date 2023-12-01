<script setup>
import { ref, onMounted, nextTick } from 'vue';

import ContactForm from '@/components/ContactForm.vue';

const bgTextWrapper = ref(null);
const showForm = ref(true);
const scrollPosition = ref(0);

onMounted(async () => {
  await nextTick();

  if (bgTextWrapper.value) {
    bgTextWrapper.value.offsetHeight;
    bgTextWrapper.value.classList.add('in-view');
  }
});

function scrollToHeight(height) {
  setTimeout(() => {
    const scrollingElement = document.scrollingElement || document.body;
    scrollingElement.scrollTop = height;
  }, 100);
}

function toggleScroll() {
  if (showForm.value) {
    // If the form is visible, scroll to a specific height
    scrollPosition.value = 500; // Set your desired pixel height
    scrollToHeight(scrollPosition.value);
  } else {
    // If the form is not visible, scroll back to the top
    scrollPosition.value = 0;
    scrollToHeight(scrollPosition.value);
  }

  // Toggle the form visibility
  showForm.value = !showForm.value;
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
      <div @click="toggleScroll" class="contact-header" :class="{ showForm: showForm }">
        {{ showForm ? 'Lets get in touch! &#9660;' : 'Lets get in touch! &#9650;' }}
      </div>
      <ContactForm :class="{ 'formFadeIn': !showForm, 'formFadeOut': showForm }" class="contactForm" ref="contactForm" />
    </div>
    <div class="bubble-purple"></div>
    <div class="bubble-yellow"></div>
  </main>
</template>
