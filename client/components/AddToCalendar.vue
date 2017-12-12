<template>
    <div id="test" :data-date="date">some data</div>
</template>

<script>
import store from '../store'
import Add2Calendar from '../add-calendar-event';

var singleEvent = new Add2Calendar(getOptions());

function getOptions() {
  const currentDate = new Date(),
      month = store.state.params.month,
      date = store.state.params.date,
      year = (month === 12 && date > 15) ? currentDate.getFullYear() : currentDate.getFullYear() + 1;

  return {
    title: store.state.holiday.title,
    start: new Date(currentDate.getFullYear(), store.state.params.month - 1, store.state.params.date),
    end: new Date(currentDate.getFullYear(), store.state.params.month - 1, store.state.params.date + 1),
    description: store.state.holiday.titldescriptione,
  }
}

export default {
  updated: function() {
    singleEvent.createWidget('#test', singleEvent.update(getOptions()));  
  },
  computed: {
    date() {
      return this.$store.state.params.month;
    }
  }
}
</script>