<template>
  <div id="app" class="app" :data-view="view" :data-date="tweak">
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
    },
    tweak() { // for tweking purposes only => used as css selector to target exact day => 'tweaks.scss'
      return `m${this.$store.state.params.month}d${this.$store.state.params.date}`;
    }
  }
}
</script>

<style lang="scss">
  @import '../scss/_00-style.scss';
</style>
