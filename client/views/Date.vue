<template>
  <div>
    <p class="txt">On {{month}}/{{date}}, I'll be celebrating</p>
    <p class="txt txt--center">{{title}}</p>
    <p class="txt txt--center">{{description}}</p>

    <div @click="randomize()">RANDOMIZE</div>
    
    <Social></Social>
  </div>
</template>

<script>
import Social from '../components/Social';
import { setDate } from '../utils';

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
  }
}
</script>