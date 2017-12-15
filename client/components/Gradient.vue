<template>
  <div class="gradient" :data-bg="bg">
      <div class="gradient__layer gradient__layer--1"></div>
      <div class="gradient__layer gradient__layer--1a"></div>
      <div class="gradient__layer gradient__layer--2"></div>
      <div class="gradient__layer gradient__layer--2a"></div>
      <div class="gradient__layer gradient__layer--3"></div>
      <div class="gradient__layer gradient__layer--3a"></div>
      <div class="gradient__layer gradient__layer--4"></div>
      <div class="gradient__layer gradient__layer--4a"></div>
      <div class="gradient__layer gradient__layer--5"></div>
      <div class="gradient__layer gradient__layer--5a"></div>
      <div class="gradient__layer gradient__layer--6"></div>
      <div class="gradient__layer gradient__layer--6a"></div>
      <div class="gradient__layer gradient__layer--7"></div>
      <div class="gradient__layer gradient__layer--7a"></div>
      <div class="gradient__layer gradient__layer--8"></div>
      <div class="gradient__layer gradient__layer--8a"></div>
      <div class="gradient__layer gradient__layer--9"></div>
      <div class="gradient__layer gradient__layer--9a"></div>
      <div class="gradient__layer gradient__layer--10"></div>
      <div class="gradient__layer gradient__layer--10a"></div>
      <div class="gradient__layer gradient__layer--snowflakes" id="particles-js"></div>
  </div>
</template>

<script>
// import "../scripts/particles";

// initialize particles
// window.particlesJS.load("particles-js", "/static/particlesjs-config.json");

export default {
  computed: {
    bg() {
      return this.$store.state.holiday.bg;
    }
  }
};
</script>
