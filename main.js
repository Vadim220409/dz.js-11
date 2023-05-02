// ex 1

const numbers = [2, 5, 11, 3, 28, 1, 42, 7, 13]

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > 13){
        console.log(numbers[i])
    }
}

// ex 2 

let a = 4;
let b = 7;

for (let i = a; i <= b; i++){
    console.log(i)
}

// ex 3

let num1 = Number(prompt("Введіть перше число:"));
let num2 = Number(prompt("Введіть друге число:"));

let sum = num1 + num2;

alert("Сумма чисел = " + sum)