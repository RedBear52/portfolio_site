<template>
  <div class="item">
    <i
      @click="handleIconClick"
      @mouseover="headingColorPrimary"
      @mouseleave="headingColorSecondary"
    >
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h2
        :style="{
          color: headingColor,
          textDecoration: textDecoration,
          textDecorationColor,
        }"
      >
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
const textDecorationColor = ref('var(--color-primary)')

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
}

h2 {
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.modal h2 {
  font-size: 2rem;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
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
}
</style>
