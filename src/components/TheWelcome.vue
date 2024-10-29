<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon> <i class="pi pi-book"></i> </template>
    <template #heading><span class="header-text">Introduction</span></template>

    I'm <span class="emphasis">Ryan Spearman</span>, a lifelong
    <a href="https://ryanspearman.net/" target="_blank" rel="noopener"
      >music professional</a
    >
    who, over the last few years, has plunged head-first into the infinitely
    rewarding world of web & software development.
  </WelcomeItem>

  <WelcomeItem>
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
  <WelcomeItem>
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

  <WelcomeItem>
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

  <WelcomeItem>
    <template #icon>
      <i class="pi pi-link"></i>
    </template>
    <template #heading>Hire Me</template>

    If you'd like to retain my skills for your company or your next project,
    please reach out through the
    <RouterLink to="/contact" class="hover-text">contact form</RouterLink>.
  </WelcomeItem>
</template>

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
</style>
