
// Author : Suraj jha


function oddArray(n, arr){
    //write code here
    for(i=0; i<n; i++)
    {
        if(arr[i] % 2 === 1)
        {
            console.log(arr[i])
        }
    }
}

oddArray(7,[35,56,234,23,15,34])