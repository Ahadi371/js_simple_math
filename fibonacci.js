const fibo = [5, 10];
for (let i = 2; i<= 10; i ++){
    fibo[i] =fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);