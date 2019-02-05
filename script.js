
/***************** 
*Operator Precedence
*/

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
