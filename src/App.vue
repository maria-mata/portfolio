<template>
  <div id="app">
    <home></home>
    <about></about>
    <projects></projects>
    <contact></contact>
  </div>
</template>

<script>
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


export default {
  name: 'app',
  components: {
    Home,
    About,
    Projects,
    Contact
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

// Colors
$primary: #9966FF;
// $primary: #8c67ef;
// $primary: #66CC99;
$primary-invert: findColorInvert($primary);

$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
);

// Fonts
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400');
$family-serif: 'Fira Sans', sans-serif;
$family-primary: $family-serif;

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

.nav {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: $primary !important;
}

.card {
  height: 82vh;
  overflow: scroll;
}

.content.is-medium {
  font-weight: 300;
  text-align: justify;
}

#maria {
  margin-right: 1em;
  border-radius: .2em;
}
</style>
