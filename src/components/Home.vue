<template>
  <section id="home" class="hero is-fullheight">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item" href="/"><img src="../assets/logo-teal.png" alt="maria-logo"></a>
          </div>
          <span class="nav-toggle" :class="{ 'is-active': mobile }" @click="toggleBurger">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu" :class="{ 'is-active': mobile }">
            <a class="nav-item" @click.prevent="jump('#home')" @click="toggleBurger">Home</a>
            <a class="nav-item" @click.prevent="jump('#about', {offset: -50})" @click="toggleBurger">About</a>
            <a class="nav-item" @click.prevent="jump('#projects', {offset: -50})" @click="toggleBurger">Projects</a>
            <a class="nav-item" @click.prevent="jump('#contact')" @click="toggleBurger">Contact</a>
          </div>
        </div>
      </header>
    </div>
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <transition appear appear-active-class="animated fadeInUp">
          <h1 class="title is-1 text-light">
            <span class="maria-name">Maria Mata</span>
          </h1>
        </transition>
        <transition appear appear-active-class="animated fadeInUp">
          <h3 class="subtitle is-4">Software Developer</h3>
        </transition>
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
