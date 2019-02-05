/**********************
 * Code Challenge 1
 */

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