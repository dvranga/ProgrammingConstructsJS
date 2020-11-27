let readline=require('readline');
let magicNumber=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

magicNumber.question('Enter the number to check the magic number : ',function(number){
    let num=parseInt(number);
    const getMagicNumber=()=>{
        let  sum = 0; 
       while (num > 0 || sum > 9) 
       { 
           if (num == 0) 
           { 
               num = sum; 
               sum = 0; 
           } 
           sum += Math.round(num % 10); 
           console.log(sum);
           num /= 10; 
       }        
       console.log('sum',sum);
       return (sum == 1); 
    }

    if(getMagicNumber()) console.log('Magix number');
    else console.log('Not a magic number');


});