module.exports = function getZerosCount(number) {

var conterTwo=0,conterFive=0;;

  k=5;
  	while(k<number || k==number){
   		var tempKFive=k;
    
      	while(tempKFive%5 === 0){
        		conterFive++;
      			tempKFive/=5;
        }
        
				
      k+=5;
    }






return conterFive;
}
