<template>
  <div class="container">
    <div class="greetings">
      <h1 class="green">{{ msg }}</h1>
      <div class="icon-container">
        <a v-tooltip.top="'github'" href="https://github.com/RedBear52?tab=repositories" target="_blank"
          rel="noopener"><i class="pi pi-github"></i></a>
        <br />
        <a v-tooltip.top="'website'" href="https://ryanspearman.net/" target="_blank" rel="noopener"><i
            class="pi pi-globe"></i></a>
      </div>
      <p class="tag-line">
        An autodidactic web/software developer using tech to tackle challenges.
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h2 {
  font-size: 2.2rem;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.icon-container {
  display: flex;
  flex-direction: row;
}

.tag-line {
  font-size: 1.2rem;
  margin-top: 1.3rem;
  margin-bottom: 1rem;
}


@media (min-width: 1201px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }

  .tag-line {
    text-align: left;
  }
}

@media (min-width: 598px) and (max-width: 1200px) {
  .icon-container {
    justify-content: center;
    font-size: 1.25rem;
  }

  .tag-line {
    text-align: center;
  }
}

@media (max-width: 597px) {
  .icon-container {
    justify-content: center;
    font-size: 1.2.5rem;
  }

  .tag-line {
    text-align: center;
  }
}
</style>
