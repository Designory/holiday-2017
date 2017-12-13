<template>
  <div class="calendar">
    <p class="txt txt--center-xs">My reason to celebrate</p>
    
    <CalendarMobile></CalendarMobile>

    
  </div>
</template>

<script>
import CalendarMobile from '../components/CalendarMobile'
import CalendarDesktop from '../components/CalendarDesktop'

export default {
    components: {
      CalendarMobile
    }
}
</script>
