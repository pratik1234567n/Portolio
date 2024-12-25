// defination of the function EmployeeInfo
function EmployeeInfo(name,Salary)
{
console.log("Wellcome " + name+ " Your monthly Salary is "+ Salary)
}
const EmpSkills= (skills)=> {
    console.log("Expert in"+skills)
}
console.log ("This is my first progame");
var EmpName="John";
var EmpSalary= 50000;
// calling of the function EmployeeInfo
EmployeeInfo(EmpName,EmpSalary)
EmpSkills("java")

const student= require('./StudentInfo');
const person = require('./Person');
// because getName is the function so we use ()
Console.log("Student Name:" +student.getName());
Console.log("Location:" +student.getLocation());
Console.log("Date of Birth:" +student.dob);
// because dob is a variable so we do nt use ()
Console.log("grade is :"+student.Studentgrade(55));
// creating new Person
const person1= new person("Jim","USA","myemail@gmail.com");
Console.log(person1.getPersonInfo());


    