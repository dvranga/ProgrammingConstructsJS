const { parse } = require('path');
let readline=require('readline');

let temperatureConversion=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

temperatureConversion.question('Enter 0 => celisus and 1 => foreign heat ',function(input){
    temperatureConversion.question('Enter the value to convert ',function(temp){
        let conversion=0;
        let value=parseInt(input);
        let temperature=parseInt(temp);
            switch(value){
                case 1:
                    conversion=(temperature*9/5)+32;
                    console.log(temperature,'celsisus : ',conversion,"foreign heat ");
                    break;
                case 0:
                    conversion=(temperature-32)*5/9;
                    console.log(temperature,'foreign heat : ',conversion,"celsius ");
                default:
                    console.log('enter proper value');
                    temperatureConversion.close();
            }
            temperatureConversion.close();
    })
})