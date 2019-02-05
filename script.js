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
/*
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
*/
/***********************
*Basic Operator
*/
//Math Operator
/*
var year, yearJohn, yearMark;
year = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = year - ageJohn;
yearMark = year - ageMark;

console.log (yearJohn);

console.log (year + 2);
console.log (year * 3);
console.log (year / 2);

//logical Operator
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/***************** 
*Operator Precedence
*/
/*
//Multiple Operator
var fullAge = 18;
var now = 2018;
var johnAge = 1989;
var isFullAge = now - johnAge >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - johnAge;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;x
console.log(average);

//Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6; //8 * 4 - 6  //32 - 6 //26
console.log(x,y);

//More Operator
x += 2;
console.log(x);
x *= 10;
console.log(x);
x++
console.log(x);
x--
consolelog(x);
/**********************
 * Code Challenge 1
 */
/*
var markMass, johnMass, markHeight, johnHeight;
var markBMI, johnBMI;
markMass = 60;
johnMass = 65;
markHeight = 6.1;
johnHeight = 6;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

consol.log(markBMI, johnBMI);

var isBMI = markBMI > johnBMI;
console.log('Is Marks\'s BMI is higer than John\'s? ' + isBMI);
*/
/**********************
 * If else statement
 */
/*
 var firstName = 'John';
 var civilStatus ='single';

 if( civilStatus === 'married'){
     console.log(firstName + ' is a married man!' );
 }else{
     console.log(firstName + ' will hopefully marry soon :) ');
 }

 var isMarried = true;
 if(isMarried){   
      console.log(firstName + ' is a married man!' );
}else{
    console.log(firstName + ' will hopefully marry soon :) ');
}


var markMass, johnMass, markHeight, johnHeight;
var markBMI, johnBMI;
markMass = 60;
johnMass = 65;
markHeight = 6.1;
johnHeight = 6;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

if(markBMI > johnBMI){
    console.log('Mark\'s BMI is higher than John\'s ');
}else{  
    console.log('John\'s BMI is higher than Mark\'s ');
}
*/

/***********************
 * Boolean Logic
 */
var firstName = 'John';
var age = 16;

if(age < 13){
    console.log(firstName + ' ia a boy. ')
}else if(age > 13 && age < 20){
    console.log(firstName + ' is a teenager. ');
}else if(age > 0 && age <40){
    console.log(firstName + ' isa young age. ');
}else{
    console.log(firstName + ' is a man. ');
}

 