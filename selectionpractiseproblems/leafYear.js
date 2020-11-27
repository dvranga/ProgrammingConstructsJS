var readline=require('readline');
var checkLeafYear=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

checkLeafYear.question('Enter the year',function(year){
      const checkYear=parseInt(year);
      console.log("Enter year is ",checkYear);
      let result;
      if(checkYear>1000){
            result=(checkYear%400==0)?true:(checkYear%100==0)?false:(checkYear%4)?true:false
      }
      else{
          console.log('Please enter 4 digit number to check the leaf year');
      }
      if(result){
          console.log('Leaf Year');
      }
      else{
          console.log('Not leaf year');
      }
      checkLeafYear.close;
    });