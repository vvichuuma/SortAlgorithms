


//Insertion Sort: 

function InsertionSort(a){


    for(let i = 0; i < a.length; i++){

       var j = i

       while(j > 0 && a[j-1]>a[j] ){
            
            var c = a[j-1];
            var key = a[j];
            a[j] = c;
            a[j-1] = key;
            j = j -1;
       }

   
    }

    console.log(a);

}

InsertionSort([2,8,5,3,9,4])