<template>
  <div id="app" class="App">
    <gradient></gradient>
    <router-view></router-view>
  </div>
</template>

<script>
import Gradient from 'components/Gradient'

export default {
  components: {
    Gradient
  }
}
</script>

<style>
  @import '../css/_style.css';
</style>
