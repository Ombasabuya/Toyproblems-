let studentMarks = parseInt(prompt('Kindly Enter Student Marks:'));
function checkStudentGrade(studentMarks)
{
    if (studentMarks > 79 && studentMarks < 100) {
        console.log("Grade: A");
        
      } else if (studentMarks >= 60 && studentMarks <= 79) {
        console.log("Grade : B");

      } else if (studentMarks > 49 && studentMarks <= 59) {
        console.log("Grade : C");
 
      } else if (studentMarks > 40 && studentMarks <= 49) {
        console.log("Grade : D");

      } else if (studentMarks >= 0 && studentMarks <= 40) {
        console.log("E");

      } else {
        console.log("Enter Valid marks")        
      }
}
document.getElementById("studentMarks").innerHTML = studentMarks;

//console.log(checkStudentGrade(studentMarks));