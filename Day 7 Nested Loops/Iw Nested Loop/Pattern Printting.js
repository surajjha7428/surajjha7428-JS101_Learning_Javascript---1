
// Author : Suraj jha

//question
// *
// * * 
// * * *
// * * * *

function patternPrinting(N) {
    // Write code here
   
    for(i=1; i<=N; i++){
         let bag ="";
        for(j=0; j<i; j++){
            bag += "*";
        }
        console.log(bag);
    }
}

patternPrinting(4)