<template>
  <div>
    <p class="txt">On {{month}}/{{date}}, I'll be celebrating</p>
    <p class="txt txt--center">{{title}}</p>
    <p class="txt txt--center">{{description}}</p>
    
  </div>
</template>

<script>
export default {
  computed: {
    month() {
      return this.$store.state.params.month;
    },
    date() {
      return this.$store.state.params.date;
    },
    title() {
      // store.state.holiday = findHoliday(this.$store.state.params.month, this.$store.state.params.date)
      return this.$store.state.holiday.title;
    },
    description() {   
      return this.$store.state.holiday.description;
    }
  }
}
</script>