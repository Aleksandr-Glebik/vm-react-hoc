const numbers = [1, 2, 3, 4, 5]
// const newNumbers = []

// for (let i = 0; i < numbers.length; i++) {
//     newNumbers.push(numbers[i] + 2)
// }

// console.log(newNumbers)

function createAddNumber(number) {
    return function(arr) {
        return arr.map( item => item += number)
    }
}

const addOne = createAddNumber(1)
console.log('addOne', addOne(numbers))
const addTwo = createAddNumber(2)
console.log('addTwo', addTwo(numbers))
