<script setup>
import { ref } from 'vue';
// import TypeIt from "typeit";
import ContactForm from '@/components/ContactForm.vue';

const showForm = ref(true);
const aboutMeContainerRef = ref(null);
const contactWrapperRef = ref(null);

const coloredImageSrc = '/images/julius_buller.png';
const blackAndWhiteImageSrc = '/images/julius_buller_bw.png';

// document.addEventListener("DOMContentLoaded", function () {
//   new TypeIt(".job", {
//     speed: 80,
//     cursorSpeed: 900,

//   })
//     .type("I bri")
//     .pause(20)
//     .type("ng vis")
//     .pause(35)
//     .type("ions in")
//     .pause(30)
//     .type("to real")
//     .pause(10)
//     .type("ity. ")
//     .go();
// })


function formScroll() {
  if (contactWrapperRef.value) {
    // const offset = 500; // Adjust this value to control how much less it should scroll
    const targetScrollPosition = contactWrapperRef.value.offsetTop

    window.scrollTo({
      top: targetScrollPosition,
      behavior: 'smooth'
    });
  }

}

const scrollToAboutMe = () => {
  if (aboutMeContainerRef.value) {
    const offset = 50; // Adjust this value to control how much less it should scroll
    const targetScrollPosition = aboutMeContainerRef.value.offsetTop + offset;

    window.scrollTo({
      top: targetScrollPosition,
      behavior: 'smooth'
    });
  }
};

</script>

<template>
  <main class="home-page">
    <div class="personal-wrapper">
      <div class="introduction">Hey there! My name is</div>
      <div class="name">Julius Buller.</div>
      <div class="job type-effect">I bring visions into reality.</div>
      <div class="story">
        I am a fullstack software engineer spezialized in building and designing outstanding digital solutions. Currently,
        I am working on my bachelor thesis at <span class="highlighted">42DIGITAL</span> while also creating a <span
          class="highlighted">soon TBA
          SaaS</span>
        solution in the fields of networking, data and events.
      </div>
      <div class="more-buttons">
        <div class="scroll-to-about-me" @click="scrollToAboutMe">About me</div>
        <div @click="formScroll" class="contact-header" :class="{ showForm: showForm }">
          Let's get in touch!
        </div>
      </div>
    </div>

    <div class="about-me-container" ref="aboutMeContainerRef">
      <div class="about-me-content">
        <div class="about-me-left">
          <div class="about-me-headline">
            <h2><span class="material-symbols-sharp"> add
              </span>About me</h2>
            <div class="about-me-h-line"></div>
          </div>
          <p>I am a 24 year old fullstack engineer with backgrounds in computer science and data. I love working goal
            oriented
            together with like-minded people, while also trying to find my own way. Having a background in communications
            also really helps me to accomplish things in groups.</p>
          <p>
            Coming up with new ideas and bringing them into reality is the foundation of my motivation, while I always try
            to learn
            new things each time. If there is a problem, I want to solve it.
          </p>
          <p>This wide range of skills already allowed me to be part of an <span class="highlighted">online marketing
              agency</span>, <span class="highlighted">a green tech energy start-up</span> and <span
              class="highlighted">my
              own
              SaaS</span>.</p>
        </div>
        <div class="about-me-right">
          <div class="img-box"></div>
          <span class="click-me">
            Click me!
          </span>
          <img :src="coloredImageSrc">
          <img :src="blackAndWhiteImageSrc" class="img-bw">
        </div>
      </div>
      <div class="scroll-to-contact" @click="formScroll">Contact me!</div>
    </div>
    <div class="contact-wrapper" ref="contactWrapperRef">
      <ContactForm :class="{ 'formFadeIn': !showForm, 'formFadeOut': showForm }" class="contactForm" ref="contactForm" />
    </div>
  </main>
</template>
