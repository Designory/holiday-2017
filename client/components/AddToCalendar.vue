<template>
    <div id="test" :data-date="date"></div>
</template>

<script>
import store from '../store'
import Add2Calendar from '../scripts/add-calendar-event';

var singleEvent = new Add2Calendar(getOptions());

function getOptions() {
  const currentDate = new Date(),
      month = store.state.params.month,
      date = store.state.params.date,
      year = store.state.holiday.y || (month === 12 && date > 15) ? currentDate.getFullYear() : currentDate.getFullYear() + 1;

  return {
    title: store.state.holiday.title,
    start: new Date(year, month, date),
    end: new Date(year, month, date + 1),
    description: store.state.holiday.title,
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