
// Author : Suraj jha


function reverseArrayTraversal(n, arr){
    //write code here
      let a = arr.reverse();
      let bag = "";
      for (i=0; i<n; i++)
      {
          bag+= arr[i] + " ";
      }
      console.log(bag)
}

reverseArrayTraversal(6,[6,568,64,56,24,84])