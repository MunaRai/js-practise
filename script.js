/************************
 * Code Challenge 2
 */

 var johnTeam, mikeTeam, marryTeam;

 var johnFirstGameScore = 100;
 var johnSecondGameScore = 120;
 var johnThirdGameScore = 103;

 var mikeFirstGameScore = 100;
 var mikeSecondGameScore = 120;
 var mikeThirdGameScore = 103;

 var marryFirstGameScore = 100;
 var marrySecondGameScore = 120;
 var marryThirdGameScore = 103;

 var averageOfJohnTeam, averageOfMikeTeam, averageOfMarryTeam;

 averageOfJohnTeam = (johnFirstGameScore + johnSecondGameScore + johnThirdGameScore)/3;
 console.log(averageOfJohnTeam + ' is the average score of Team John. ');

 averageOfMikeTeam = (mikeFirstGameScore + mikeSecondGameScore +mikeThirdGameScore)/3;
 console.log(averageOfMikeTeam + ' is the average score of Team Mike. ');

 averageOfMarryTeam = (marryFirstGameScore + marrySecondGameScore + marryThirdGameScore)/3;
 console.log(averageOfMarryTeam + ' is the average score of Team Marry. ');

 if(averageOfJohnTeam > averageOfMikeTeam && averageOfJohnTeam > averageOfMarryTeam){
     console.log(averageOfJohnTeam + ' is the average score of Team John which is the highest.');
 }else if(averageOfMikeTeam > averageOfJohnTeam && averageOfMikeTeam > averageOfMarryTeam){
    console.log(averageOfMikeTeam + ' is the average score of Team Mike which is the highest.');
 }else if(averageOfMarryTeam > averageOfJohnTeam && averageOfMarryTeam > averageOfMikeTeam){
    console.log(averageOfMikeTeam + ' is the average score of Team Mike which is the highest.');
 }else{
    console.log('The Same average score.');
 }