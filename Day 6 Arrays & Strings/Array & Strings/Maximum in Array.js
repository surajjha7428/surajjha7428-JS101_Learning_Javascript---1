
// Author : Suraj jha



function maximumInArray(N,arr){
    //write code here
    let max = -Infinity;
    for (i=0; i<N;  i++)
    {
        if(max <= arr[i])
        {
           max = arr[i];
        }
    }
    console.log(max)
}

maximumInArray(6,[1,2,3,4,5,6])