<template>
<div>
    <el-tabs type="border-card" value="min">
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
      
      <el-tab-pane label="Role">Role</el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>

    <div>{{minute}}</div>
    <div>{{hour}}</div>
    <div class="expresion-wrapper">
      Expression: {{ expresion }} 
      <br/>
      {{ expressionDescription }}
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
    height: 40px;
}
</style>