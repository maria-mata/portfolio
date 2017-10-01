<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="title">Projects</h2>
      <div class="columns is-mobile is-multiline">
        <div class="column is-one-third-desktop is-half-mobile" v-for="project in projects">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <nav class="level is-mobile">
                  <div class="level-left">
                    <h4 class="subtitle level-item">{{ project.name }}</h4>
                    <a :href="project.github" target="_blank" class="level-item">
                      <span class="icon"><i class="fa fa-github"></i></span>
                    </a>
                    <a :href="project.live"  target="_blank" class="level-item">
                      <span class="icon"><i class="fa fa-link"></i></span>
                    </a>
                  </div>
                </nav>
                <p>{{ project.description }}</p>
              </div>
            </div>
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
