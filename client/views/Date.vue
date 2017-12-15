<template>
  <div>

    <div class="date" :style="`height: ${height}px`">
      <p class="date__sub-title txt">On <span class="date__date">{{month}} {{date}}</span>, celebrate</p>
      <p class="date__title txt">{{title}}</p>
      <p class="date__desc txt">{{description}}</p>
    </div>


    <div class="options">

      <div @click="toggleWidget(0, 1)" class="options__item">
        <img class="options__icon" src="/static/calendar.png" alt="icon">
        <p class="options__icon-desc txt">ADD TO CALENDAR</p>
        <div class="options__widget options__widget--0">
          <AddToCalendar></AddToCalendar>
        </div>
      </div>
        
      <div @click="toggleWidget(1, 0)" class="options__item">
        <img class="options__icon" src="/static/share.png" alt="icon">
        <p class="options__icon-desc txt">SHARE TO SOCIAL MEDIA</p>
        <div class="options__widget options__widget--1">
          <Social></Social>
        </div>
      </div>

      <div @click="randomize()" class="options__item options__item--dice">
        <img class="options__icon" src="/static/dice.png" alt="icon">
        <p class="options__icon-desc txt">RANDOM NEW DATE</p>
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
      // you might think why? ¯\_(ツ)_/¯
      // well, because of damned ios safari dynamic nav bars, long story
      return this.$store.state.screen.height - (this.$store.state.screen.width < 1025 ? 190 : 360);
    }
  },
  methods: {
    randomize() {
      let randomMonth = Math.floor(Math.random()*11),
          randomDate = randomMonth !== 2 ? Math.floor(Math.random()*30) : Math.floor(Math.random()*28);
      
      setDate(randomMonth, randomDate);
      this.animateDice();
      this.closeWidgets(0);
      this.closeWidgets(1);
    },
    toggleWidget(show, close) {
      this.closeWidgets(close);
      document.querySelector(`.options__widget--${show}`).classList.toggle('options__widget--open');
    },
    closeWidgets(index) {
        document.querySelectorAll('.options__widget')[index].classList.remove('options__widget--open');
    },
    animateDice() {
      let dice = document.querySelector(`.options__item--dice`),
          modifier = 'options__item--dice-animated'

      // do nothing if already in animation mode
      if (dice.classList.contains(modifier)) return 0;
      
      // add modifier for .82 sec only = so it runs animation once
      dice.classList.add(modifier);
      setTimeout(_=> { dice.classList.remove(modifier) }, 820);
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