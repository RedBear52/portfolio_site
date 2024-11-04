<template>
  <div>
    <div class="contact-form">
      <h1>Let's Talk</h1>
      <form @submit.prevent="sendEmail" ref="contact-form">
        <input type="text" placeholder="Name" v-model="name" name="from_name" />
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          name="reply_to"
        />
        <textarea
          placeholder="Message"
          v-model="message"
          name="message"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'
import { useToast } from 'vue-toastification'

const toast = useToast()

const name = ref('')
const email = ref('')
const message = ref('')

const VITE_SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const VITE_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const VITE_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

const sendEmail = async e => {
  e.preventDefault()
  try {
    await emailjs.sendForm(
      VITE_SERVICE_ID,
      VITE_TEMPLATE_ID,
      e.target,
      VITE_PUBLIC_KEY,
      {
        name: name.value,
        email: email.value,
        message: message.value,
      },
    )
    console.log(name.value, email.value, message.value)
    toast.success('Message sent successfully!')
    e.target.reset()
  } catch (error) {
    console.log({ error })
    toast.error('An error occurred. Please try again later.')
  }
}
</script>

<style scoped>
.contact-form {
  margin: 0 auto;
  max-width: 500px;
  padding: 2rem;
  text-align: center;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
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
