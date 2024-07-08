<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';

const portfolioImage = '/images/Portfolio_Logo.png';
const hiventImage = '/images/HIVENT_LOGO_ONLY.png';
const reloadImage = '/images/reload_weiß.png'

onMounted(() => {
    document.title = 'Julius Buller | Projects'
})

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
                        Projects
                    </h2>
                    <div class="about-me-h-line"></div>
                </div>
                <h2 class="experience-sub">Check out what I'm doing outside of work!</h2>
                <div class="experience-intro">
                    On this page I will show you some of the work I have accomplished outside of employment and college.
                    These projects made it possible to really dive into technologies and topics I am interested in,
                    which
                    helped
                    to develop <span class="highlighted">new skills</span> and gain more <span
                        class="highlighted">relevant experience</span> in each of
                    these fields.
                </div>
            </div>
            <div class="experience-right">
                <div class="experience engineer" @mouseover="setHovered()" @mouseleave="unsetHovered()"
                    @touchstart="setHovered()" @touchend="unsetHovered()" :class="{ 'low-opacity': hoveredElement }">
                    <div class="experience-time">
                        <img class="project-image" :src="hiventImage">
                    </div>
                    <div class="experience-content">
                        <div class="experience-header">
                            <span class="experience-position">Fullstack Engineering · Hivent
                            </span>
                            <a class="project-link hivent" target="blank"
                                href="https://hivent-demo.vercel.app/">Frontend Demo
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                                    viewBox="0 0 128 128">
                                    <path
                                        d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z">
                                    </path>
                                </svg></a> (Heavy WIP)
                        </div>
                        <p class="experience-info">Hivent is all about events and connecting people. With my first SaaS,
                            I give attendees, hosts and locations the opportunity to find the best fitting connections
                            to elevate their experiences and possibilities to new heights. To achieve all this, I made
                            use of technologies like Next.js, Django, Docker, Google's App Engine and so much more. This
                            project really brought my software engineering skills to the next level. In addition I was
                            able to learn a lot about entrepreneurship, marketing and analyzing requirements.
                        </p>
                        <div class="technologies">
                            <span class="technology">JavaScript</span>
                            <span class="technology">HTML</span>
                            <span class="technology">CSS</span>
                            <span class="technology">Python</span>
                            <span class="technology">Next.js</span>
                            <span class="technology">Django</span>
                            <span class="technology">Docker</span>
                            <span class="technology">CI/CD</span>
                            <span class="technology">Google Cloud</span>
                            <span class="technology">App Engine</span>
                        </div>
                    </div>
                </div>
                <div class="experience engineer" @mouseover="setHovered()" @mouseleave="unsetHovered()"
                    @touchstart="setHovered()" @touchend="unsetHovered()" :class="{ 'low-opacity': hoveredElement }">
                    <div class="experience-time">
                        <img class="project-image" :src="portfolioImage">
                    </div>
                    <div class="experience-content">
                        <div class="experience-header">
                            <span class="experience-position">Frontend Engineering · Web-Portfolio
                            </span>
                            <a class="project-link" href="https://julius-buller.io" target="blank">Live Webpage
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                                    viewBox="0 0 128 128">
                                    <path
                                        d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z">
                                    </path>
                                </svg></a>
                        </div>
                        <p class="experience-info">The fact that you are reading this means your are already familiar
                            with this Project! I use my Portfolio to give visitors a first glance of who I am, provide
                            some insights about my professional experience and display some of the projects I created.
                        </p>
                        <div class="technologies">
                            <span class="technology">JavaScript</span>
                            <span class="technology">HTML</span>
                            <span class="technology">CSS</span>
                            <span class="technology">Vue</span>
                            <span class="technology">Netlify</span>
                        </div>
                    </div>
                </div>
                <div class="experience engineer" @mouseover="setHovered()" @mouseleave="unsetHovered()"
                    @touchstart="setHovered()" @touchend="unsetHovered()" :class="{ 'low-opacity': hoveredElement }">
                    <div class="experience-time">
                        <img class="project-image reload" :src="reloadImage">
                    </div>
                    <div class="experience-content">
                        <div class="experience-header">
                            <span class="experience-position">Frontend Engineering · Reload Website
                            </span>
                            <a class="project-link" href="https://reload-wav.netlify.app/" target="blank">Live
                                Webpage
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                                    viewBox="0 0 128 128">
                                    <path
                                        d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z">
                                    </path>
                                </svg></a>
                        </div>
                        <p class="experience-info">This Vue.js based SPA was one of my first projects, marking the
                            beginning of my coding journey. Its purpose is to digitally represent the
                            event series "RELOAD" while giving access to some images and ticket information.
                        </p>
                        <div class="technologies">
                            <span class="technology">JavaScript</span>
                            <span class="technology">HTML</span>
                            <span class="technology">CSS</span>
                            <span class="technology">Vue</span>
                            <span class="technology">Netlify</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>