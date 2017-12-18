<template>
    <div class="social">

        <!-- Email -->
        <social-sharing :url="location"
                        title="I found you this special holiday!"
                        description="Need an excuse to celebrate every day? Try this!"
                        inline-template>
                <network network="email" class="social__elm social__elm--email">
                    Email
                </network>
        </social-sharing>
        
        <!-- facebook -->
        <social-sharing :url="location"  
                        title="Designory’s Holiday Card"
                        quote="Need an excuse to celebrate every day? Now you have it. #everydayholiday #designory #agencylife"
                        inline-template>
                <network network="facebook" class="social__elm social__elm--fb">
                    Facebook
                </network>
        </social-sharing> 

        <!-- LinkedIn -->
        <social-sharing :url="location"
                        title="Designory’s Holiday Card"
                        description="Give your colleagues a reason to celebrate every day. #everydayholiday #designory #agencylife"
                        inline-template>
                <network network="linkedin" class="social__elm social__elm--linked">
                    LinkedIn
                </network>          
        </social-sharing>

        <!-- Twitter -->
        <social-sharing :url="location"
                        title="Need an excuse to celebrate every day? Now you have it. #everydayholiday #designory #agencylife"
                        inline-template>
                <network network="twitter" class="social__elm social__elm--twitter">
                    Twitter
                </network>
        </social-sharing>
    
    </social-sharing>
            <!-- 
            
             -->
        </div>

    <!--   -->
</template>

<script>
import Vue from 'vue'
import SocialSharing from 'vue-social-sharing'
import { trackingBtn } from '../scripts/utils'

Vue.use(SocialSharing);

export default {
  components: {
    SocialSharing
  },
  computed: {
      location() {
          return this.$store.state.location;
      }
  },
  mounted() {
  	this.$root.$on('social_shares_open', function (network, url) {
          trackingBtn(network);
    });
  }
}
</script>