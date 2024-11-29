<template>
  <div class="container">
    <WelcomeItem @icon-click="showModal('introduction')">
      <template #icon> <i class="pi pi-book"></i> </template>
      <template #heading><span class="header-text">Introduction</span></template>
      <p class="exo-glyph">
        I'm <span class="emphasis">Ryan Spearman</span>, a lifelong
        <span class="emphasis">music professional</span>
        who, over the last few years, has plunged head-first into the infinitely
        rewarding world of web & software development.
      </p>
    </WelcomeItem>

    <WelcomeItem @icon-click="showModal('toolbox')">
      <template #icon>
        <i class="pi pi-wrench" @mouseover="showGlow"></i>
      </template>
      <template #heading>Tool Box</template>

      <p class="exo-glyph">
        My primary tools are <span class="emphasis">Angular</span>,
        <span class="emphasis">Vue</span>,
        <span class="emphasis">Javascript</span>,
        <span class="emphasis">Typescript</span>,
        <span class="emphasis">HTML</span>, <span class="emphasis">CSS</span>,
        <span class="emphasis">Node</span>, <span class="emphasis">Git</span>,
        <span class="emphasis">Express</span> and
        <span class="emphasis">Firebase</span>. I also have experience with
        <span class="emphasis">Sass</span>,
        <span class="emphasis">Tailwind</span>,
        <span class="emphasis">Angular Material</span>,
        <span class="emphasis">ChatGPT API</span>,
        <span class="emphasis">Python</span>,
        <span class="emphasis">Multer</span>,
        <span class="emphasis">Beautiful Soup</span>,
        <span class="emphasis">PHP</span>,
        <span class="emphasis">PostgreSQL</span>,
        <span class="emphasis">AWS</span>,
        <span class="emphasis">CircleCI</span>,
        <span class="emphasis">Sharp</span> and
        <span class="emphasis">Ffmpeg</span>.
      </p>
      <br />
    </WelcomeItem>

    <WelcomeItem @icon-click="showModal('certifications')">
      <template #icon>
        <i class="pi pi-graduation-cap"></i>
      </template>
      <template #heading>Certifications</template>

      <p class="exo-glyph">
        My certifications were issued by
        <span class="emphatic-white">Accenture's Udacity Program</span> and
        include: <span class="emphasis">Intro to Programming</span>,
        <span class="emphasis">Intermediate Javascript</span>,
        <span class="emphasis">Front End Web Developer</span>, and
        <span class="emphasis">Full Stack Javascript Developer</span>.
      </p>
    </WelcomeItem>

    <WelcomeItem @icon-click="showModal('portfolio')">
      <template #icon>
        <i class="pi pi-briefcase"></i>
      </template>
      <template #heading>Project Portfolio</template>

      <p class="exo-glyph">
        Some examples of my work:
        <span class="emphasis">Fullstack Website Build</span>,
        <span class="emphasis">Musician's Practice Optimizer</span>,
        <span class="emphasis">Selfie Video Upload Manager</span>,
        <span class="emphasis">Audio File Transcriber & Monitor</span>
        and
        <span class="emphasis">Audio File Minifier</span>.
      </p>
    </WelcomeItem>

    <WelcomeItem @icon-click="showModal('hire')">
      <template #icon>
        <i class="pi pi-link"></i>
      </template>
      <template #heading>Hire Me</template>

      <p class="exo-glyph">
        If you'd like to retain my skills for your company or your next project,
        please reach out through the
        <RouterLink to="/contact" class="emphasis-blue">contact form</RouterLink>.
      </p>
    </WelcomeItem>
  </div>

  <TheModal class="modal" :isVisible="isModalVisible" @close="isModalVisible = false">
    <div v-if="modalContent === 'introduction'">
      <h2>Introduction</h2>
      <img src="../assets/ryan_head.jpg" alt="" width="200px" /><br />

      <p>
        I'm <span class="emphasis">Ryan Spearman</span>, a lifelong
        <a href="https://ryanspearman.net/" target="_blank" rel="noopener">music professional</a>
        who, over the last few years, has plunged head-first into the infinitely
        rewarding world of web & software development.
      </p>
      <p>
        When I'm not spending my time building websites/apps or learning new
        tech skills, I like to cycle, kayak, train Brazilian Jiu Jitsu and play
        racquet sports.
      </p>
      <p>
        I'm also a volunteer youth wrestling coach at an independent, non-profit
        wrestling club here in Saint Louis, Missouri.
      </p>
    </div>
    <div v-if="modalContent === 'toolbox'">
      <h2>Tool Box</h2>
      <p>
        My primary tools are
        <span class="emphasis">Angular</span>,
        <span class="emphasis">Vue</span>,
        <span class="emphasis">Javascript</span>,
        <span class="emphasis">Typescript</span>,
        <span class="emphasis">CSS</span>, <span class="emphasis">Node</span>,
        <span class="emphasis">Git</span>,
        <span class="emphasis">Express</span>
        and <span class="emphasis">Firebase</span>.
      </p>
      <p>
        I also have experience with
        <span class="emphasis">PrimeVue, Sass, Tailwind, Angular Material, ChatGPT API, Python,
          Multer, Beautiful Soup, PHP, PostgreSQL, AWS, CircleCI, Sharp</span>
        and <span class="emphasis">Ffmpeg</span>.
      </p>
      <br />
      <div class="tech-logo-container">
        <div class="content has-text-centered">
          <div class="tech-logos">
            <div class="tech-logo" v-for="tool in techTools" :key="tool.name">
              <img :src="tool.logo" :alt="tool.name" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="modalContent === 'certifications'">
      <h2>Certifications</h2>
      <p>
        My certifications were issued by
        <span class="emphasis">Accenture's Udacity Program</span>:
      </p>
      <ul>
        <li>
          <span class="emphasis">Intro to Programming</span><a href="https://www.udacity.com/certificate/NEKGL27E"
            target="_blank" rel="noopener"><span class="eye-con"><i v-tooltip.top="'View Certification'"
                class="pi pi-check-square"></i> </span></a>
        </li>
        <li>
          <span class="emphasis">Intermediate Javascript</span><a href="https://confirm.udacity.com/6YPHMFLX"
            target="_blank" rel="noopener"><span class="eye-con"><i v-tooltip.top="'View Certification'"
                class="pi pi-check-square"></i> </span></a>
        </li>
        <li>
          <span class="emphasis">Front End Web Developer</span><a href="https://confirm.udacity.com/ECGAWQ4L"
            target="_blank" rel="noopener"><span class="eye-con"><i v-tooltip.top="'View Certification'"
                class="pi pi-check-square"></i>
            </span></a>
        </li>
        <li>
          <span class="emphasis">Full Stack Javascript Developer</span><a
            href="https://www.udacity.com/certificate/e/3df826a4-348b-11ed-9e2c-2be6d7c13e3f" target="_blank"
            rel="noopener">
            <span class="eye-con"><i v-tooltip.top="'View Certification'" class="pi pi-check-square"></i> </span></a>
        </li>
      </ul>
    </div>
    <div v-if="modalContent === 'portfolio'">
      <MyProjectPortfolio />
    </div>
    <Transition name="fade">
      <router-link to="/contact" class="contact-link">
      <div v-if="modalContent === 'hire'">
      <h2>Hire Me</h2>
      <p>
        If you'd like to retain my skills for your company or your next project,
        just click the <span class="emphasis-blue">Connect</span> tab.
      </p>
      <img src="../assets/screen-shot.jpeg" alt="a screen shot of the homepage with the connect link circled" />
    </div>
    </router-link>
    </Transition>
  </TheModal>
</template>

<script setup>
import WelcomeItem from './WelcomeItem.vue'
import TheModal from './TheModal.vue'
import MyProjectPortfolio from './MyProjectPortfolio.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'

const darkMode = ref(true)

const updateDarkMode = () => {
  darkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
}

onMounted(() => {
  updateDarkMode()
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', updateDarkMode)
})

onUnmounted(() => {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .removeEventListener('change', updateDarkMode)
})

const isModalVisible = ref(false)
const modalContent = ref('')

const showModal = content => {
  modalContent.value = content
  isModalVisible.value = true
}

const techTools = computed(() => [
  { logo: 'src/assets/vue-logo.png' },
  { logo: 'src/assets/angular-logo.png' },
  { logo: 'src/assets/html-logo.png' },
  { logo: 'src/assets/javascript-logo.png' },
  { logo: 'src/assets/css-logo.png' },
  { logo: 'src/assets/typescript-logo.png' },
  { logo: 'src/assets/nodejs-logo.png' },
  {
    logo: darkMode.value
      ? 'src/assets/express-logo-dark.png'
      : 'src/assets/express-logo.png',
  },
  { logo: 'src/assets/firebase-logo.png' },
  { logo: 'src/assets/chatgpt-logo.png' },
  { logo: 'src/assets/git-logo.png' },
  { logo: 'src/assets/tailwind-logo.png' },
  { logo: 'src/assets/sass-logo.png' },
  { logo: 'src/assets/python-logo.png' },
  { logo: 'src/assets/postgresql-logo.png' },
])
</script>

<style scoped>
/* transition CSS */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.contact-link {
  text-decoration: none ;
}

.contact-link:hover {
  text-decoration: none !important;
}

ul {
  list-style-type: none;
}

a {
  color: var(--color-primary);
  text-decoration: underline;
}

p {
  font-size: 0.85em;
  margin: 1rem 0;
  line-height: 1.5;
}

.eye-con {
  margin-left: 0.5rem;
  font-size: 1.5rem;
}

.tech-logo-container {
  padding-bottom: 0;
}

.tech-logo-container img {
  margin-top: 1rem;
  padding-bottom: 0;
  max-width: 2rem;
  max-height: 2rem;
}

.tech-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

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

.modal-content {
  padding: 0;
}

.modal-content p {
  font-size: 1.1rem;
  margin: 1rem 0;
}

.emphatic-white {
  color: white;
}

.modal {
  padding: 2rem;
}

.modal .header-text,
.modal a .emphasis:hover {
  color: var(--color-primary);
}

.modal .header-text {
  margin: 0 0 2rem;
}

.modal a,
.modal .emphasis,
.modal a .emphasis {
  color: var(--color-text);
}

.modal .emphasis-blue {
  color: var(--color-primary);
}

.modal a:hover {
  text-decoration: underline;
}

.modal .underline {
  text-decoration: underline;
}

.modal h2 {
  font-size: 2rem;
  margin: 1rem 0;
}

.modal img {
  /* change image propery contain, cover */
  max-width: 100%;
}



@media (prefers-color-scheme: light) {

  .emphasis,
  .emphasis-blue {
    color: black;
    font-weight: 600;
  }

  .emphatic-white {
    color: black;
    font-weight: 600;
  }

  a .pi {
    color: var(--color-blue-light-mode);
  }

  .modal .pi-check-square {
  color: var(--color-blue-light-mode);
}
}

@media (prefers-color-scheme: dark) {

  .emphasis,
  .emphasis-blue {
    color: var(--color-primary);
    font-weight: 600;
  }

  .emphatic-white {
    color: white;
    font-weight: 600;
  }

  a .pi {
    color: var(--color-blue-dark-mode);
  }

  .modal .pi-check-square {
  color: var(--color-primary);
}
}

</style>
