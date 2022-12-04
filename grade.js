/*Challange 1-3  Instructions )

     Challenge 1:


 Student Grade Generator (Toy Problem)
Write a function that prompts the user to input student marks. 
The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

 A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function myGrading(score) 

{
  var gscore;

  switch(true) {
    case (score <= 100 && score >= 79):
       gscore = 'A';
        break;
    case (score <= 79 && score >= 60):
        gscore = 'B';
         break;
    case (score <= 59 && score >= 49):
        gscore = 'C';
         break;
       case (score <= 49 && score >= 40):
        gscore = 'D';
         break;

    case (score > 100 && score < 40):
        gscore = 'you have scored invlid grade ';
        break; 

    default:
      return 'you have scored invlid grade';
  }

  return gscore;
};

console.log(myGrading(9));
console.log(myGrading(50));
console.log(myGrading(40));
console.log(myGrading(70));
console.log(myGrading(40));
console.log(myGrading(66));

/*
Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
*/

function marksChecker(x, min, max) {
  return x >= min && x <= max;
}
function marksGenerator(marks) {

  if (marksChecker(marks, 0, 100)) {
      if (marks > 79) {
          console.log("Your grade is : A");
      } else if (marksChecker(marks, 60, 79)) {
          console.log("Your grade is :B");
      } else if (marksChecker(marks, 50, 59)) {
          console.log("Your grade is :C");
      } else if (marksChecker(marks, 40, 49)) {
          console.log("Your grade is :D");
      } else {
          console.log("Your grade is :E");
      }
  }
  return marks;
}
let result = marksGenerator(80);
console.log(result);

