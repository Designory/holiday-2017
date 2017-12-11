<template>
  <div>
    <p class="txt txt--center">Month: {{month}}</p>
    <p class="txt txt--center">Date: {{date}}</p>
    <p class="txt txt--center">Description</p>
    
  </div>
</template>

<script>

// import data from './holidays.json';

// console.log(JSON.parse(data));

export default {
  computed: {
    month() {
      return this.$store.state.params.month;
    },
    date() {
      return this.$store.state.params.date;
    }
  }
}
</script>