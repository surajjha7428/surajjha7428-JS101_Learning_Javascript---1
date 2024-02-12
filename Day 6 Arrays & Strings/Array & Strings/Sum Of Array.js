
// Author : Suraj jha

function ArraySum(n, arr){
    //write code here
    let sum = 0;
    for(i=0; i < n; i++)
    {
        sum = sum + arr[i];
    }
    console.log(sum);
}

ArraySum(5,[8,7,6,54,4])