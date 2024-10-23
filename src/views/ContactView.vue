<template>
  <!-- contact form -->
  <div class="contact-form">
    <h1>Let's Talk</h1>
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script setup></script>

<style scoped>
.contact-form {
  margin: 0 auto;
  max-width: 500px;
  padding: 2rem;
}

h1 {
  font-size: 2.6rem;
  margin-bottom: 1rem;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

button:hover {
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button {
  background-color: var(--color-primary-dark);
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  border-radius: 8px;
  padding: 0.5rem 1rem;
}
</style>
