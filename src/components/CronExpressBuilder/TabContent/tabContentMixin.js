import { toRawObject } from '../helpers';

export default {
    created() {
        this.triggerNewVal();
    },
    watch: {
        type (newVal) {
            this.triggerNewVal();
        },
        everyOption: {
            deep: true,
            handler() {
                this.triggerNewVal();
            }
        },
        specific: {
            deep: true,
            handler() {
                this.triggerNewVal();
            }
        },
    },
    methods: {
        triggerNewVal() {
            var rawVal = toRawObject(this.$data);
            this.$emit('input', rawVal);
        }
    }
}