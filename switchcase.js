let marks = 188;

let grade;
let result;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 70) {
  grade = "B";
} else if (marks >= 50) {
  grade = "C";
} else if (marks >= 40) {
  grade = "D";
} else {
  grade = "F";
}

switch (grade) {
  case "A": //if(grade == 'A')
    console.log("You Scored Distinction");
    break;
  case "B":
    console.log("You scored First class");
    break;
  case "C":
    console.log("You scored Second class");
    break;
  case "D":
    console.log("You scored Third class");
    break;
  default:
    console.log("You Failed");
    break;
}
