<template>
  <div id="app" class="app">
    <gradient></gradient>
    <home></home>
    <navigation></navigation>  
  </div>
</template>

<script>
import Gradient from 'components/Gradient';
import Navigation from 'components/Navigation';

import Home from 'views/Home';

export default {
  components: {
    Gradient,
    Navigation,
    Home
  }
}
</script>

<style lang="scss">
  @import '../css/_style.scss';
</style>
