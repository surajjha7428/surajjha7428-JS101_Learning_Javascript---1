// Author : Suraj jha

//question
// 4 3 2 1
// 4 3 2 1
// 4 3 2 1
// 4 3 2 1

function nestedReversePattern(n){
	// Write code here
	for(i=1; i<=n; i++){
	    bag = "";
	    for(j=n; j >= 1; j--){
	        bag += j + " ";
	    }
	    console.log(bag)
	}
}

nestedReversePattern(4)