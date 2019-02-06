/**********************
 * Functions
 */

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var johnAge = calculateAge(1990);
var mikeAge = calculateAge(1946);
var janeAge = calculateAge(1963);
console.log(johnAge, mikeAge, janeAge);

function yearUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years. ');
    }else{
        console.log(firstName + ' is already retired. ');
    }
}

yearUntilRetirement(1990, 'John');
yearUntilRetirement(1980, 'Mikw');
yearUntilRetirement(1935, 'Jane');