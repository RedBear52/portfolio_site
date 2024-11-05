<template>
  <div>
    <h2>Project Portfolio</h2>
    <div class="project-container">
      <div class="project">
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
          book catalog, and a basic link-logic integration to a 3rd party
          shopping cart.
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
      <div class="project">
        <h3>Musicians Practice Optimizer</h3>
        <div class="img-container">
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
      <div class="project">
        <h3>Selfie Video Upload Portal</h3>
        <div class="img-container">
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
    </div>
    <br /><br />
    <a href="https://floodeditions.com/" target="_blank" rel="noopener"
      ><span class="emphasis">Fullstack Website Build</span></a
    >,
    <a href="https://betterbanjopractice.com/" target="_blank" rel="noopener"
      ><span class="emphasis">Musician's Practice Optimizer</span></a
    >,
    <a href="https://kdhx-uploader.com" target="_blank" rel="noopener"
      ><span class="emphasis">Selfie Video Upload Manager</span></a
    >,
    <a href="https://babemon-transcriber.com/" target="_blank" rel="noopener"
      ><span class="emphasis">Audio File Transcriber & Monitor</span></a
    >
    and
    <a href="https://sonomyn.com/" target="_blank" rel="noopener"
      ><span class="emphasis">Audio File Minifier</span></a
    >.
  </div>
</template>

<style scoped>
.img-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

img {
  max-width: 20%;
  max-height: 100%;
}

h3 {
  color: white;
  font-weight: 500;
}

.project {
  display: block;
  border-top: 1px solid var(--color-primary);
  overflow: scroll;
}

.project-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.project-links i {
  font-size: 2rem;
  color: var(--color-primary);
}
</style>
