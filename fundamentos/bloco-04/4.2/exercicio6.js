let numbers = [5, 8, 2, 17, 70, 8, 100, 2, 36, 28];
let numerosImpares = 0;
for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] % 2 > 0) {
        numerosImpares += 1
    }
}
if (numerosImpares > 0) {
    console.log(numerosImpares)
}

else {
    console.log("nenhum valor impar encontrado")
}