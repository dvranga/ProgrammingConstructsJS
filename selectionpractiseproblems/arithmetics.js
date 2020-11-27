let readline=require('readline');

let arithmetics=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

arithmetics.question('enter the first value ',function(firstValue){
arithmetics.question('enter the second value ', function(secondValue){
arithmetics.question('enter the third value ',function(thirdValue){
    let value1=parseInt(firstValue);
    let value2=parseInt(secondValue);
    let value3=parseInt(thirdValue);
    let first=value1+value2*value3;
    let second=value1%value2+value3;
    let third=value3+value1/value2;
    let fourth=value1*value2+value3
    console.log('sum of arithmetics are ',first,second,third,fourth);
    var array=[first,second,third,fourth];
    for(let values of array ){
        console.log(values);
    }
    const min=()=>array.reduce((min,currentValue)=>Math.min(min,currentValue),array[0])
    const max=()=>array.reduce((max,currentValue)=>Math.max(max,currentValue),array[array.length-1])
    console.log(`Minimum: ${min()}, Maximum: ${max()}`)
    arithmetics.close();
});
});
});
    // const getMinAndMax=()=>{
    //     let min=array[0],max=array[0];
    //     for(let i=0;i<array.length;i++){
    //         let value=array[i];
    //         min=(value>min)?min:value;
    //         max=(value<max)?max:value;
    //     }
    //     array.sort((a,b)=>(a-b));
    //    console.log(array);
    //    min=array[0];
    //    max=array[array.length-1];
    //     return[max,min];
    
    // }
    // const[minimum,maximum]=getMinAndMax();
    // console.log('maximim : ',minimum,'mimimum : ',maximum);