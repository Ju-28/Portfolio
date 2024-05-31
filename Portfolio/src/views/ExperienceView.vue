<script setup>
import { ref } from 'vue';
// const pdfPath_42DIGITAL = import.meta.env.BASE_URL + './downloads/Julius_Buller_Reference_42DIGITAL.pdf';
const pdfPath_GreenPocket = import.meta.env.BASE_URL + './downloads/Julius_Buller_Reference_GreenPocket.pdf';

const masterRef = ref(null);
const bachelorRef = ref(null)
const greenPocketRef = ref(null)
const workingStudentRef = ref(null)

function workingStudentScroll() {
  if (workingStudentRef.value) {
    const targetScrollPosition = workingStudentRef.value

    window.scrollTo({
      left: targetScrollPosition,
      behavior: 'smooth'
    });
  }

}

const hoveredElement = ref(false);

const setHovered = () => {
  hoveredElement.value = true;
};

const unsetHovered = () => {
  hoveredElement.value = false;
};
</script>

<template>
  <main class="experience-page">
    <div class="experience-wrapper">
      <div class="experience-left">
        <div class="experience-headline">
          <h2>
            <span class="material-symbols-sharp"> add
            </span>
            Experience
          </h2>
          <div class="about-me-h-line"></div>
        </div>
        <h2 class="experience-sub">Fullstack Engineer @42DIGITAL</h2>
        <div class="experience-intro">
          Since starting my bachelor's program, I've been able to work in various positions, allowing me to gain a wide
          variety of
          usefull skills. From <span class="highlighted">data engineering</span> to <span class="highlighted">front-end
            development and UI/UX design</span>, each role enabled me to expand
          my skillset and deepen my understanding for digital solutions.
        </div>
      </div>
      <div class="experience-right">
        <div class="experience engineer" ref="masterRef" @mouseover="setHovered()" @mouseleave="unsetHovered()"
          @touchstart="setHovered()" @touchend="unsetHovered()" :class="{ 'low-opacity': hoveredElement }">
          <div class="experience-time">
            MAR 2024 - PRESENT
          </div>
          <div class="experience-content">
            <div class="experience-header">
              <span class="experience-position">Fullstack & Data Engineer · 42DIGITAL
                <!-- <a class="pdf-reference"
                  :href="pdfPath_42DIGITAL" download="Reference_42DIGITAL.pdf">
                <span class="material-symbols-rounded">
                  article_shortcut
                </span>
                 </a> -->
              </span>
              <p>Working Student</p>
            </div>
            <p class="experience-info">In the time between finishing my bachelor's program and starting my master's
              program, I was already given more responsibilities while working @42DIGITAL. During this time I was
              simultaneously working on further
              developing a customer center and creating individual software solutions that helped B2B customers to
              optimize their workflows, while also managing customer relations.</p>
            <div class="technologies">
              <span class="technology">JavaScript</span>
              <span class="technology">HTML</span>
              <span class="technology">CSS</span>
              <span class="technology">React</span>
              <span class="technology">Flask</span>
              <span class="technology">Docker</span>
              <span class="technology">Git</span>
              <span class="technology">Google Cloud</span>
            </div>
          </div>
        </div>
        <div class="experience bachelor" ref="bachelorRef" @mouseover="setHovered()" @mouseleave="unsetHovered()"
          @touchstart="setHovered()" @touchend="unsetHovered()" :class="{ 'low-opacity': hoveredElement }">
          <div class="experience-time">
            OCT 2023 - MAY 2024
          </div>
          <div class="experience-content">
            <div class="experience-header">
              <span class="experience-position">Fullstack Engineer · 42DIGITAL
                <!-- <a class="pdf-reference"
                  :href="pdfPath_42DIGITAL" download="Reference_42DIGITAL.pdf">
                <span class="material-symbols-rounded">
                  article_shortcut
                </span>
                 </a> -->
              </span>
              <p>Bachelor Thesis</p>
            </div>
            <p class="experience-info">During my bachelor thesis at 42DIGITAL, I was in charge of creating a customer
              center from scratch, which
              would help to manage clients, generate new revenue streams and lay the foundation of a new product line.
              Some of the key features are 24/7 personal dashboard access, an alert manager for custom metrics and
              providing
              several AI-powered applications.</p>
            <div class="technologies">
              <span class="technology">JavaScript</span>
              <span class="technology">HTML</span>
              <span class="technology">CSS</span>
              <span class="technology">React</span>
              <span class="technology">Next.js</span>
              <span class="technology">Django</span>
              <span class="technology">Firebase</span>
              <span class="technology">Docker</span>
              <span class="technology">Git</span>
              <span class="technology">Google Cloud</span>
            </div>
          </div>
        </div>
        <div class="experience green-pocket" ref="greenPocketRef" @mouseover="setHovered()" @mouseleave="unsetHovered()"
          @touchstart="setHovered()" @touchend="unsetHovered()" :class="{ 'low-opacity': hoveredElement }">
          <div class="experience-time">
            MAR 2023 - SEP 2023
          </div>
          <div class="experience-content">
            <div class="experience-header">
              <span class="experience-position">Data Science & Strategy · GreenPocket<a class="pdf-reference"
                  :href="pdfPath_GreenPocket" download="Reference_GreenPocket.pdf"><span
                    class="material-symbols-rounded">
                    article_shortcut
                  </span></a></span>
              <p>Internship</p>
            </div>
            <p class="experience-info">As part of my bachelor's program, I completed a 6-month internship.
              During this time, my work within the scope of the 'Baseline-Generator'-Project was able to predict
              six-figure
              saving amounts for the company's clients and demonstrably improve the performance of the utilized
              forecasting model
              through parameter tuning. This experience, coupled with some of the courses I attended, gave me the
              opportunity
              to deepen my knowledge in the areas of ETL, Data Science, and Strategy. </p>
            <div class="technologies">
              <span class="technology">Python</span>
              <span class="technology">XGBoost</span>
              <span class="technology">Jupyter</span>
              <span class="technology">Git</span>
            </div>
          </div>
        </div>
        <div class="experience working-student" ref="workingStudentRef" @click="workingStudentScroll"
          @mouseover="setHovered()" @mouseleave="unsetHovered()" @touchstart="setHovered()" @touchend="unsetHovered()"
          :class="{ 'low-opacity': hoveredElement }">
          <div class="experience-time">
            JUN 2022 - FEB 2023
          </div>
          <div class="experience-content">
            <div class="experience-header">
              <span class="experience-position">Data Engineer · 42DIGITAL
                <!-- <a class="pdf-reference"
                  :href="pdfPath_42DIGITAL" download="Reference_42DIGITAL.pdf">
                <span class="material-symbols-rounded">
                  article_shortcut
                </span>
                 </a> -->
              </span>
              <p>Working Student</p>
            </div>
            <p class="experience-info">At my first job in the IT industry, I began as a working student at 42DIGITAL,
              where I supported the daily work of the Data & AI team. I was responsible for numerous ETL processes,
              cloud
              functions and integrations, as well as data visualization for B2B clients to help them understand their
              metrics. Here, I gained initial experience
              with Google Cloud and its functions, while also learning to create efficient SQL queries and data
              pipelines.
            </p>
            <div class="technologies">
              <span class="technology">Python</span>
              <span class="technology">SQL</span>
              <span class="technology">Big Query</span>
              <span class="technology">Jupyter</span>
              <span class="technology">Google Cloud</span>
              <span class="technology">Git</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>