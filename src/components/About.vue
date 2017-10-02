<template lang="html">
  <section id="about" class="section">
    <div class="container">
      <h2 class="title is-2">About</h2>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child notification is-light">
            <div class="content is-medium has-text-weight-light has-text-justified">
              <img id="maria" src="../assets/headshot.jpg" alt="maria-headshot"
              class="is-pulled-left "width="260">
              <h3 class="title">Hello.</h3>
              <p>I'm María José Mata, a JavaScript Developer based in Denver, CO. In a previous life, I was a successful conference and events manager at a university, where I kept track of countless moving pieces and managed an average of 100 events yearly.</p>
              <p>I enjoy creative challenges and work that requires constant learning, which ultimately inspired me to change careers and learn to code through the Galvanize Web Development Immersive.</p>
              <p>I'm actively seeking a developer role in a collaborative environment that fosters innovation and growth. Let's talk!</p>
            </div>
            <a class="button is-primary">Résumé</a>
            <a class="button is-primary" @click.prevent="jump('#contact')">Contact</a>
          </div>
        </div>
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child notification is-primary">
            <h4 class="title is-4">Skills</h4>
            <div class="tags">
              <span v-for="skill in list.skills" class="tag is-light">{{ skill }}</span>
            </div>
          </div>
          <div class="tile is-child notification is-dark">
            <h4 class="title is-4">Learning</h4>
            <div class="tags">
              <span v-for="learn in list.learning" class="tag is-light">{{ learn }}</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import list from '../data/skills'
import jump from 'jump.js'

export default {
  name: 'about',
  data() {
    return {
      list: list,
      jump: jump
    }
  }
}
</script>
