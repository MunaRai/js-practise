//var drink = age >= 18 ? 'beer' : 'juice');
//console.log(drink);

//Switch statement

var firstName = 'john';
var job = "teacher";
switch(job){
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives in uber in lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' design beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

var age = 10;
switch(true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age > 13  && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >=20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man. ');
} 