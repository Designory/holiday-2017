<template>
  <div>

    <div class="date" :style="`height: ${height}px`">
      <p class="date__sub-title txt">On {{month}} {{date}}, celebrate</p>
      <p class="date__title txt">{{title}}</p>
      <p class="date__desc txt">{{description}}</p>
    </div>


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
import Social from '../components/Social'
import AddToCalendar from '../components/AddToCalendar'
import { setDate } from '../scripts/utils'

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
      this.trickyFadeIn();
      return this.$store.state.holiday.title;
    },
    description() {   
      return this.$store.state.holiday.description;
    },
    height() {
      // you mioght think why? ¯\_(ツ)_/¯
      // well, because of damned ios safari dynamic nav bars
      return this.$store.state.screen.height - 190;
    }
  },
  methods: {
    randomize() {
      let randomMonth = Math.floor(Math.random()*12),
          randomDate = randomMonth !== 2 ? Math.floor(Math.random()*30) : Math.floor(Math.random()*28);
      
      setDate(randomMonth, randomDate);
      this.closeWidgets();
    },
    showWidget(index) {
      this.closeWidgets();
      document.querySelector(`.options__widget--${index}`).classList.add('options__widget--open');
    },
    closeWidgets() {
      [...document.querySelectorAll('.options__widget')].forEach(elm => {
        elm.classList.remove('options__widget--open');
      })
    },
    trickyFadeIn() {
      if (!document.getElementsByClassName('date')[0]) return; 
      document.getElementsByClassName('date')[0].classList.remove('date--animated');
      setTimeout(_=> {
        document.getElementsByClassName('date')[0].classList.add('date--animated');
      }, 200);
    }
  }
}
</script>