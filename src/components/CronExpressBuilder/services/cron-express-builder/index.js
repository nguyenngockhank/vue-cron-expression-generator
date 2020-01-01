import CronBuilder from 'cron-builder';


const MAX_VALUES = {
    hour: 24,
    minute: 60,
}

function buildEveryOption(everyOption, type = 'minute') {
    let vals = [];
    let { start, increment} = everyOption;
    for(let i = start; i < MAX_VALUES[type]; i = i + increment) {
        vals.push(i);
    }
    return vals;
}

class CronExpression {

    constructor() {
        this.reset();
    }

    setMinute(value = { type, everyOption, specific } ) {
        const { type } = value;
        const option = value[type]; 

        switch(type) {
            case 'every': break;  // do nothing
            case 'everyOption':
                option.minutes = buildEveryOption(option, 'minute');
            case 'specific':
                let strVal = option.minutes.join(',');
                if (strVal) this.builder.set('minute', [ strVal ]);
        }

        return this;
    }

    setHour(value = { type, everyOption, specific } ) {
        const { type } = value;
        const option = value[type]; 

        switch(type) {
            case 'every': break;  // do nothing
            case 'everyOption':
                option.hours = buildEveryOption(option, 'hour');
            case 'specific':
                let strVal = option.hours.join(',');
                if (strVal) this.builder.set('hour', [ strVal ]);
        }

        return this;
    }

    reset() {
        this.builder = new CronBuilder();
    }

    build() {
        return this.builder.build();
    }
    
}

export default new CronExpression;