<script setup>
import { ref, onMounted } from 'vue';

import ContactForm from '@/components/ContactForm.vue'

const bgTextWrapper = ref(null);

const showForm = ref(true)

onMounted(() => {
  // Triggering a reflow to apply the initial styles before adding the in-view class
  bgTextWrapper.value.offsetHeight;

  // Add a class to trigger the animation when the component is mounted
  bgTextWrapper.value.classList.add('in-view');
});

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
    <div ref="bgTextWrapper" class="bg-text">
      <section class="bg-text-1">FRONTEND</section>
      <section class="bg-text-2">BACKEND</section>
      <section class="bg-text-3">DATA SCIENCE</section>
    </div>
    <div class="contact-wrapper">
      <button @click="showForm = !showForm" class="contact-header"
      :class="{showForm:!showForm}">
        {{showForm ? 'Lets get in touch! &#9660;' : 'Lets get in touch! &#9650;'}}
      </button>
      <ContactForm v-if="!showForm"/>
    </div>
  </main>
</template>
