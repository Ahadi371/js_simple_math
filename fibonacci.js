// const fibo = [5, 10];
// for (let i = 2; i<= 10; i ++){
//     fibo[i] =fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);
function fibonaccSeries(num) {
    if (typeof num != 'number'){
        return 'please give a number'

    }
    if (num < 2){
        return 'please enter a positive number greater than 2'
    }
    const fibo = [4, 5];
    for (let i = 2; i<= num; i ++){
    fibo[i] = fibo[i -1] + fibo[i -2];

    }
    return fibo;
}
const fiboSeries = fibonaccSeries(13);
console.log(fiboSeries);