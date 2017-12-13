<template>
    <div>
        <datepicker 
            :value="value"
            :maximum-view="'day'" 
            :format="mmmDD"
            v-on:input="val => {updateDate(val)}"></datepicker>

        <div class="vdp-datepicker-randomize" @click="randomize()">
            <img class="vdp-datepicker-icon" src="/static/randomize.png" alt="img">
            <p class="vdp-datepicker-text">RANDOMIZE</p>
        </div>
    </div>
</template>

<script>
import store from '../store'
import Datepicker from 'vuejs-datepicker'
import { setDate } from '../scripts/utils'

export default {
  
    components: {
      Datepicker
    },
    computed: {
        value() {
            return this.$store.state.date;
        }
    },
    methods: {
        updateDate(val) {
            let selected = new Date(val),
                month = selected.getMonth(),
                date = selected.getDate();
                
                setDate(month, date);
        },
        randomize() {
            let randomMonth = Math.floor(Math.random()*12),
                randomDate = randomMonth !== 2 ? Math.floor(Math.random()*30) : Math.floor(Math.random()*28);

            store.state.date = new Date(2018, randomMonth, randomDate);
            setDate(randomMonth, randomDate);            
        },
        mmmDD(value) {
            let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][value.getMonth()],
                date = value.getDate();

            return `${month} ${date}`;
        }
    }
}
</script>
