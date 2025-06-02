//Challenge 1:  Sum of Positives

function sumOfPositives(numbers: number[]): number {
    return numbers.reduce((sum ,num) => {
        if(num > 0) return sum + num
        return sum
    }, 0)
}
console.log(sumOfPositives([1, -3, 5, -2, 9, -8]))


//Challenge 2: Find Maximum Value

function findMax(numbers: number[]): number {
    let max: number = 0
    numbers.forEach((num) => {
        if (num > max) max = num
    })
    return max
}
console.log(findMax([3, 7, 2, 9, 5]))


function findMax2(numbers: number[]): number {
    return numbers.reduce((max, num) => {
        if (num > max) return max = num
        return max
    }, 0)
}
console.log(findMax2([3, 7, 2, 9, 5]))


//Challenge 3: Election winner
interface Canditate {
    name: string
    votes: number
}

const candidates: Canditate[] = [
    { name: "Alice", votes: 500 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 }
];

function findWinner(candidate: Canditate[]): Canditate{
    let winner: Canditate = candidate[0]
    candidate.forEach((cand) => {
        if (cand.votes > winner.votes) winner = cand
    })
    return winner
}
console.log(findWinner(candidates))


//Challenge 4: Longest word

function findLongestWord(words: string[]): string{
    let longestWord: string = words[0]
    words.forEach((word) => {
        if (word.length > longestWord.length) longestWord = word
    })
    return longestWord
}
console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]))


//Challenge 5: Count Properties
type Person = { [key: string]: number | string }

function countProperties(obj: Person): number{
    let keys: string[] = Object.keys(obj)
    return keys.length
}
console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }))


//Challenge 6: Filter by Length

function filterByLength(words: string[], minLength: number): string[]{
    return words.filter((word) => word.length >= minLength)
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5))


//Challenge 7: Sum of Even Numbers

function sumEvenNumbers(numbers: number[]): number{
    return numbers.reduce((sum, num) => {
        if (num % 2 === 0) return sum += num
        return sum
    },0)
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]))


//Challenge 8: Difference Between Sum of Even and Odd Numbers

function differenceEvenOdd(numbers: number[]): number{
    let sumEven: number = 0
    let sumOdd: number = 0

    numbers.forEach((num) => {
        if (num % 2 === 0) sumEven += num
        else sumOdd += num
    })
    return sumEven - sumOdd
}
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]))


//Challenge 9: Count Truthy

type Custom= { [key: string]: number | string | boolean | null}

function countTruthy(obj: Custom): number {
    let truthCount = 0;
    for (let key in obj) {
        const value = obj[key as keyof Custom];
        if (value) truthCount++;
    }
    return truthCount;
}
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }))


//Challenge 10: Average of Numbers

function average2(numbers: number[]): number {
    if (numbers.length === 0) return 0
    let sum:number = numbers.reduce((sum, num) => sum += num,0)
    return sum / numbers.length
}
console.log(average2([2, 4, 6, 8]))


//Challenge 11: Linear Search

function linearSearch(numbers: number[], searchValue: number): number {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === searchValue) return i;
    }
    return -1;
}
console.log(linearSearch([5, 3, 7, 1, 4], 7))
console.log(linearSearch([5, 3, 7, 1, 4], 10))


//challenge 12: Reverse Linear Search

function reverseLinearSearch(numbers: number[], searchValue: number): number{
    let i: number = numbers.length - 1
    while (i >= 0){
        if (numbers[i] == searchValue){
            return i
            break
        }else {
            i--
        } 
    }
    return -1
}
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7))
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10) )


//Challenge 13: Linear Search All Indices

function linearSearchAll(numbers: number[], searchValue: number): number[]{
    let indices: number[] = []
    let i: number = 0;
    while (i < numbers.length){
        if (numbers[i] == searchValue){
            indices.push(i)
            i++
        }else {
            i++
        }
    }
    return indices
}
console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7) )
console.log(linearSearchAll([5, 3, 7, 1, 4], 10))


//Challenge 14: Count Occurrences

type Occurrences = { [key: string]: number }

function countOccurrences(arr: string[]): Occurrences{
    let frequency: Occurrences = {}
    arr.forEach((element) => {
        if (element in frequency) frequency[element] += 1
        else frequency[element] = 1
    })
    return frequency
}
console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]))


//Challenge 15: Remove Duplicates

function removeDuplicates(numbers: number[]): number[]{
    let noDuplicates: number [] = []
    numbers.forEach((num) => {
        if(!noDuplicates.includes(num)) noDuplicates.push(num)
    })
    return noDuplicates
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]))


//Challenge 16: Most Frequent

type frequencyMap = { [key: string | number]: number }
function mostFrequent(arr: number[] | string[]): string | number {
    let frequency: frequencyMap = {}
    let highestFrequency: number = 0
    let mostFrequent: string | number = ""
    arr.forEach((element) => {
        if (element in frequency){
            frequency[element] += 1
            if (frequency[element] > highestFrequency){
                highestFrequency = frequency[element]
                mostFrequent = element
            }
        }else {
            frequency[element] = 1
            if (frequency[element] > highestFrequency){
                highestFrequency = frequency[element]
                mostFrequent = element
            }
        }
    })
    return mostFrequent
}

console.log(mostFrequent([1]))
console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "banana"]))
