<template>
<div>
    <div class="option-wrapper">
        <el-radio v-model="type" label="every">
            Every hour
        </el-radio>
    </div><!-- end type -->

    <div class="option-wrapper">
        <el-radio v-model="type" label="everyOption">
            Every <el-input-number size="mini" v-model="everyOption.increment" /> 
            hour(s) starting at hour 
            <el-input-number 
                size="mini" 
                v-model="everyOption.start" 
                :min="0" :max="23" /> 
        </el-radio>
    </div><!-- end type -->

     <div class="option-wrapper">
        <el-radio v-model="type" label="specific">
            Specific hour (choose one or many) 
            <el-select
                v-model="specific.hours"
                size="small"
                multiple
                placeholder="Choose hours">

                <el-option :key="0" :label="0" :value="0" />
                <el-option v-for="hour in 23"
                    :key="hour"
                    :label="hour"
                    :value="hour" />
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
            everyOption: {
                increment: 1,
                start: 0
            },
            specific: {
                hours: [],
            }
        }
    },
}
</script>