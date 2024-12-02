<template>
  <div class="container">
    <header>
      <div class="logo-container" @mouseover="showImage = true" @mouseleave="showImage = false">
        <img alt="coder logo" class="logo" src="@/assets/glowing_tarot_coder.webp" width="225px" />
        <transition name="ryan">
          <img v-if="showImage" class="logo-hovered" src="./assets/ryan_head.jpg" alt="photo image of ryan spearman" />
        </transition>
      </div>

      <div class="wrapper">
        <HelloWorld msg="Ryan Spearman" />

        <nav>
          <RouterLink to="/" class="router-link">Home</RouterLink>
          <RouterLink to="/about" class="router-link">About</RouterLink>
          <RouterLink to="/contact" class="router-link">Connect</RouterLink>
        </nav>
      </div>
    </header>
  </div>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
  <!-- <AppFooter /> -->
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const showImage = ref(false)
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.footer {
  margin-top: 3rem;
}

.logo-container {
  position: relative;
  width: 225px;
  height: 410px;
  margin-right: 2rem;
}

.logo {
  display: block;
  border-radius: 8px;
  opacity: 1;
}

.logo-hovered {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: ease 0.3s;
}

.logo-container:hover .logo-hovered {
  opacity: 0.9;
  visibility: visible;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 0;
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

.router-link {
  font-size: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.1s ease;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.ryan-enter-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.ryan-enter-from {
  opacity: 0;
  transform: translateX(-10%);
}

.ryan-leave-to {
  opacity: 0;
  transform: translateX(10%);
}

@media (min-width: 1201px) {
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
    font-size: 1.25rem;

    padding: 1rem 0;
    margin-top: 0;
  }
}

@media (max-width: 1250px) {
  nav .router-link {
    font-size: 0.85rem;
  }
}

/* TODO:: CHANGE MAX-WIDTH TO 1023 AFTER TESTING IS DONE */
@media (min-width: 298px) and (max-width: 1200px) {
  /* .container {
    background-color: red;
    width: 100vw;
  } */

  .logo-container {
    display: flex;
    align-items: center;
    margin: auto;
  }

  .footer {
    position: relative;
  }

  .footer img {
    max-width: 20px;
    max-height: 20px;
  }

  nav {
    font-size: 1.25rem;
    margin-top: none;
    margin-bottom: 1rem;

  }
}

/* @media (max-width: 597px) {
  .logo-container {
    display: flex;
    align-items: center;
    margin: auto;
  } 


  nav {
    margin-top: none;
    font-size: 1.25rem;
  }
 }  */

/* light theme link tweak */
@media (prefers-color-scheme: light) {
  nav a.router-link-exact-active {
    color: var(--color-clicked-link);
  }
}
</style>
