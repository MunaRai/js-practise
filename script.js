/******************************************************
 * Truthy and falsy values and equality operators
 */

 //Falsy values: undefined, null, 0, '' , NaN(Not a Number)
 //Truthy values: not Falsy values

 var height;
 height = 23;
 if(height || height === 0){
     console.log('Variable is defined.');
 }else{
     console.log('Variable has not defined.');
 }

 //Equality Operator

 if(height == '23'){
     console.log('The == operator does type coercion.');
 }else{
     console.log('The == operator doesnot do type coercion.');
 }