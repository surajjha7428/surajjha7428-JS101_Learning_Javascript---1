
// Author : Suraj jha

//question

function evenSumAgain(num) {
    // Write code here
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            if (j % 2 === 0) {
               sum += j;
            }
        }
        console.log(sum);
    }
}

evenSumAgain(4)