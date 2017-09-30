<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="title">Projects</h2>
      <div class="columns is-mobile is-multiline">
        <div class="column is-one-third-desktop is-half-mobile"
        v-for="project in projects">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h5 class="heading">{{ project.name }}</h5>
                <p>{{ project.description }}</p>
              </div>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <a :href="project.github" target="_blank">
                  <span class="icon"><i class="fa fa-github"></i></span>
                </a>
              </p>
              <p class="card-footer-item">
                <a :href="project.live"  target="_blank">
                  <span class="icon"><i class="fa fa-link"></i></span>
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'projects',
  data() {
    return {
      projects: [
        {
          name: 'cityBLOCK',
          description: 'Community funded urban development, powered by blockchain.',
          github: 'https://github.com/block-squad/city-block-client',
          live: 'http://city-block.herokuapp.com/#/',
          image: '',
          alt: ''
        }
      ]
    }
  }
}
</script>
