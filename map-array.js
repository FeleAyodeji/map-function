//double = [6,8,10,12,14,8,18]
//triple = [9,12,15,21,12,29]
//binary = [ '11','100',101,110,111,100,1001]
  

const numArr = [3,4,5,6,7,4,9]

// function double (x){
//     return x*2
// }
// const output1 = numArr.map(double)
// console.log(output1)  // printing out double of the array

//or
const output1 = numArr.map((x)=> x*2)
console.log(output1)



// function triple (x){
//     return x*3
// }
// const output2 = numArr.map(triple)
// console.log(output2)  //printing out triple of the array

//or

const output2 = numArr.map((x)=> x*3)
console.log(output2)


// function binary (x){
//     return x.toString(2)
// }

// const output3 = numArr.map(binary)
// console.log(output3)  //print out the binary of the array

//or

const output3 = numArr.map((x)=> x.toString(2))
console.log(output3)