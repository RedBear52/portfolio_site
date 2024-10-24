<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

const showImage = ref(false)
</script>

<template>
  <header>
    <div
      class="logo-container"
      @mouseover="showImage = true"
      @mouseleave="showImage = false"
    >
      <img
        alt="coder logo"
        class="logo"
        src="@/assets/tarot_coder.png"
        width="225px"
      />
      <img
        v-show="showImage"
        class="logo-hovered"
        src="./assets/ryan_head.jpg"
        alt="photo image of ryan spearman"
      />
    </div>

    <div class="wrapper">
      <HelloWorld msg="Ryan Spearman" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo-container {
  position: relative;
  width: 225px;
  height: 410px;
  margin-right: 2rem;
}

.logo {
  display: block;
}

.logo-hovered {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  z-index: 1;
}

.logo-container:hover .logo-hovered {
  opacity: 1;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

@media (min-width: 598px) and (max-width: 1023px) {
  .logo-container {
    display: flex;
    align-items: center;
    margin: auto;
  }

  /* .logo {
    border-bottom: 2px solid var(--color-primary);
  } */
}

@media (max-width: 597px) {
  .logo-container {
    display: flex;
    align-items: center;
    margin: auto;
  }

  .logo {
    border-bottom: 2px solid var(--color-primary);
  }
}
</style>
