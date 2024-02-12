
// Author : Suraj jha
//question
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function yourFirstPattern(n) {
    // Write code here
    for (i=0; i< n; i++){
        let bag = ""
        for(j=0; j<n; j++){
            bag+= "*" + " "
        }
        console.log(bag)
    }
}

yourFirstPattern(6)