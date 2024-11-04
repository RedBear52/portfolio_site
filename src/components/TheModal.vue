<template>
  <Transition>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">X</button>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  isVisible: Boolean,
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: var(--color-background);
  color: var(--color-text);
  font-size: 1.75rem;
  padding: 0 2rem 2rem 2rem;
  border-radius: 8px;
  position: relative;
  width: 70%;
  border: 1px solid var(--color-primary);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-primary);
}

/* transition CSS */

.v-enter-active,
.v-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
