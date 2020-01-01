<template>
<div>
    <div class="option-wrapper">
        <el-radio v-model="type" label="every">
            Every minute
        </el-radio>
    </div><!-- end type -->

    <div class="option-wrapper">
        <el-radio v-model="type" label="everyOption">
            Every <el-input-number size="small" v-model="everyOption.increment" :min="1" :max="59" /> 
            minute(s) starting at minute 
                <el-input-number size="small" v-model="everyOption.start" :min="0" :max="59" /> 
        </el-radio>
    </div><!-- end type -->

    <div class="option-wrapper">
        <el-radio v-model="type" label="specific">
            Specific minute (choose one or many) 
            <el-select
                v-model="specific.minutes"
                size="small"
                multiple
                placeholder="Choose minutes">

                 <el-option :key="0" :label="0" :value="0" />
                <el-option v-for="min in 59"
                    :key="min"
                    :label="min"
                    :value="min" />
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
                increment: 5,
                start: 0
            },
            specific: {
                minutes: [],
            }
        }
    },
    
}
</script>