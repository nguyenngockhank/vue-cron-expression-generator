<template>
<div>
    <el-tabs type="border-card" value="month">
      <el-tab-pane name="min">
        <span slot="label">
          <i class="el-icon-date"></i> Minutes
        </span>
        <MinContent v-model="minute" />
      </el-tab-pane>

      <el-tab-pane name="hour">
        <span slot="label">
          <i class="el-icon-date"></i> Hours
        </span>
        <HourContent  v-model="hour"  />
      </el-tab-pane>
      
      <el-tab-pane name="day">
        <span slot="label">
          <i class="el-icon-date"></i> Day
        </span>
        <DayContent  v-model="day"  />
      </el-tab-pane>

      <el-tab-pane name="month">
        <span slot="label">
          <i class="el-icon-date"></i> Months
        </span>
        <MonthContent v-model="month"  />
      </el-tab-pane>
    </el-tabs>

    <!-- <div>{{minute}}</div>
    <div>{{hour}}</div>
    <div>{{day}}</div>
    <div>{{month}}</div> -->

    <div class="expresion-wrapper">
      <strong>Expression</strong>: {{ expresion }} 
      <br/>
      <strong>Description</strong>: {{ expressionDescription }}
    </div>
</div>
</template>

<script>
import { toRawObject, cronExprToString } from './helpers';

import CronExpBuilder from './services/cron-express-builder';

import MinContent from "./TabContent/MinContent";
import HourContent from "./TabContent/HourContent";
import DayContent from "./TabContent/DayContent";
import MonthContent from "./TabContent/MonthContent";

export default {
  components: {
    MinContent, HourContent, DayContent, MonthContent
  },
  data() {
      return {
          expresion: '* * * * *',
          minute: {},
          hour: {},
          day: {},
          month: {},
      }
  },
  computed: {
    expressionDescription: function() {
      return cronExprToString(this.$data.expresion)
    }
  },
  watch: {
    minute: {
      handler() {
        CronExpBuilder.setMinute(toRawObject(this.minute));
        this.expresion = CronExpBuilder.build();
      }, 
      deep: true,
    }, 
    hour: {
      handler() {
        CronExpBuilder.setHour(toRawObject(this.hour));
        this.expresion = CronExpBuilder.build();
      }, 
      deep: true,
    },
    day: {
      handler() {
        CronExpBuilder.setDay(toRawObject(this.day));
        this.expresion = CronExpBuilder.build();
      }, 
      deep: true,
    },
    month: {
      handler() {
        CronExpBuilder.setMonth(toRawObject(this.month));
        this.expresion = CronExpBuilder.build();
      }, 
      deep: true,
    }
  }

};
</script>
<style lang="scss">
.expresion-wrapper {
    margin-top: 20px;
    border: 1px solid black;
    padding: 5px;
    border: 4%;
}
.option-wrapper {
    min-height: 40px;
}
</style>