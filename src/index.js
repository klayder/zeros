module.exports = function getZerosCount(number) {

var conterTwo=0,conterFive=0;;
  
 	if(!(number%2 == 0)){
  	var k=1;
  }else{
  	k=2;
  }
  //alert(number+" "+k);
  	while(k<number || k==number){
   		var tempKFive=k;
      var tempKTwo=k;
      	while(tempKFive%5 === 0){
        		conterFive++;
      			tempKFive/=5;
        }
        while(tempKFive%2 === 0){
        		conterTwo++;
      			tempKFive/=2;
        }
				
      k+=1;
    }

return conterFive<conterTwo?conterFive:conterTwo;
}
