<template>
  <datepicker 
        :maximum-view="'day'" 
        v-on:input="val => {updateDate(val)}"></datepicker>
</template>

<script>
import store from '../store'
import Datepicker from 'vuejs-datepicker'
import { setDate } from '../scripts/utils'

export default {
  
    components: {
      Datepicker
    },
    methods: {
        updateDate(val) {
            
            let selected = new Date(val),
                month = selected.getMonth(),
                date = selected.getDate();
                
                setDate(month, date);
        }
    },
    // beforeCreate() {
        
    // },
    // created() {
    //     // console.log(this);
    // }
}
</script>
