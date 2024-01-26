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

const isAnimationActive = ref(false);

const showSocials = () => {
  isAnimationActive.value = !isAnimationActive.value;
};

</script>

<template>
  <main class="home-page">
    <div class="personal-wrapper">
      <div class="introduction">Hey there! My name is</div>
      <div class="name">Julius Buller.</div>
      <div class="job type-effect">I bring visions into reality.</div>
      <div class="story">
        I am a fullstack software engineer spezialized in building and designing outstanding digital experiences.
        Currently,
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
        <div v-motion-slide-visible-left class="about-me-left">
          <div class="about-me-headline">
            <h2><span class="material-symbols-sharp"> add
              </span>About me</h2>
            <div class="about-me-h-line"></div>
          </div>
          <p>I am a 24 year old fullstack engineer with backgrounds in computer science and data. I love working goal
            oriented
            together with like-minded people, while also trying to find my own way. Having a background in
            communications
            also really helps me to accomplish things in groups.</p>
          <p>
            Coming up with new ideas and bringing them into reality is the foundation of my motivation, while I always
            try
            to learn
            new things each time. If there is a problem, I want to solve it.
          </p>
          <p>This wide range of skills already allowed me to be part of an <span class="highlighted">online marketing
              agency</span>, <span class="highlighted">a green energy tech start-up</span> and <span
              class="highlighted">my
              own
              SaaS</span>.</p>
        </div>
        <div v-motion-slide-visible-right class="about-me-right">
          <div class="img-box"></div>
          <span class="click-me" @click="showSocials">
            Click me!
          </span>
          <img :src="coloredImageSrc" @click="showSocials" :class="{ 'img-shake': isAnimationActive }">
          <img :src="blackAndWhiteImageSrc" class="img-bw" @click="showSocials"
            :class="{ 'img-shake': isAnimationActive }">
          <a href="https://www.instagram.com/julius_blr/" target="blank" class="social social-1"
            :class="{ 'social-show-1': isAnimationActive, 'social-hide-1': !isAnimationActive }"><svg
              xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0,0,256,256">
              <defs>
                <radialGradient cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"
                  id="color-1_Xy10Jcu1L2Su_gr1">
                  <stop offset="0" stop-color="#ffdd55"></stop>
                  <stop offset="0.328" stop-color="#ff543f"></stop>
                  <stop offset="0.348" stop-color="#fc5245"></stop>
                  <stop offset="0.504" stop-color="#e64771"></stop>
                  <stop offset="0.643" stop-color="#d53e91"></stop>
                  <stop offset="0.761" stop-color="#cc39a4"></stop>
                  <stop offset="0.841" stop-color="#c837ab"></stop>
                </radialGradient>
                <radialGradient cx="11.786" cy="5.5403" r="29.813" gradientUnits="userSpaceOnUse"
                  id="color-2_Xy10Jcu1L2Su_gr2">
                  <stop offset="0" stop-color="#4168c9"></stop>
                  <stop offset="0.999" stop-color="#4168c9" stop-opacity="0"></stop>
                </radialGradient>
              </defs>
              <g fill-opacity="0" fill="#cdd7f7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <path d="M115.2,140.8v-25.6h25.6v25.6z" id="shape"></path>
              </g>
              <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <g transform="scale(5.33333,5.33333)">
                  <path
                    d="M34.017,41.99l-20,0.019c-4.4,0.004 -8.003,-3.592 -8.008,-7.992l-0.019,-20c-0.004,-4.4 3.592,-8.003 7.992,-8.008l20,-0.019c4.4,-0.004 8.003,3.592 8.008,7.992l0.019,20c0.005,4.401 -3.592,8.004 -7.992,8.008z"
                    fill="url(#color-1_Xy10Jcu1L2Su_gr1)"></path>
                  <path
                    d="M34.017,41.99l-20,0.019c-4.4,0.004 -8.003,-3.592 -8.008,-7.992l-0.019,-20c-0.004,-4.4 3.592,-8.003 7.992,-8.008l20,-0.019c4.4,-0.004 8.003,3.592 8.008,7.992l0.019,20c0.005,4.401 -3.592,8.004 -7.992,8.008z"
                    fill="url(#color-2_Xy10Jcu1L2Su_gr2)"></path>
                  <path
                    d="M24,31c-3.859,0 -7,-3.14 -7,-7c0,-3.86 3.141,-7 7,-7c3.859,0 7,3.14 7,7c0,3.86 -3.141,7 -7,7zM24,19c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5z"
                    fill="#ffffff"></path>
                  <circle cx="31.5" cy="16.5" r="1.5" fill="#ffffff"></circle>
                  <path
                    d="M30,37h-12c-3.859,0 -7,-3.14 -7,-7v-12c0,-3.86 3.141,-7 7,-7h12c3.859,0 7,3.14 7,7v12c0,3.86 -3.141,7 -7,7zM18,13c-2.757,0 -5,2.243 -5,5v12c0,2.757 2.243,5 5,5h12c2.757,0 5,-2.243 5,-5v-12c0,-2.757 -2.243,-5 -5,-5z"
                    fill="#ffffff"></path>
                </g>
              </g>
            </svg></a>
          <a href="https://www.linkedin.com/in/julius-buller-7264b6226/" target="blank" class="social social-2"
            :class="{ 'social-show-2': isAnimationActive, 'social-hide-2': !isAnimationActive }"><svg
              xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0,0,256,256">
              <g transform="">
                <g fill="#cdd7f7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                  stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                  font-family="none" font-weight="none" font-size="none" text-anchor="none"
                  style="mix-blend-mode: normal">
                  <path d="M115.2,140.8v-25.6h25.6v25.6z" id="shape"></path>
                </g>
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                  stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                  font-family="none" font-weight="none" font-size="none" text-anchor="none"
                  style="mix-blend-mode: normal">
                  <g transform="scale(5.33333,5.33333)">
                    <path
                      d="M42,37c0,2.762 -2.238,5 -5,5h-26c-2.761,0 -5,-2.238 -5,-5v-26c0,-2.762 2.239,-5 5,-5h26c2.762,0 5,2.238 5,5z"
                      fill="#0288d1"></path>
                    <path
                      d="M12,19h5v17h-5zM14.485,17h-0.028c-1.492,0 -2.457,-1.112 -2.457,-2.501c0,-1.419 0.995,-2.499 2.514,-2.499c1.521,0 2.458,1.08 2.486,2.499c0,1.388 -0.965,2.501 -2.515,2.501zM36,36h-5v-9.099c0,-2.198 -1.225,-3.698 -3.192,-3.698c-1.501,0 -2.313,1.012 -2.707,1.99c-0.144,0.35 -0.101,1.318 -0.101,1.807v9h-5v-17h5v2.616c0.721,-1.116 1.85,-2.616 4.738,-2.616c3.578,0 6.261,2.25 6.261,7.274l0.001,9.726z"
                      fill="#ffffff"></path>
                  </g>
                </g>
              </g>
            </svg></a>
          <a href="https://github.com/Ju-28" target="blank" class="social social-3"
            :class="{ 'social-show-3': isAnimationActive, 'social-hide-3': !isAnimationActive }">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0,0,256,256">
              <g fill-opacity="0" fill="#cdd7f7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <path d="M115.2,140.8v-25.6h25.6v25.6z" id="shape"></path>
              </g>
              <g fill="#cdd7f7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <g transform="scale(5.12,5.12)">
                  <path
                    d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z">
                  </path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="scroll-to-contact" @click="formScroll">Contact me!</div>
    </div>
    <div v-motion-pop-visible class="contact-wrapper" ref="contactWrapperRef">
      <ContactForm :class="{ 'formFadeIn': !showForm, 'formFadeOut': showForm }" class="contactForm" ref="contactForm" />
    </div>
  </main>
</template>
