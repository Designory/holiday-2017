<template>
  <div class="page" :data-view="view">
     <div class="screen">

       <!-- welcome screen  -->
       <div class="screen__content screen__content--0">
        <Welcome></Welcome>
       </div>
       
       <!-- calendar screen -->
       <div class="screen__content screen__content--1">
        <Calendar></Calendar>
       </div>

       <!-- date screen -->
       <div class="screen__content screen__content--2">
        <Date></Date>
       </div>
       
     </div>
  </div>
</template>

<script>
import Welcome from "views/Welcome";
import Calendar from "views/Calendar";
import Date from "views/Date";

export default {
  components: {
    Welcome,
    Calendar,
    Date
  },
  computed: {
    view() {
      return this.$store.state.route.query.view;
    }
  }
};
</script>
