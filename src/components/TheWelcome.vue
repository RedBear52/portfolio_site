<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <i class="pi pi-book"></i>
    </template>
    <template #heading>Introduction</template>

    Howdy! I'm Ryan Spearman, a lifelong
    <a href="https://ryanspearman.net/" target="_blank" rel="noopener"
      >music professional</a
    >
    who, over the last few years, has plunged head-first into the infinitely
    rewarding world of web & software development.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="pi pi-wrench"></i>
    </template>
    <template #heading>Tool Box</template>

    My primary tools are
    <span class="emphasis"
      >Angular, Vue, vanilla JS, Typescript, HTML, CSS, Node.js, Git, Express,
      Multer</span
    >
    and <span class="emphasis">Firebase</span>. I also have experience with
    <span class="emphasis"
      >ChatGPT API, Python, Beautiful Soup, PHP, PostgreSQL, AWS, CircleCI,
      Sharp.js</span
    >
    and <span class="emphasis">Ffmpeg</span>.
    <br />
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="pi pi-graduation-cap"></i>
    </template>
    <template #heading>Certifications</template>

    My certifications include:
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

    My projects include:
    <a href="https://floodeditions.com/" target="_blank" rel="noopener"
      >Fullstack Website Build</a
    >,
    <a href="https://betterbanjopractice.com/" target="_blank" rel="noopener"
      >Musician's Practice Optimizer</a
    >,
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="pi pi-link"></i>
    </template>
    <template #heading>Connect</template>

    As an independent project, Vue relies on community backing for its
    sustainability. You can help us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener"
      >becoming a sponsor</a
    >.
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
</style>
