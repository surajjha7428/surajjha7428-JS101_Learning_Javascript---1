
// Author : Suraj jha


function printHorizontalArray(N,arr){
    //write code here
    let bag = "";
    for(i=0; i<N; i++)
    {
        bag+= arr[i] + " ";
    }
    console.log(bag);
}

printHorizontalArray(5,[1,2,3,4,5])