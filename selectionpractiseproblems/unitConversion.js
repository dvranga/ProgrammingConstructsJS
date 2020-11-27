let readline=require('readline');
let unitConversion=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

unitConversion.question('enter the value to convert feet to inch ',function(feetToInch){
    unitConversion.question('enter the value to convert feet to meters ',function(feetToMtrs){
        unitConversion.question('enter the value to conver inch to feet ',function(inchToFeet){
            unitConversion.question('enter the value to conver meters to feet ',function(mtrToFeet){
                let value1=parseInt(feetToInch);
                console.log(feetToInch,' feet is equal to : ',value1*12, ' inches');
                let value2=parseInt(feetToMtrs);
                console.log(feetToMtrs,' feet is equal to : ',value2*0.305, ' meters');
                let value3=parseInt(inchToFeet);
                console.log(inchToFeet,' inch is equal to : ',value3*0.0833, ' feets');
                let value4=parseInt(mtrToFeet);
                console.log(mtrToFeet,' meters is equal to : ',value4*3*3.37*0.305, ' feets');
                
                unitConversion.close();
            })
        })
    })
})


