<template>
  <div id="app" class="app">
    <gradient></gradient>
    <home></home>
    <navigation></navigation>  
  </div>
</template>

<script>
// global components
import Gradient from 'components/Gradient';
import Navigation from 'components/Navigation';

// view
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
  @import '../scss/_00-style.scss';
</style>
