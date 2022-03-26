// Get comfortable with loops: for and while
// and conditionals if/else

// Print odds 1-20
    // Using a loop write code that will console.log all of the odd values from 1 up to 20.
    
function printodds(){
    for(let i=1; i <= 20; i++){
        if(i % 2 ==0){
        }
        else if(i % 2 !==0){
                console.log(i)
        }
        
    }
}
printodds()

// Decreasing multiples of 3

function decreasingthrees(){
    for(let i=100; i >= 0; i--){
        if(i % 3==0){
            console.log(i)
        }
    }
}

// Print the sequences
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
// we know our starting value is four and we reduce by 1.5 each number
// 

function printArray(){
    for(let i=4; i > -4; i-=1.5){
        console.log(i)
    }
}
printArray()



// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

// FOR LOOP 
// function bigSum(){
//     let sum = 0
//     for(let i=1; i <= 100; i++){
//         sum = sum + 1
//         }
//         else
//     }
// }

//WHILE LOOP
// function bigSum(){
// let i = 1;
// let sum = 0


// while(i <= 100){
//     sum = sum + i
//     i++
// }
// return sum
// }

// let result = bigSum()
// console.log(result)


// Factorial
//Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

// FOR LOOP
// function biggestSum(){
//     let product = 1
//     for(let i=1; i<=12; i++){
//      product *= i
//     }
//   return product
// }
// let result = biggestSum()
// console.log(result)

// WHILE LOOP
// function hugestSum(){
//     let i = 1;
//     let product = 1

//     while(i <=12){
//         product *= i
//         i++
//     }
//     return product
// }
// let result = hugestSum()
// console.log(result)
// hugestSum()
