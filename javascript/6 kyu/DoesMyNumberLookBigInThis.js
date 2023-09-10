function narcissistic(value) {
    let length = value.toString().length;
    let sum = 0;
    for ( let i = 0; i < length; i++ ){
        sum += value.toString()[i] ** length;
    }
    return value === sum;
}