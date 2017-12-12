<template>
  <div>
    <p class="txt">On {{month}}/{{date}}, I'll be celebrating</p>
    <p class="txt txt--center">{{title}}</p>
    <p class="txt txt--center">{{description}}</p>

    <div @click="randomize()">RANDOMIZE</div>
    
    <Social></Social>

    <p id="test"></p>
  </div>
</template>

<script>
import Social from '../components/Social';
import { setDate } from '../utils';
// import Add2Calendar from 'add2calendar';

import Add2Calendar from '../test';

var singleEventArgs = {
  title       : 'Add2Calendar plugin event',
  start       : 'July 27, 2018 10:30',
  end         : 'July 29, 2018 19:20',
  location    : 'Bangkok, Thailand',
  description : 'Event description'
};
var singleEvent = new Add2Calendar(singleEventArgs);
// setTimeout(() => {
//   singleEvent.createWidget('#test');
// }, 2000);

export default {
  components: {
    Social
  },
  computed: {
    month() {
      return this.$store.state.params.month;
    },
    date() {
      return this.$store.state.params.date;
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
  },
  updated: function() {
    console.log('this');
    singleEvent.createWidget('#test');
  }
}
</script>