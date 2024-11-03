<template>
  <div>
    <header>
      <div
        class="logo-container"
        @mouseover="showImage = true"
        @mouseleave="showImage = false"
      >
        <img
          alt="coder logo"
          class="logo"
          src="@/assets/glowing_tarot_coder.webp"
          width="225px"
        />
        <Transition>
          <img
            v-if="showImage"
            class="logo-hovered"
            src="./assets/ryan_head.jpg"
            alt="photo image of ryan spearman"
          />
        </Transition>
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
  <AppFooter />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import AppFooter from './components/AppFooter.vue'
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
  transition: opacity 0.5s ease-in;
}

.logo-container:hover .logo {
  opacity: 0;
  transition: opacity 0.3s ease-in;
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
}

.logo-hovered {
  opacity: 0.9;
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
  transform: translateY(5px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(5px);
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
    font-size: 1.25rem;

    padding: 1rem 0;
    margin-top: 0;
  }
}

@media (min-width: 598px) and (max-width: 1023px) {
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
  }
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

  nav {
    margin-top: none;
    font-size: 1.25rem;
  }
}
</style>
