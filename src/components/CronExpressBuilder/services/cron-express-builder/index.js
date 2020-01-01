const MAX_VALUES = {
    hour: 24,
    minute: 60,
    month: 13,
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
            case 'every': 
                this._info.minute = '*';    
                break;  // do nothing
            case 'everyOption':
                option.minutes = buildEveryOption(option, 'minute');
            case 'specific':
                let strVal = option.minutes.join(',');
                this._info.minute = strVal || '*';
        }

        return this;
    }

    setHour(value = { type, everyOption, specific } ) {
        const { type } = value;
        const option = value[type]; 

        switch(type) {
            case 'every': 
                this._info.hour = '*';
                break; 
            case 'everyOption':
                option.hours = buildEveryOption(option, 'hour');
            case 'specific':
                let strVal = option.hours.join(',');
                this._info.hour = strVal || '*';
        }

        return this;
    }

    setDay( value = { type, specificDayOfWeek, specificDayOfMonth } ) {
        const { type } = value;
        const option = value[type]; 

        switch(type) {
            case 'every': 
                this._info.dayOfWeek = '*';
                this._info.dayOfMonth = '*';
                break;
            case 'specificDayOfWeek':
                this._info.dayOfMonth = '*';
                let strVal = option.days.join(',');
                this._info.dayOfWeek = strVal || '*';
                break;
            case 'specificDayOfMonth':
                this._info.dayOfWeek = '*';
                let strVal2 = option.days.join(',');
                this._info.dayOfMonth = strVal2 || '*';
                break;
        }
        return this;
    }

    setMonth(value = { type, everyOption, specific } ) {
        const { type } = value;
        const option = value[type]; 

        switch(type) {
            case 'every': 
                this._info.month = '*';    
                break;  // do nothing
            case 'everyOption':
                option.months = buildEveryOption(option, 'month');
            case 'specific':
                let strVal = option.months.join(',');
                this._info.month = strVal || '*';
        }
    }

    reset() {
        this._info = {
            minute: '*',
            hour: '*',
            dayOfWeek: '*',
            dayOfMonth: '*',
            month: '*',
        }; //  
    }

    build() {
        var { minute, hour, dayOfWeek, dayOfMonth, month} = this._info;
        return `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
    }
    
}

export default new CronExpression;