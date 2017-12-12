<template>
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