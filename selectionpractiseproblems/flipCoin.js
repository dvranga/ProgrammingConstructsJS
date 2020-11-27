var readline=require('readline');
var enter=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

enter.question('Enter any thing to flip the coin ',function(){
    let value=Math.floor(Math.random()*10)%2;
    (value==1)?console.log('Heads'):console.log('Trails');
    enter.close();
});