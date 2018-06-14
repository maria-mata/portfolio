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
$primary: #3e8f91;
$primary-invert: findColorInvert($primary);
$secondary: rgb(245, 183, 121);

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
@import url('https://fonts.googleapis.com/css?family=Arya:700');
@import url('https://fonts.googleapis.com/css?family=Lora:400i');
@import url('https://fonts.googleapis.com/css?family=Hind+Guntur:400,700');

$body-font: 'Hind Guntur', sans-serif;
$family-primary: $body-font;

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

.nav {
  background: rgba($white, 0.8) !important;
  border-bottom: .5px solid darken($light, 5%);
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.card {
  height: 100%;
}

.tile.is-child.notification.is-light {
  padding-right: 1.25rem;
}

#maria {
  margin-bottom: 1em;
  border-radius: .2em;
  width: 100%;

  @media (min-width: 768px) {
    float: left;
    margin-bottom: .5em;
    margin-right: 1em;
    width: 30%;
  }
}

.hero {
  background-image: linear-gradient(
    to bottom,
    rgba($white, 0.3),
    rgba($primary, 1)
  ),
  url(../src/assets/hero-background.jpg);
  background-size: cover;
  background-position: top;
  position: relative;
}

.title {
  &:not(.is-5) {
    font-family: 'Arya', sans-serif;
    text-transform: uppercase;
  }

  &.is-1 {
    font-size: 5rem;

    .maria-name {
      background-image: linear-gradient(to right, lighten($secondary, 25%), $secondary);
      color: transparent;
      -webkit-background-clip: text;
    }
  }
}

.subtitle.is-4 {
  font-family: 'Lora', serif;
  font-size: 2rem;
  color: $light;
}
</style>
