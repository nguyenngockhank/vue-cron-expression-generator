<template>
<div>
    <div class="option-wrapper">
        <el-radio v-model="type" label="every">
            Every day
        </el-radio>
    </div><!-- end type -->

    <div class="option-wrapper">
        <el-radio v-model="type" label="specificDayOfWeek">
            Specific day of week (choose one or many)

            <el-select
                v-model="specificDayOfWeek.days"
                size="small"
                multiple
                placeholder="Choose ">

                <el-option v-for="day in dayOfWeeks"
                    :key="day.value"
                    :label="day.label"
                    :value="day.value" />
               
            </el-select>
        </el-radio>
    </div><!-- end type -->


    <div class="option-wrapper">
        <el-radio v-model="type" label="specificDayOfMonth">
            Specific day of month (choose one or many)

            <el-select
                v-model="specificDayOfMonth.days"
                size="small"
                multiple
                placeholder="Choose ">

                <el-option v-for="day in 31"
                    :key="day"
                    :label="day"
                    :value="day" />
            </el-select>
        </el-radio>
    </div><!-- end type -->
   
</div>
</template>
<script>
import tabContentMixin from './tabContentMixin';

export default {
    mixins: [ tabContentMixin ],
    data() {
        return {
            type: 'every', // everyOption,
            specificDayOfWeek: {
                days: [],
            },
            specificDayOfMonth: {
                days: [],
            },
            
        }
    },
    computed: {
        dayOfWeeks() {
            return [
                {label: 'Sunday', value: 0},
                {label: 'Monday', value: 1},
                {label: 'Tuesday', value: 2},
                {label: 'Wednesday', value: 3},
                {label: 'Thursday', value: 4},
                {label: 'Friday', value: 5},
                {label: 'Saturday', value: 6},
            ]
        }
    }
}
</script>