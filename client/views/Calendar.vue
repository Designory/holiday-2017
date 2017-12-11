<template>
  <div class="calendar">
    <smooth-picker ref="smoothPicker" :data="data" :change="dataChange" />
  </div>
</template>

<script>
/*****************************************************************************\
< * Third party code - DO NOT TOUCH IT - unless you know what you are doing * >
\*****************************************************************************/
import Vue from 'vue'
import store from '../store'
import * as Utils from '../utils';

import SmoothPicker from 'vue-smooth-picker';
import 'vue-smooth-picker/dist/css/style.css';

Vue.use(SmoothPicker);

  export default {
    name: 'calendar',
    data () {
      const nowYear = (new Date()).getFullYear()
      const years = []
      for (let i = 2017; i <= nowYear; i++) {
        years.push(i)
      }

      return {
        data: [
          {
            currentIndex: parseInt((nowYear - 2017) / 2),
            flex: 2,
            list: years,
            textAlign: 'center',
            className: 'row-group'
          },
          {
            currentIndex: store.state.params.month,
            flex: 2,
            list: [...Array(12)].map((m, i) => i + 1),
            textAlign: 'center',
            className: 'row-group'
          },
          {
            currentIndex: store.state.params.date,
            flex: 2,
            list: [...Array(30)].map((d, i) => i + 1),
            onClick: this.clickOnDay,
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
        // this object (Array) contains data for selected date 
        // [year, month, date]
        const ciList = this.$refs.smoothPicker.getCurrentIndexList()

        Utils.setFullDate(ciList[1], ciList[2]);

        if (gIndex === 0 || gIndex === 1) { // year or month changed
          let currentIndex = 1
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
              currentIndex = store.state.params.date < 28 ? store.state.params.date : 28;
              
              if (isLeapYear) {
                monthCount = 29
                currentIndex = store.state.params.date < 29 ? store.state.params.date : 29;
              }
              break
            case 4:
            case 6:
            case 9:
            case 11:
              monthCount = 30
              currentIndex = store.state.params.date < 31 ? store.state.params.date : 30;
              break
            default:
              monthCount = 31
              currentIndex = store.state.params.date
          }
          const list = [...Array(monthCount)].map((d, i) => i + 1)
          this.$refs.smoothPicker.setGroupData(2, { ...this.data[2], ...{ currentIndex, list }})
        }
      }
    }
  }
</script>
