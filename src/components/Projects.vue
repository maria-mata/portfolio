<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="title">Projects</h2>
      <div class="columns is-mobile is-multiline">
        <div class="column is-one-third-desktop" v-for="project in projects">
          <div class="card">
            <div class="card-image">
              <figure>
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
import cityBLOCK from '../assets/city-block.png'
import dreamCatcher from '../assets/dream-catcher.png'
import fridgeToTable from '../assets/fridge-to-table.png'

export default {
  name: 'projects',
  data() {
    return {
      projects: [
        {
          name: 'cityBLOCK',
          description: 'Community funded urban development, powered by blockchain.',
          tech: ['Vue', 'Bulma', 'Ethereum', 'Solidity', 'Truffle', 'Web3',
          'Node', 'Express', 'Knex', 'PostgreSQL', 'Heroku'],
          github: 'https://github.com/block-squad/city-block-client',
          live: 'http://city-block.herokuapp.com/#/',
          image: cityBLOCK,
          alt: 'city-block'
        },
        {
          name: 'Dream Catcher',
          description: 'A journal for your dreams.',
          tech: ['jQuery', 'Handlebars', 'Bootstrap', 'Node',
          'Express', 'Knex', 'PostgreSQL', 'Heroku'],
          github: 'https://github.com/maria-mata/dream-catcher',
          live: 'http://city-block.herokuapp.com/#/',
          image: dreamCatcher,
          alt: 'dream-catcher'
        },
        {
          name: 'Fridge to Table',
          description: 'Search, browse, and save recipes based on ingredients you have on hand.',
          tech: ['jQuery', 'Materialize','Firebase', 'Edamam API'],
          github: 'https://github.com/maria-mata/dream-catcher',
          live: 'http://city-block.herokuapp.com/#/',
          image: fridgeToTable,
          alt: 'fridge-to-table'
        }
      ]
    }
  }
}
</script>
