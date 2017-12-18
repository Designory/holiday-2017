<template>
    <div id="addToCalendar" :data-date="date"></div>
</template>

<script>
import store from '../store'
import Add2Calendar from '../scripts/add-calendar-event'
import { trackingBtn } from '../scripts/utils'

var singleEvent = new Add2Calendar(getOptions());

function getOptions() {
  const currentDate = new Date(),
      currentYear = currentDate.getFullYear(),
      month = store.state.params.month,
      date = store.state.params.date,
      year = store.state.holiday.y || (month === 12 && date > 15) ? currentYear : currentYear + 1;

  return {
    title: store.state.holiday.title,
    start: new Date(year, month, date),
    end: new Date(year, month, date + 1),
    description: store.state.holiday.title,
  }
}

export default {
  updated: function() {
    singleEvent.createWidget('#addToCalendar', singleEvent.update(getOptions()));  
  },
  computed: {
    date() {
      return this.$store.state.params.month;
    }
  },
  mounted() {
      setTimeout(_=> {
        [...this.$el.getElementsByTagName('a')].forEach(elm => {
          if (elm) elm.addEventListener('click', _=> { trackingBtn(elm.textContent) });
        });
      }, 1000);
  }
}
</script>