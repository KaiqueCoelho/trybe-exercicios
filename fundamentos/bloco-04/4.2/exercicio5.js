let numbers = [500, 509, 3, 19, 70, 8, 100, 200, 35, 27];
let maiorNumero = 0;
for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index]
    }
}

console.log(maiorNumero)