<template>
    <social-sharing url="http://localhost:4000/"
                      title="Holiday Card"
                      description="Lorem ipsum"
                      quote="abc"
                      hashtags="designory, holidaycard"
                      inline-template>
                      
        <div class="social">
            <network network="email" class="social__elm social__elm--email">
                 Email
            </network>
            <network network="facebook" class="social__elm social__elm--fb">
                 Facebook
            </network>
            <network network="linkedin" class="social__elm social__elm--linked">
                 LinkedIn
            </network>
            <network network="sms" class="social__elm social__elm--sms">
                SMS
            </network>
            <network network="twitter" class="social__elm social__elm--twitter">
                 Twitter
            </network>
        </div>
    </social-sharing> 
</template>

<script>
import Vue from 'vue';
import SocialSharing from 'vue-social-sharing';

Vue.use(SocialSharing);

export default {
  components: {
    SocialSharing
  }
}
</script>