//7. Write a function that takes two parameters - 
//an array and a number and outputs the index of 
//an array element equal to a number

let array2 = [5, 7, 2, 9, 1, 4]
let num = 5
let i = -1
function indexArray(array2, num){
   do{
    if(i==array2.length){
        console.log('There is no such a number')
        break
    } 
    i++
    
     } while(array2[i]!==num)

     console.log(i)
}
indexArray(array2, num)