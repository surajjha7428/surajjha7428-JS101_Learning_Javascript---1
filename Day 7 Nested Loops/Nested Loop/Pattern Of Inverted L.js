
// Author : Suraj jha

//question
// * * * * *
// *
// *
// *
// *

function invertedL(N) {
    // Write code here
    for(i=1; i <= N; i++){
        let bag = "";
        for(j=1;j<=N;j++){
            if(i ==1 || j == 1){
                bag += "*" + " "
            }
            else{
                bag += ""
            }
        }
        console.log(bag)
    }
}

invertedL(4)