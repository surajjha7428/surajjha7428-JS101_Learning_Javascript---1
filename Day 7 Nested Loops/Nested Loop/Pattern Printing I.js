
// Author : Suraj jha

//question
// * * * * *
// *
// *
// *
// * * * * *

function patternPrinting(n){
	// Write code here
	for(i=1; i<=n; i++){
	    let bag = "";
	    for(j=1; j<= n; j++){
	        if(i==1 || i ==n ||j == 1){
               bag+= "*" + " "	     
            }
            else{
               bag += "";
            }
	    }
	    console.log(bag)
	}
}

patternPrinting(5)