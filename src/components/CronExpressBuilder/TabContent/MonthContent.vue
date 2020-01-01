<template>
<div>
    <div class="option-wrapper">
        <el-radio v-model="type" label="every">
            Every month
        </el-radio>
    </div><!-- end type -->

    <div class="option-wrapper">
        <el-radio v-model="type" label="everyOption">
            Every <el-input-number size="small" v-model="everyOption.increment" :min="1" :max="11" /> 
            month(s) starting at in 
                <el-input-number size="small" v-model="everyOption.start" :min="1" :max="12" /> 
        </el-radio>
    </div><!-- end type -->

    <div class="option-wrapper">
        <el-radio v-model="type" label="specific">
            Specific month (choose one or many) 
            <el-select
                v-model="specific.months"
                size="small"
                multiple
                placeholder="Choose months">

                <el-option v-for="month in 12"
                    :key="month"
                    :label="month"
                    :value="month" />
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
                months: [],
            }
        }
    },
    
}
</script>