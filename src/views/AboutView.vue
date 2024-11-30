<template>
  <div>
    <div class="about-container">
      <h1>Howdy!</h1>
      <br />
      <p>A few years ago, I started coding.</p>
      <br />
      <p>
        Before code, I worked 25 years as an independent music
        professional-recording, performing, teaching, producing, writing and
        radio.
      </p>
      <br />
      <p>I learned to listen, connect and communicate.</p>
      <br />
      <p>
        More so, I learned that dogged persistence is the magical key that turns
        mere ideas into living/breathing things.
      </p>

      <br />
      <p>I love to learn-thru-play and build tools that feel good to use.</p>
    </div>
  </div>
</template>

<style>
.about-container {
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.5rem;
  text-align: center;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
}

h1 {
  font-size: 2.6rem;
}

@media (min-width: 397px) {
  .about-container {
    font-size: 1rem;
    line-height: 1.5;
  }
}

@media (min-width: 298px) and (max-width: 1200px) {
  .about-container {
    transform: translateY(-2%);
  }
}
</style>
