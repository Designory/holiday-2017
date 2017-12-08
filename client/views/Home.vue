<template>
  <div :class="['page page--' + view]">
     <p class="txt">
       While we do want to wish you a very happy holiday season, we here at Designory want the world to know that every day is a good day to celebrate. 
     </p>
     <p class="txt txt--strong">
       Enter a day — any day. And we’ll show you your reason to celebrate.
     </p>
     <p class="txt">VIEW: {{ view }}</p>
  </div>
</template>

<script>
import Counter from 'components/Counter';

export default {
  components: {
    Counter
  },
  computed: {
    view() {
      return this.$store.state.views.current;
    }
  }
}
</script>
