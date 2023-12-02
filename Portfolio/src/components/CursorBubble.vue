<template>
    <div class="cursor-bubble" :style="{ top: `${position.y}px`, left: `${position.x}px` }"></div>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const position = ref({ x: 0, y: 0 });

const updateCursorPosition = (event) => {
    setTimeout(() => {
        position.value = { x: event.clientX, y: event.clientY + window.scrollY };
        
    }, 0); // 50 milliseconds delay
};

onMounted(() => {
    // Attach the mousemove event listener
    window.addEventListener('mousemove', updateCursorPosition);
});

onBeforeUnmount(() => {
    // Remove the mousemove event listener to avoid memory leaks
    window.removeEventListener('mousemove', updateCursorPosition);
});
</script>