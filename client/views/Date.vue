<template>
  <div>
    <p class="txt txt--result-sub-title txt--center">On {{month}} {{date}}, celebrate</p>
    <p class="txt txt--result-title txt--center">{{title}}</p>
    <p class="txt txt--result-desc txt--center">{{description}}</p>


    <div class="options">

      <div class="options__item">
        <img @click="showWidget(0)" class="options__icon" src="/static/calendar.png" alt="icon">
        <div class="options__widget options__widget--0">
          <AddToCalendar></AddToCalendar>
        </div>
      </div>
        
      <div class="options__item">
        <img @click="showWidget(1)" class="options__icon" src="/static/share.png" alt="icon">
        <div class="options__widget options__widget--1">
          <Social></Social>
        </div>
      </div>

      <div class="options__item">
        <img @click="randomize()" class="options__icon" src="/static/dice.png" alt="icon">
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
    },
    showWidget(index) {
      this.closeWidgets();
      document.querySelector(`.options__widget--${index}`).classList.add('options__widget--open');
    },
    closeWidgets() {
      [...document.querySelectorAll('.options__widget')].forEach(elm => {
        elm.classList.remove('options__widget--open');
      })
    }
  }
}
</script>