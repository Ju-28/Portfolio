<script setup>
import { RouterView } from 'vue-router'
import '@/assets/global-stylesheet.css';
import '@/assets/home-page-stylesheet.css';


const pdfPath = import.meta.env.BASE_URL + 'public/downloads/Julius_Buller_CV.pdf';


</script>

<template>
  <main class="landing-page">
    <header>
      <nav class="navbar">
        <div class="left-navbar">
          <ul>
            <router-link to="/" class="navbar-item">Home</router-link>
          </ul>

        </div>
        <div class="right-navbar">
          <ul>
            <router-link to="/experience" class="navbar-item">Experience</router-link>
            <router-link to="/projects" class="navbar-item">Projects</router-link>
            <a class="pdf-button" :href="pdfPath" download="Julius_Buller_CV.pdf">Resume</a>
          </ul>
        </div>
      </nav>
    </header>

    <RouterView />
  </main>
</template>