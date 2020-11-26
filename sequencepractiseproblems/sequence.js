//single digit
let randomvalue=Math.floor(Math.random()*10);
console.log("SINGLE RANDOM VALUE: "+randomvalue);

//dice
let dice1=Math.floor(Math.random()*10)%6+1;
console.log("Dice Number: "+dice1);


let dice2=Math.floor(Math.random()*10)%6+1;
console.log("Dice Number: "+dice2);

console.log("sum of two dice are ",(dice1+dice2));

//sum of two digit values
let firstValue=Math.floor(Math.random()*20);
let secondValue=Math.floor(Math.random()*20);
console.log("Sum of two values are : ",firstValue+secondValue);

//Unit Conversion
let feet=12;
let inche=1/12;
console.log("42 inches are equal to : ",42*1/12," feets");

//Rectangle
let feetInMtr=0.305;
let side1=60*feetInMtr;
let side2=40*feetInMtr;
console.log("The reactangle plot value is : ",side1*side2," meters");
let value=side1*side2;
let plots=25;
let acre=0.000247;
console.log("25 such plots are equal to : ",25*value*acre," acres");