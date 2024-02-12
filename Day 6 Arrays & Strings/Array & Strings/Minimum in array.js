
// Author : Suraj jha



function minimumInArray(N,arr){
    //write code here
    let min = 1000000000000;
    for (i=0; i<N; i++)
    {
        if(min > arr[i])
        {
            min= arr[i]
        }
    }
    console.log(min)
}

minimumInArray(5,[2,24,656,87,34])