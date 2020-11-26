
var value=[1,2,3,4,5];
let count=0;
while(count<5){
    value[count]=Math.floor(Math.random()*1000);
    console.log(value[count]);
    count++;
}
function forLoopMinMax() {
    let min = value[0], max = value[0]
  
    for (let i = 1; i < value.length; i++) {
      let values = value[i]
      min = (values < min) ? values : min
      max = (values > max) ? values : max
    }
  
    return [min, max]
  }
  
  const [forLoopMin, forLoopMax] = forLoopMinMax()
  console.log(`Minimum: ${forLoopMin}, Maximum: ${forLoopMax}`)