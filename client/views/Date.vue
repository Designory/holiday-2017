<template>
  <div>
    <p class="txt txt--result-sub-title txt--center">On {{month}} {{date}}, celebrate</p>
    <p class="txt txt--result-title txt--center">{{title}}</p>
    <p class="txt txt--result-desc txt--center">{{description}}</p>


    <div class="options">

      <div class="options__item">
        <div @click="randomize()">RANDOMIZE</div>
      </div>
        
      <div class="options__item">
        <Social></Social>
      </div>

      <div class="options__item">
        <AddToCalendar></AddToCalendar>
      </div>
      
    </div>
  </div>
</template>

<script>
import Social from '../components/Social';
import AddToCalendar from '../components/AddToCalendar';
import { setDate } from '../utils';

export default {
  components: {
    Social,
    AddToCalendar
  },
  computed: {
    month() {
      let month = ['Void', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return month[this.$store.state.params.month];
    },
    date() {
      let date = this.$store.state.params.date;
      // convert to date ordinal
      return date + (date > 0 ? ['th', 'st', 'nd', 'rd'][(date > 3 && date < 21) || date % 10 > 3 ? 0 : date % 10] : '');
    },
    title() {
      return this.$store.state.holiday.title;
    },
    description() {   
      return this.$store.state.holiday.description;
    }
  },
  methods: {
    randomize() {
      let randomMonth = Math.floor(Math.random()*12),
          randomDate = randomMonth !== 2 ? Math.floor(Math.random()*30) : Math.floor(Math.random()*28);

      setDate(randomMonth, randomDate);
    }
  }
}
</script>