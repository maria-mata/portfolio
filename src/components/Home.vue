<template>
  <section id="home" class="hero is-primary is-fullheight">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item" href="/"><img src="../assets/maria-logo-white.png" alt="maria-logo-white"></a>
          </div>
          <span class="nav-toggle" :class="{ 'is-active': mobile }" @click="toggleBurger">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu" :class="{ 'is-active': mobile }">
            <a class="nav-item" @click.prevent="jump('#home')" @click="toggleBurger">Home</a>
            <a class="nav-item" @click.prevent="jump('#about')" @click="toggleBurger">About</a>
            <a class="nav-item" @click.prevent="jump('#projects')" @click="toggleBurger">Projects</a>
            <a class="nav-item" @click.prevent="jump('#contact')" @click="toggleBurger">Contact</a>
          </div>
        </div>
      </header>
    </div>
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Maria Jose Mata</h1>
        <h2 class="subtitle">JavaScript Developer</h2>
      </div>
    </div>
  </section>
</template>

<script>
import jump from 'jump.js'

export default {
  name: 'home',
  data() {
    return {
      mobile: false,
      jump: jump
    }
  },
  methods: {
    toggleBurger() {
      this.mobile = !this.mobile
    }
  }
}
</script>
