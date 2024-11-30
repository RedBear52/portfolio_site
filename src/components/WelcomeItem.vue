<template>
  <div class="item">
    <i @click="handleIconClick" @mouseover="headingColorPrimary" @mouseleave="headingColorSecondary">
      <slot name="icon"></slot>
    </i>

    <div class="details" @click="handleIconClick">
      <h2 :style="{ color: headingColor }">
        <slot name="heading"></slot>
      </h2>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['icon-click'])
const handleIconClick = () => {
  emit('icon-click')
}

const headingColor = ref('var(--color-heading)')
const textDecoration = ref('none')

const headingColorPrimary = () => {
  headingColor.value = 'var(--color-primary)'
  textDecoration.value = 'underline'
}

const headingColorSecondary = () => {
  headingColor.value = 'var(--color-heading)'
  textDecoration.value = 'none'
}
</script>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
  font-size: 1rem;
  line-height: 1.2;
  padding-right: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

h2 {
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
  transition: ease-in-out 1s;
  position: relative;
}

h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background-color: white;
  transition: width ease-in-out 0.2s;
}

/* underline effect adjustments for light mode */
@media (prefers-color-scheme: light) {
  h2::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 1px;
    background-color: var(--color-primary);
    transition: width ease-in-out 0.2s;
  }
}

.item:hover h2::after {
  width: 100%;
}

.item:hover {
  cursor: pointer;
  background-color: rgba(44, 62, 80, 0.2);
  background-color: rgba(67, 221, 255, 0.2);
  transition: ease-out 1s;
}

.item:hover h2 {
  color: var(--color-primary) !important;
  transition: ease-in-out 0.5s;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-primary);
}

i:hover {
  background-color: var(--color-primary);
  color: var(--color-background);
  cursor: pointer;
}

.modal h2 {
  font-size: 2rem;
}

i {
  top: calc(50% - 25px);
  left: -26px;
  position: absolute;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  border-radius: 8px;
  width: 50px;
  height: 50px;
}

.item:before {
  content: ' ';
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  bottom: calc(50% + 25px);
  height: calc(50% - 25px);
}

.item:after {
  content: ' ';
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  top: calc(50% + 25px);
  height: calc(50% - 25px);
}

.item:first-of-type:before {
  display: none;
}

.item:last-of-type:after {
  display: none;
}

@media (min-width: 1201px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }
}

@media (min-width: 298px) and (max-width: 1200px) {
  .item {
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  .item:before {
    display: none;
    border: none;

  }

  .item:after {
    display: none;
    border: none;
  }

  .item i {
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    background: transparent;
  }

}

.details {
  margin-left: 0;
  padding: 0 1rem;
}

@media (max-width: 598px) {
  .item i {
    visibility: hidden;
  }

  .item {
    margin-left: 0;
    padding-left: 0;
    top: 0;
  }
}
</style>
