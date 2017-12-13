<template>
    <social-sharing url="http://localhost:4000/"
                      title="Holiday Card"
                      description="Lorem ipsum"
                      quote="abc"
                      hashtags="designory, holidaycard"
                      inline-template>
                      
        <div class="social">
            <network network="email" class="social__elm">
                 Email
            </network>
            <network network="facebook" class="social__elm">
                 Facebook
            </network>
            <network network="linkedin" class="social__elm">
                 LinkedIn
            </network>
            <!-- <network network="pinterest" class="social__elm">
                 Pinterest
            </network> -->
            <network network="sms" class="social__elm">
                SMS
            </network>
            <network network="twitter" class="social__elm">
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