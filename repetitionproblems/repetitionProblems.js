let readline =require('readline');
let powerOfTwo=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

powerOfTwo.question(' Enter the number to get power of 2 : ',function(power){
    powerOfTwo.question(' Enter the number to nth hormonic number : ',function(number){ 
        powerOfTwo.question(' Enter the to find prime or not ',function(prime){
            powerOfTwo.question(' Enter the to find factorial of a number ',function(factorial){
                powerOfTwo.question(' Enter the to find factors of a number ',function(factors){

                let value=parseInt(power);
                for(let i=0;i<=value;i++){
                    console.log(Math.pow(2,i));
                }

                let value1=parseInt(number);
                sum=1;
                for(let i=0;i<=value1;i++){
                    sum+=1/sum++;
                }
                console.log('value is : ',sum);

                let primeCheck=parseInt(prime);
                let count =1;
                let index=0;
                while(count<primeCheck/2){
                    if(primeCheck%count==0){
                        index++;
                    }
                    count++;
                }
                let result=(index<2)?' a ':' not a';
                console.log('given number is ',result,'primenumber')

                let fact=parseInt(factorial);
                let f=fact;
                factSum=1;
                findFactorial=()=>{
                    while(f>0){
                        factSum=factSum*(f)
                        f--;
                    }
                    return factSum;
                }
                console.log(findFactorial());

                let findFactors=parseInt(factors);
                let z=0;
                var fac=[];
                const getFactors=()=>{
                    for(let i = 1; i <= findFactors; i++) {
                        if(findFactors % i == 0) {
                            fac[z]=i;
                            z++;
                        }
                    }
                    return fac;
                }
                let factor=getFactors();
                
                for(let show of factor){
                    console.log(show);
                }
                powerOfTwo.close();
            })
        })
    })
})

})