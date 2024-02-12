
// Author : Suraj jha

//question
// * * * * *
//         *
//         *
//         *
// * * * * *

function patternPrinting3(n){
	// Write code here
	for(i=1; i<=n; i++){
	    let bag = "";
	    for(j=1; j <= n; j++){
	        if(j== n||i==1 || i==n){
	            bag += "*" + " ";
	        }
	        else{
	            bag += "  ";
	        }
	    }
	    console.log(bag);
	}
}

patternPrinting3(5)