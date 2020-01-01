import cronstrue from 'cronstrue';

export function cronExprToString(expr){
    return cronstrue.toString(expr);
}

export function toRawObject(obj) {
    return JSON.parse(JSON.stringify(obj))
}