students = ['Jim', 'Marcel', 'Sean', 'Tad', 'Harmony'];

// console.log(students.length); //5
// console.log(students[3])
// console.log(students[students.length - 1]) //Tad

students[0] = 'Greg'; //repaces Jim w/ Johnny
// console.log(students);

const valuePrinter = (array, index) => {
  return array[index];
}

// console.log(valuePrinter(students, 4));  //you can return using a variable
// console.log(valuePrinter([1,2,3,4,5], 2)) //you can return using the array itself

// console.log(valuePrinter(students, 2))

// const nameGreg = (array, index) => {
//   return array.includes("Greg");    // make sure to use agrument "array" for reuseability 
// }
// console.log(nameGreg(students))
