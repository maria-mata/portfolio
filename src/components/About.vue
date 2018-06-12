<template lang="html">
  <section id="about" class="section">
    <div class="container">
      <h2 class="title is-2">About</h2>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child notification is-light">
            <img id="maria" src="../assets/maria-headshot.jpg" alt="maria-headshot"
            class="is-pulled-left" width="260">
            <div class="content">
              <h3 class="title is-5">Hello.</h3>
              <p>I'm Maria, a Software Developer based in Denver who loves to learn, solve problems, and collaborate with talented people. I'm passionate about programming and genuinely enjoy working throughout the stack, from writing routes and queries, to creating compelling user interfaces.</p>
              <p>In a previous life, I was a successful conference manager, which led me to develop clear communication skills, a sharp eye for detail, and the ability to work in teams effectively.</p>
              <p>I'm actively seeking a developer role in a collaborative environment that fosters innovation and growth. Let's talk!</p>
            </div>
            <a class="button is-primary" target="_blank" href="./static/Mata-MariaJose-Resume-SoftwareDeveloper.pdf">Résumé</a>
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
          <!-- <div class="tile is-child notification is-dark">
            <h4 class="title is-4">Learning</h4>
            <div class="tags">
              <span v-for="learn in list.learning" class="tag is-light">{{ learn }}</span>
            </div>
            </div> -->
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
