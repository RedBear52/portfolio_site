<template>
  <div>
    <h2>Project Portfolio</h2>
    <div class="project-container">
      <div class="project" id="flood-editions">
        <h3>Full Website Rebuild</h3>
        <div class="img-container">
          <img
            src="../assets/flood_library.jpeg"
            alt="homepage of a publisher's website"
          />
          <img
            src="../assets/flood_dashboard.jpeg"
            alt="dashboard of a publisher's website"
          />
          <img
            src="../assets/flood_nav.jpeg"
            alt="live navigation of a publisher's website"
          />
        </div>
        <p>
          A fullstack website build for a small, independent poetry press. The
          site features a minimalist design, a custom CMS dashboard, a dynamic
          book catalog, a direct sdk integration with a Firebase Firestore
          database and a basic link-logic integration to a 3rd party shopping
          cart.
        </p>
        <div class="project-links">
          <a
            href="https://github.com/RedBear52/flood_editions_back_up_copy_2024_06_09.git"
            target="_blank"
            rel="noopener"
            ><i class="pi pi-github"></i
          ></a>
          <a href="https://floodeditions.com/" target="_blank" rel="noopener"
            ><i class="pi pi-globe"></i
          ></a>
        </div>
      </div>
      <div class="project" id="better-banjo">
        <h3>Musicians Practice Optimizer</h3>
        <div class="img-container" id="optimizer">
          <img
            src="../assets/banjo_regimen.jpeg"
            alt="homepage of a publisher's website"
          />
          <img
            src="../assets/banjo_goals.jpeg"
            alt="dashboard of a publisher's website"
          />
          <img
            src="../assets/banjo_timer.jpeg"
            alt="live navigation of a publisher's website"
          />
        </div>
        <p>
          A web application that helps musicians optimize their practice time.
          Features include a practice timer, a practice regiment builder,
          musical goal setting interface, note-taking and the ability to mark
          practice tasks as complete.
        </p>
        <p>
          Includes log in and registration, user profile management, and a
          database to store practice data.
        </p>
        <div class="project-links">
          <a
            href="https://github.com/RedBear52/banjoPracticeOptimizer"
            target="_blank"
            rel="noopener"
            ><i class="pi pi-github"></i
          ></a>
          <a
            href="https://betterbanjopractice.com/"
            target="_blank"
            rel="noopener"
            ><i class="pi pi-globe"></i
          ></a>
        </div>
      </div>
      <div class="project" id="khdx-uploader">
        <h3>Selfie Video Upload Portal</h3>
        <div class="img-container">
          <img
            src="../assets/kdhx_dashboard.jpeg"
            alt="homepage of a publisher's website"
          />
          <img
            src="../assets/kdhx_uploader_interface.jpeg"
            alt="dashboard of a publisher's website"
          />
          <img
            src="../assets/kdhx_login.jpeg"
            alt="live navigation of a publisher's website"
          />
        </div>
        <p>
          A no-frills web application purpose-built during a fund drive for my
          local community radio station. The KDHX Uploader allows volunteer DJs
          to record a testimonial video on their phone and easily upload it to a
          bespoke Firebase Firestore database. Administrators can then log into
          a custom dashboard to download the videos and use them in their online
          promotional endeavors.
        </p>

        <p>
          Dashboard features include a pop up video preview player, downloader,
          and a delete button.
        </p>

        <div class="project-links">
          <a
            href="https://github.com/RedBear52/kdhx_video_uploader.git"
            target="_blank"
            rel="noopener"
            ><i class="pi pi-github"></i
          ></a>
          <a href="https://kdhx-uploader.com" target="_blank" rel="noopener"
            ><i class="pi pi-globe"></i
          ></a>
        </div>
      </div>
      <div class="project" id="babemon-transcriber">
        <h3>Audio File Monitor and Transcriber</h3>
        <div class="img-container">
          <img
            id="optimizer"
            src="../assets/babemon_homepage.jpeg"
            alt="homepage of a transcriber web app"
          />
          <img
            id="optimizer"
            src="../assets/babemon_transcription.jpeg"
            alt="short transcription example with keywords highlighted"
          />
          <img
            id="optimizer"
            src="../assets/babemon_results.jpeg"
            alt="screen shot of transcription results"
          />
        </div>
        <p>
          A web application built for community radio stations to monitor FCC
          and other spoken, on-air policy violations.
        </p>

        <p>
          Babemon Transcriber allows users to upload an audio file. The app then
          transcribes the audio to text and monitors the text for specific
          flagged keywords. The user can then download the transcription and
          flagged keywords as an HTML file.
        </p>
        <p>
          The front end is built with Angular and the back end is built with
          Node, Express and the Open AI API.
        </p>
        <div class="project-links">
          <a
            v-tooltip.top="'Babemon Front End'"
            href="https://github.com/RedBear52/Babemon_front_end.git"
            target="_blank"
            rel="noopener"
            ><i class="pi pi-github"></i
          ></a>
          <a
            href="https://babemon-transcriber.com/"
            target="_blank"
            rel="noopener"
            ><i class="pi pi-globe"></i
          ></a>
          <a
            v-tooltip.top="'Babemon API'"
            href="https://github.com/RedBear52/babemon-api.git"
            target="_blank"
            rel="noopener"
            ><i class="pi pi-github"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0 0 0;
}

img {
  max-width: 20%;
  max-height: 100%;
}

h3 {
  color: white;
  font-weight: 500;
  margin-top: 1rem;
  margin-left: 1rem;
}

p {
  font-size: 1.1rem;
}

#optimizer {
  margin-bottom: 1rem;
}

.project {
  display: block;
  border-top: 1px solid var(--color-primary);
  overflow: scroll;
}

.modal h2 {
  font-size: 2rem;
  margin: 1rem 0;
}

.project p {
  margin-left: 1rem;
}

.project-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0 1rem 0;
}

.project-links i {
  font-size: 2rem;
  color: var(--color-primary);
}

#flood-editions {
  background-color: rgba(240, 110, 128, 0.1);
}

#better-banjo {
  background-color: rgba(229, 194, 132, 0.1);
}

#khdx-uploader {
  background-color: rgba(252, 10, 2, 0.1);
}

#babemon-transcriber {
  background-color: rgba(253, 254, 31, 0.1);
}

p {
  margin-bottom: 1rem;
}
</style>
