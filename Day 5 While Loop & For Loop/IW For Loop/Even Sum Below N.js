
// Wrote by Suraj jha
// Linkdin : https://www.linkedin.com/in/aman-mittal-22833b288/

function evenSumBelowN(num) {
    // Write code here
    let sum = 0;
    for(let i = 1;i<num;i++){
        if(i%2==0){
            sum += i;
        }
    }    
    console.log(sum)
}

evenSumBelowN(6)