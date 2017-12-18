<template>
    <div>
      <p class="txt txt--center-xs txt--show-xs smooth-picker-title-sm">My reason to celebrate</p>
      <!-- Mobile -->
      <div class="smooth-picker-container">
          <div class="smooth-picker-divider"></div>
          <div class="smooth-picker-window smooth-picker-window--left"></div>
          <div class="smooth-picker-window smooth-picker-window--right"></div>
          <smooth-picker ref="smoothPicker" :data="data" :change="dataChange" />
      </div>

      <div class="smooth-picker-randomize">
        <div>
          <img class="smooth-picker-icon" src="/static/randomize.png" alt="img" @click="randomize()">
          <p class="smooth-picker-text">RANDOMIZE</p>
        </div>
      </div>

      <!-- Desktop -->
      <Calendar></Calendar> 
      
    </div>
</template>

<script>
/*****************************************************************************\
< * Third party code - DO NOT TOUCH IT - unless you know what you are doing * >
\*****************************************************************************/
import Vue from 'vue'
import store from '../store'
import { setDate, trackingBtn } from '../scripts/utils'

import SmoothPicker from 'vue-smooth-picker'
import 'vue-smooth-picker/dist/css/style.css'
import Calendar from '../components/CalendarDesktop'

Vue.use(SmoothPicker);

  export default {
    name: 'calendar',
    components: {
      Calendar
    },
    data () {
      return {
        data: [
          {
            currentIndex: 0,
            flex: 2,
            list: [2018],
            textAlign: 'center',
            className: 'row-group'
          },
          {
            currentIndex: store.state.params.month,
            flex: 2,
            list: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            textAlign: 'center',
            className: 'row-group'
          },
          {
            currentIndex: store.state.params.date - 1,
            flex: 2,
            list: [...Array(30)].map((d, i) => i + 1),
            textAlign: 'center',
            className: 'item-group'
          }
        ]
      }
    },
    methods: {
      isLeapYear (year) {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
      },
      dataChange (gIndex, iIndex) {
        // this array contains data for selected date 
        // [year, month, date]
        const ciList = this.$refs.smoothPicker.getCurrentIndexList();

        setDate(ciList[1] + 1, ciList[2] + 1);

        if (gIndex === 0 || gIndex === 1) { // year or month changed
          let currentIndex = 15
          let monthCount = 30

          let month = iIndex + 1 // month
          if (gIndex === 0) { // year
            month = this.data[1].list[ciList[1]]
          }
          switch (month) {
            case 2:
              let selectedYear = this.data[0].list[ciList[0]] // month
              if (gIndex === 0) { // year
                selectedYear = this.data[0].list[iIndex]
              }

              let isLeapYear = false
              if (this.isLeapYear(selectedYear)) {
                isLeapYear = true
              }

              monthCount = 28
              currentIndex = store.state.params.date < 28 ? store.state.params.date - 1 : 28;

              if (isLeapYear) {
                monthCount = 29
                currentIndex = store.state.params.date < 29 ? store.state.params.date - 1 : 29;
              }
              break
            case 4:
            case 6:
            case 9:
            case 11:
              monthCount = 30
              currentIndex = store.state.params.date < 31 ? store.state.params.date - 1 : 30;
              break
            default:
              monthCount = 31
              currentIndex = store.state.params.date - 1
          }
          const list = [...Array(monthCount)].map((d, i) => i + 1)
          this.$refs.smoothPicker.setGroupData(2, { ...this.data[2], ...{ currentIndex, list }})
        }
      },
      randomize() {
        let randomMonth = Math.floor(Math.random()*12),
            randomDate = randomMonth !== 2 ? Math.floor(Math.random()*30) : Math.floor(Math.random()*28);
        
        this.setCalendarDate(randomMonth, randomDate);

        // updating ga tracking 
        trackingBtn('randomize');
      },
      /**
       * Custom method for third party widget
       * 1. Update widget's group data
       * 2. Update store.state
       * 3. Render widget with updated data for currentIndex
       */
      setCalendarDate(month, date) {
        // update group data for widget
        // month => data[1]
        // date => data[2]
        this.$refs.smoothPicker.setGroupData(1, { 
            ...this.$refs.smoothPicker.data[1], 
            currentIndex: month
          });
        this.$refs.smoothPicker.setGroupData(2, { 
          ...this.$refs.smoothPicker.data[2], 
          currentIndex: date
        });
        
        // update state
        // then render widget with updated data
        setDate(month, date).then(_=> {
          this.dataChange(store.state.params.month, store.state.params.date - 1);
          this.data = [
            { ...this.data[0]},
            { ...this.data[1], currentIndex: store.state.params.month},
            { ...this.data[2], currentIndex: store.state.params.date - 1}
          ];
        })
      }
    },
    created() {
      // adding a handler for 'shake gesture' event (mobile only), unless you have desktop with accellerometer
      window.addEventListener('shake', _=> {
        this.randomize;
        
        // updating ga tracking 
        trackingBtn('shake');
      }, false);
    }
  }
</script>
