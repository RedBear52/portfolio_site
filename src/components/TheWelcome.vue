<template>
  <WelcomeItem @icon-click="showModal('introduction')">
    <template #icon> <i class="pi pi-book"></i> </template>
    <template #heading><span class="header-text">Introduction</span></template>

    I'm <span class="emphasis">Ryan Spearman</span>, a lifelong
    <a href="https://ryanspearman.net/" target="_blank" rel="noopener"
      >music professional</a
    >
    who, over the last few years, has plunged head-first into the infinitely
    rewarding world of web & software development.
  </WelcomeItem>

  <WelcomeItem @icon-click="showModal('toolbox')">
    <template #icon>
      <i class="pi pi-wrench" @mouseover="showGlow"></i>
    </template>
    <template #heading>Tool Box</template>

    My primary tools are
    <span class="emphasis"
      >Angular, Vue, vanilla JS, Typescript, HTML, CSS, Node, Git, Express</span
    >
    and <span class="emphasis">Firebase</span>. I also have experience with
    <span class="emphasis"
      >Sass, Tailwind, Angular Material, ChatGPT API, Python, Multer, Beautiful
      Soup, PHP, PostgreSQL, AWS, CircleCI, Sharp</span
    >
    and <span class="emphasis">Ffmpeg</span>.
    <br />
  </WelcomeItem>
  <WelcomeItem @icon-click="showModal('certifications')">
    <template #icon>
      <i class="pi pi-graduation-cap"></i>
    </template>
    <template #heading>Certifications</template>

    My certifications were all issued by
    <span class="emphatic-white">Accenture's Udacity Program</span> and include:
    <a
      href="https://www.udacity.com/certificate/NEKGL27E"
      target="_blank"
      rel="noopener"
      >Intro to Programming</a
    >,
    <a
      href="https://confirm.udacity.com/6YPHMFLX"
      target="_blank"
      rel="noopener"
      >Intermediate Javascript</a
    >,
    <a
      href="https://confirm.udacity.com/ECGAWQ4L"
      target="_blank"
      rel="noopener"
      >Front End Web Developer</a
    >, and
    <a
      href="https://www.udacity.com/certificate/e/3df826a4-348b-11ed-9e2c-2be6d7c13e3f"
      target="_blank"
      rel="noopener"
      >Full Stack Javascript Developer</a
    >.
  </WelcomeItem>

  <WelcomeItem @icon-click="showModal('portfolio')">
    <template #icon>
      <i class="pi pi-briefcase"></i>
    </template>
    <template #heading>Project Portfolio</template>

    Some examples of my work:
    <a href="https://floodeditions.com/" target="_blank" rel="noopener"
      >Fullstack Website Build</a
    >,
    <a href="https://betterbanjopractice.com/" target="_blank" rel="noopener"
      >Musician's Practice Optimizer</a
    >,
    <a href="https://kdhx-uploader.com" target="_blank" rel="noopener"
      >Selfie Video Upload Manager</a
    >,
    <a href="https://babemon-transcriber.com/" target="_blank" rel="noopener"
      >Audio File Transcriber & Monitor</a
    >
    and
    <a href="https://sonomyn.com/" target="_blank" rel="noopener"
      >Audio File Minifier</a
    >.
  </WelcomeItem>

  <WelcomeItem @icon-click="showModal('hire')">
    <template #icon>
      <i class="pi pi-link"></i>
    </template>
    <template #heading>Hire Me</template>

    If you'd like to retain my skills for your company or your next project,
    please reach out through the
    <RouterLink to="/contact" class="hover-text">contact form</RouterLink>.
  </WelcomeItem>

  <TheModal
    class="modal"
    :isVisible="isModalVisible"
    @close="isModalVisible = false"
  >
    <div v-if="modalContent === 'introduction'">
      <h2>Introduction</h2>
      I'm <span class="emphasis">Ryan Spearman</span>, a lifelong
      <a href="https://ryanspearman.net/" target="_blank" rel="noopener"
        >music professional</a
      >
      who, over the last few years, has plunged head-first into the infinitely
      rewarding world of web & software development.
    </div>
    <div v-if="modalContent === 'toolbox'">
      <h2>Tool Box</h2>
      My primary tools are
      <span class="emphasis"
        >Angular, Vue, vanilla JS, Typescript, HTML, CSS, Node, Git,
        Express</span
      >
      and <span class="emphasis">Firebase</span>. I also have experience with
      <span class="emphasis"
        >Sass, Tailwind, Angular Material, ChatGPT API, Python, Multer,
        Beautiful Soup, PHP, PostgreSQL, AWS, CircleCI, Sharp</span
      >
      and <span class="emphasis">Ffmpeg</span>.
      <br />
    </div>
    <div v-if="modalContent === 'certifications'">
      <h2>Certifications</h2>
      My certifications were all issued by
      <span class="emphasis">Accenture's Udacity Program</span> and include:
      <a
        href="https://www.udacity.com/certificate/NEKGL27E"
        target="_blank"
        rel="noopener"
        ><span class="emphasis">Intro to Programming</span></a
      >,
      <a
        href="https://confirm.udacity.com/6YPHMFLX"
        target="_blank"
        rel="noopener"
        ><span class="emphasis">Intermediate Javascript</span></a
      >,
      <a
        href="https://confirm.udacity.com/ECGAWQ4L"
        target="_blank"
        rel="noopener"
        ><span class="emphasis">Front End Web Developer</span></a
      >, and
      <a
        href="https://www.udacity.com/certificate/e/3df826a4-348b-11ed-9e2c-2be6d7c13e3f"
        target="_blank"
        rel="noopener"
        ><span class="emphasis">Full Stack Javascript Developer</span></a
      >.
    </div>
    <div v-if="modalContent === 'portfolio'">
      <h2>Project Portfolio</h2>
      Some examples of my work:
      <a href="https://floodeditions.com/" target="_blank" rel="noopener"
        ><span class="emphasis">Fullstack Website Build</span></a
      >,
      <a href="https://betterbanjopractice.com/" target="_blank" rel="noopener"
        ><span class="emphasis">Musician's Practice Optimizer</span></a
      >,
      <a href="https://kdhx-uploader.com" target="_blank" rel="noopener"
        ><span class="emphasis">Selfie Video Upload Manager</span></a
      >,
      <a href="https://babemon-transcriber.com/" target="_blank" rel="noopener"
        ><span class="emphasis">Audio File Transcriber & Monitor</span></a
      >
      and
      <a href="https://sonomyn.com/" target="_blank" rel="noopener"
        ><span class="emphasis">Audio File Minifier</span></a
      >.
    </div>
    <div v-if="modalContent === 'hire'">
      <h2>Hire Me</h2>
      If you'd like to retain my skills for your company or your next project,
      please reach out through the
      <RouterLink to="/contact" class="hover-text"
        ><span class="emphasis underline">contact form</span></RouterLink
      >.
    </div>
  </TheModal>
</template>

<script setup>
import WelcomeItem from './WelcomeItem.vue'
import TheModal from './TheModal.vue'
import { ref } from 'vue'

const isModalVisible = ref(false)
const modalContent = ref('')

const showModal = content => {
  modalContent.value = content
  isModalVisible.value = true
}
</script>

<style scoped>
.hover-text {
  cursor: pointer;
  color: var(--color-primary);
}

.hover-image {
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.emphatic-white {
  color: white;
}

.modal .header-text {
  color: var(--color-primary);
}

.modal a {
  color: var(--color-text);
}

.modal .emphasis {
  color: var(--color-text);
}

.modal a .emphasis {
  color: var(--color-text);
}

.modal a:hover {
  text-decoration: underline;
  color: var(--color-primary);
}

.modal a .emphasis:hover {
  color: var(--color-primary);
}

.modal .underline {
  text-decoration: underline;
}
</style>
