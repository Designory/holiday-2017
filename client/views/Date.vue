<template>
  <div>
    <p class="txt">On {{month}}/{{date}}, I'll be celebrating</p>
    <p class="txt txt--center">{{title}}</p>
    <p class="txt txt--center">{{description}}</p>
    <div @click="randomize()">RANDOMIZE</div>
    
    <social-sharing url="http://localhost:4000/"
                      title="Holiday Card"
                      description="Lorem ipsum"
                      quote="abc"
                      hashtags="designory, holidaycard"
                      inline-template>

      <div class="social">
        <network network="email" class="social__elm">
            <i class="fa fa-envelope"></i> Email
        </network>
        <network network="facebook" class="social__elm">
          <i class="fa fa-facebook"></i> Facebook
        </network>
        <network network="googleplus" class="social__elm">
          <i class="fa fa-google-plus"></i> Google +
        </network>
        <network network="linkedin" class="social__elm">
          <i class="fa fa-linkedin"></i> LinkedIn
        </network>
        <network network="pinterest" class="social__elm">
          <i class="fa fa-pinterest"></i> Pinterest
        </network>
        <network network="sms" class="social__elm">
          <i class="fa fa-commenting-o"></i> SMS
        </network>
        <network network="twitter" class="social__elm">
          <i class="fa fa-twitter"></i> Twitter
        </network>
      </div>
    </social-sharing> 
  </div>
</template>

<script>
import Vue from 'vue';
import SocialSharing from 'vue-social-sharing';
import { setDate } from '../utils';

Vue.use(SocialSharing);

export default {
  components: {
    SocialSharing
  },
  computed: {
    month() {
      return this.$store.state.params.month;
    },
    date() {
      return this.$store.state.params.date;
    },
    title() {
      // store.state.holiday = findHoliday(this.$store.state.params.month, this.$store.state.params.date)
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