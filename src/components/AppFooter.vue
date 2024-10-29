<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <div class="tech-logos">
        <div class="tech-logo" v-for="tool in techTools" :key="tool.name">
          <img :src="tool.logo" :alt="tool.name" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const techTools = [
  { logo: 'src/assets/vue-logo.png' },
  { logo: 'src/assets/angular-logo.png' },
  { logo: 'src/assets/html-logo.png' },
  { logo: 'src/assets/javascript-logo.png' },
  { logo: 'src/assets/css-logo.png' },
  { logo: 'src/assets/typescript-logo.png' },
  { logo: 'src/assets/nodejs-logo.png' },
  { logo: 'src/assets/firebase-logo.png' },
  { logo: 'src/assets/chatgpt-logo.png' },
  { logo: 'src/assets/git-logo.png' },
  { logo: 'src/assets/tailwind-logo.png' },
  { logo: 'src/assets/sass-logo.png' },
  { logo: 'src/assets/python-logo.png' },
  { logo: 'src/assets/postgresql-logo.png' },
  { logo: 'src/assets/express-logo.png' },
]
</script>

<style scoped>
.footer {
  background-color: var(--color-background);
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: var(--color-primary);
  margin: 0;
}

.tech-logos {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.footer img {
  max-width: 40px;
  max-height: 40px;
}

@media (min-width: 598px) and (max-width: 1023px) {
  .tech-logos {
    /* flex-wrap: wrap; */
  }
}

@media (max-width: 597px) {
  .tech-logos {
    flex-wrap: wrap;
  }

  .footer img {
    max-width: 30px;
    max-height: 30px;
  }
}
</style>
