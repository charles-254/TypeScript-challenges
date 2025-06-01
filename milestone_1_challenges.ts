// Challenge 1: Sum of two numbers

function add(num1:number, num2:number): number{
    return num1 + num2
}
console.log(add(55, 55))


//Challenge 2: Convert Minutes into Seconds

function convert(min:number): number{
    return min * 60
}
console.log(convert(2))


//Challenge 3: Perimeter of a Rectangle

function perimeter(width: number, height: number): number{
    return (width + height) * 2
}
console.log(perimeter(20, 30))


//Challenge 4: Check Negative

function isNegative(num: number): boolean{
    if(num < 0){
        return true
    }else{
        return false
    }
}
console.log(isNegative(1))


//Challenge 5;  Can I Drive

function canDrive(name:string, age: number): string{
    if (age >= 18){
        return `${name} is old enough to drive.`
    }else{
        return `${name} is not old enough to drive yet.`
    }
}
console.log(canDrive("charles", 34))


//challenge 6:  Largest Number
function max(a: number, b: number, c: number): number{
    return Math.max(a, b, c)
}
console.log(max(1 , 4 , 5))


//Challenge 7: BMI Calculator

function calculateBMI(weight: number, height: number): void{
    let BMI: number = Math.floor((weight / (height * height)) * 100) / 100
    
    if (BMI >= 30){
        console.log(`Your BMI is ${BMI} - Obese`)
    }else if (BMI >= 25 && BMI <= 29.9) {
        console.log(`Your BMI is ${BMI} - Overweight`)
    }else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log(`Your BMI is ${BMI} - Normal weight`)
    }else if (BMI < 18.5) {
        console.log(`Your BMI is ${BMI} - Underweight`)
    }else {
        console.log("Please Supply valid data.")
    }
}
calculateBMI(62, 1.5)


//Challenge 8: Greeting Based On Time

function greetUser(name: string, hour: number): string{
    if (hour >= 5 && hour <= 11){
        return `Good morning, ${name}!`
    }else if (hour >= 12 && hour <= 17){
        return `Good afternoon, ${name}!`
    }else if (hour >= 18 && hour <= 21){
        return `Good evening, ${name}!`
    }else if (hour >= 22 && hour <= 23 || hour >= 0 && hour <= 4){
        return `Good night, ${name}!`
    }else{
        return "Not an hour of a day"
    }
}
console.log(greetUser("Alice", 21))


//Challenge 9:FizzBuzz

function fizzBuzzCheck(number: number): string | number{
    let divBy5: number = number % 5
    let divBy3: number = number % 3

    if (divBy5 == 0 && divBy3 == 0) {
        return "FizzBuzz"
    }else if (divBy5 == 0){
        return "Buzz"
    }else if (divBy3 == 0){
        return "Fizz"
    }else {
        return number
    }
}
console.log(fizzBuzzCheck(15))


//challenge 10: Perimeter 2
function perimeter2(letter: string, num: number): number | string{
    const sides: number = 4
    const pie2: number = 6.28

    if (letter == "s"){
        return num * sides
    }else if (letter == "c"){
        return num * pie2
    }else {
        return "Please enter s for square or c for circle"
    }
}
console.log(perimeter2("c", 3))


//Challenge 11: Sum of Even Numbers

function sumEvenNumbers(n: number): number {
    let sum: number = 0;
    for(let i = 0; i <= n; i++){
        if ((i % 2) === 0) sum += i
    }
    return sum
}
console.log(sumEvenNumbers(12))


// Challenge 12: Multiply by Itself

function powerUp(num: number, times: number): number {
    let result: number = 1

    for (let i = 1; i <= times; i++){
        result *= num
    }
    return result
}
console.log(powerUp(2, 3))


//challenge 13: Factorial Calculator

function factorial(n: number): number{
    let result: number = 1
    for (let i = 1; i <= n; i++){
        result *= i
    }
    return result
}
console.log(factorial(4))


//Challenge 14: Multiple Sum

function sumMultiples(n: number, divisor: number): number{
    let result = 0
    for (let i = 0; i <= n; i++)
        if ((i % divisor) == 0){
            result += i
        }
    return result
}
console.log(sumMultiples(10, 2))


//Challenge 15: Sum of Digits

function sumDigits(num: number): number{
    let sum: number = 0
    while (num > 0){
        let lastNumber: number = num % 10
        num = Math.floor(num/10)
        sum += lastNumber
    }
    return sum
}
let results = sumDigits(123)
console.log(results)