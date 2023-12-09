<script setup>
import { ref } from 'vue';
import TypeIt from "typeit";
import ContactForm from '@/components/ContactForm.vue';

const showForm = ref(true);
const scrollPosition = ref(0);

document.addEventListener("DOMContentLoaded", function () {
  new TypeIt(".job", {
    speed: 80,
    cursorSpeed: 900,
    
  })
    .type("I bri")
    .pause(20)
    .type("ng vis")
    .pause(35)
    .type("ions in")
    .pause(30)
    .type("to real")
    .pause(10)
    .type("ity. ")
    .go();
})

function scrollToHeight(height) {
  setTimeout(() => {
    const scrollingElement = document.scrollingElement || document.body;
    scrollingElement.scrollTop = height;
  }, 100);
}

function toggleScroll() {
  if (showForm.value) {
    const formContainer = document.querySelector('.form-container');
    if (formContainer) {
      formContainer.classList.add('formFadeOut');
    }
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
      <div class="name">Julius Buller.</div>
      <div class="job type-effect"></div>
      <div class="story">
        While already gaining first experiences during college,
        I really started mastering my work shortly after I graduated
        in early 2024.
        Designwise, I spezialized myself in the fields of dark, neon
        and vibrant solutions, resulting in a rich portfolio of top-notch projects,
        making me and my work <span class="highlighted">the ideal choice</span> to bring your
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
    <div class="bubble-peach"></div>
    <div class="bubble-yellow"></div>
  </main>
</template>
