<template>
  <div id="app" class="app">
    <gradient></gradient>
    <router-view></router-view>
    <Navigation></Navigation>  
  </div>
</template>

<script>
import Gradient from 'components/Gradient';
import Navigation from 'components/Navigation';

export default {
  components: {
    Gradient,
    Navigation
  }
}
</script>

<style>
  @import '../css/_style.scss';
</style>
