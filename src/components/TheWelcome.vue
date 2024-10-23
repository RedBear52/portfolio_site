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

    My primary tools are Vue, Angular, and React. I also have experience with
    Node.js, Express, MongoDB, and PostgreSQL. I'm currently learning Python and
    Django.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="pi pi-graduation-cap"></i>
    </template>
    <template #heading>Certifications</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener"
      >Vue Router</a
    >,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener"
      >Vue Test Utils</a
    >, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener"
      >Vue Dev Tools</a
    >. If you need more resources, we suggest paying
    <a
      href="https://github.com/vuejs/awesome-vue"
      target="_blank"
      rel="noopener"
      >Awesome Vue</a
    >
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="pi pi-briefcase"></i>
    </template>
    <template #heading>Project Portfolio</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a
    >, our official Discord server, or
    <a
      href="https://stackoverflow.com/questions/tagged/vue.js"
      target="_blank"
      rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener"
      >our mailing list</a
    >
    and follow the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
      >@vuejs</a
    >
    twitter account for latest news in the Vue world.
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
