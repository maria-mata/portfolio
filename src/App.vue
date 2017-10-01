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
// Import Bulma's core
@import "~bulma/sass/utilities/_all";
// Set your colors
$primary: #9966FF;
// $primary: #8c67ef;
// $primary: #6666CC;
// $primary: #66CC99;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
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
    "twitter": ($twitter, $twitter-invert)
);

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
  height: 80vh;
  // overflow: scroll;
}
</style>
