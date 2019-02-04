/*****************
* variables and data types
*/
/*
var firstName = 'Muna';
console.log(firstName);
var lastName = 'Rai';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job)

job = 'Teacher';
console.log(job);

//variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/

/********************
 * variable mutation and type coercion
 */
var firstName = 'John';
var age = 28;;
console.log(firstName +' '+ age);

var job, isMarried;
job = 'teacher';
isMarried = 'false';
console.log(firstName +' is a ' + age + ' year old ' + job + ' Is he married ? ' + isMarried);

//variable mutation
age = 'Twenty eight';
job = 'Driver';
alert(firstName +' is a ' + age + ' year old ' + job + ' Is he married ? ' + isMarried);

var lastName = prompt("What is his lastname ? ");
console.log(firstName + ' ' + lastName);