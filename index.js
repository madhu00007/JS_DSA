// Data structure : A data structure is a specific way of organizing, storing, and accesing data.

//Aligorithm - A set of instructions that tells a computer how to do something, or you can also say step by step solution of the problem is called algorithm.

//create an array with 5 student names, after that create a function which takes 2 parameters (allStudents and studentName) iterate over all students and find that specific user "studentName"?

let studentsList =['ram','shyam','vicky','arun','vijay']; // Data Structure
//Algorithm
function findStudent(allStudents, studentName){
      for(i=0; i< allStudents.length; i++){
        if (allStudents[i] === studentName){
            console.log(`Found ${studentName}`);
            break;
        }else{
            console.log(`${allStudents[i]} does not match ${studentName}`);
        }
      }
}

findStudent(studentsList, 'vicky');//output: Found vicky
findStudent(studentsList, 'steve');//output: Found vicky