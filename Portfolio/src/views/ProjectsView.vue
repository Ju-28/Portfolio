<script setup>
import { onMounted } from 'vue';
const constructionGif = '/images/construction.gif';

onMounted(() => {
    document.title = 'Julius Buller | Projects'
})
</script>

<template>
    <main class="home-page">
        <div class="personal-wrapper">
            <div class="name">Coming Soon!</div>
            <img class="construction-gif" :src="constructionGif">
        </div>
    </main>
</template>