
// Author : Suraj jha

function charAtOddPos(N,str) {
    //write code here
    for(i=0; i < N; i++)
    {
        if(i % 2===1 )
        {
            console.log(str[i]);
        }
    }
    
}

charAtOddPos(10,"Aman mittal") //-->mnmta in horizontal line