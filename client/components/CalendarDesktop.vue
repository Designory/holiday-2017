<template>
    <div class="vdp-datepicker__screen">
        <p class="txt txt--center-xs vdp-datepicker__title">My reason to celebrate</p>
        <div class="vdp-datepicker__container">
            <datepicker 
                :value="value"
                :maximum-view="'day'" 
                :format="mmmDD"
                v-on:input="val => {updateDate(val)}"></datepicker>

                <span class="navigation__btn navigation__btn--next navigation__btn--desktop navigation__btn--calendar" @click="$store.dispatch('nextView')"></span>

            <div class="vdp-datepicker__randomize" @click="randomize()">
                <p class="vdp-datepicker__text">Randomize</p>
            </div>
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
                month = selected.getMonth() + 1,
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
            let month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'][value.getMonth()],
                date = value.getDate();

            return `${month}         ${date}`;
        }
    }
}
</script>
