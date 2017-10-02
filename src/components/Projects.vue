<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="title is-2">Projects</h2>
      <div class="columns is-multiline">
        <div class="column is-one-third-desktop" v-for="project in projects">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="project.image" :alt="project.alt">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <nav class="level is-mobile">
                  <div class="level-left">
                    <div class="level-item">
                      <h3 class="title">{{ project.name }}</h3>
                    </div>
                  </div>
                  <div class="level-right">
                    <div class="level-item">
                      <a :href="project.github" target="_blank">
                        <span class="icon"><i class="fa fa-github"></i></span>
                      </a>
                    </div>
                    <div class="level-item">
                      <a :href="project.live"  target="_blank">
                        <span class="icon"><i class="fa fa-link"></i></span>
                      </a>
                    </div>
                  </div>
                </nav>
                <p>{{ project.description }}</p>
                <div class="tags">
                  <span class="tag is-light" v-for="tech in project.tech">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projectsList from '../data/projects-list'

export default {
  name: 'projects',
  data() {
    return {
      projects: projectsList
    }
  }
}
</script>
