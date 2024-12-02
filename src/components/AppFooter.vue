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
  { logo: 'src/assets/express-logo.png' },
  { logo: 'src/assets/firebase-logo.png' },
  { logo: 'src/assets/chatgpt-logo.png' },
  { logo: 'src/assets/git-logo.png' },
  { logo: 'src/assets/tailwind-logo.png' },
  { logo: 'src/assets/sass-logo.png' },
  { logo: 'src/assets/python-logo.png' },
  { logo: 'src/assets/postgresql-logo.png' },
]
</script>

<style scoped>
.footer {
  background-color: var(--color-background);
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  text-align: center;
  color: var(--color-primary);
  z-index: -1;
}

.footer img {
  max-width: 2.25;
  max-height: 2.25rem;
}

.tech-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

@media (min-width: 598px) and (max-width: 1023px) {
  .footer {
    position: relative;
    margin-top: 1rem;
  }

  .footer img {
    max-width: 2rem;
    max-height: 2rem;
  }

  .tech-logos {
    flex-wrap: wrap;
  }
}

@media (max-width: 597px) {
  .footer {
    position: relative;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  .footer img {
    max-width: 2rem;
    max-height: 2rem;
  }

  .tech-logos {
    flex-wrap: wrap;
  }
}
</style>
