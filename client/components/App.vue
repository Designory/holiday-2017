<template>
  <div id="app" class="app" :data-view="view">
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
  },
  computed: {
    view() {
      return this.$store.state.route.query.view;
    }
  }
}
</script>

<style lang="scss">
  @import '../scss/_00-style.scss';
</style>
