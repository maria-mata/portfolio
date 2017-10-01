<template lang="html">
  <section id="about" class="section">
    <div class="container">
      <h2 class="title">About</h2>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child notification is-light">
            <figure id="maria" class="image">
              <img src="../assets/headshot.jpg" alt="maria-headshot">
            </figure>
            <p class="title">Hello.</p>
            <p>I love to learn, solve problems, and work alongside smart people, which led me to develop a passion for coding and creating software for the web. When the stars finally aligned, I decided to pursue my dream of working in tech by enrolling in the Galvanize Web Development Immersive and I absolutely love it!</p>
            <br>
            <p>Prior to becoming a Web Developer, I worked as a conference and events manager at the University of Denver for 9 years. During that time, I managed over 900 events of up to 1,000 attendees. It was a wonderful experience that taught me how to work with people of diverse backgrounds and lead teams under pressure.</p>
            <br>
            <a class="button is-primary">Resume</a>
          </div>
        </div>
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child notification is-primary">
            <p class="title">Skills</p>
            <div class="tags">
              <span v-for="skill in list.skills" class="tag is-light">{{ skill }}</span>
            </div>
          </div>
          <div class="tile is-child notification is-dark">
            <p class="title">Learning</p>
            <div class="tags">
              <span v-for="learn in list.learning" class="tag is-light">{{ learn }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import list from '../data/skills'

export default {
  name: 'about',
  data() {
    return {
      list: list
    }
  }
}
</script>
