
/**********************
 * If else statement
 */

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

