<template>
  <div class="page">
     <div class="screen">

       <!-- welcome screen  -->
       <div class="screen__content screen__content--0" @click="$store.dispatch('nextView')">
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
  }
};
</script>
