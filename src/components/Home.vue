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
            <a href="#home" class="nav-item" @click="toggleBurger">Home</a>
            <a href="#about" class="nav-item" @click="toggleBurger">About</a>
            <a href="#projects" class="nav-item" @click="toggleBurger">Projects</a>
            <a href="#contact" class="nav-item" @click="toggleBurger">Contact</a>
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
export default {
  name: 'home',
  data() {
    return {
      mobile: false
    }
  },
  methods: {
    toggleBurger() {
      this.mobile = !this.mobile
    }
  }
}
</script>
