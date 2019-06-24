//Insertion Sort: 

function SelectionSort(a){

 var l = a.length; 

 for(let j = 0; j < l-1; j++){
    
    let iMin = j;

    for(let i = j + 1; i < l; i++){
       if(a[i] < a[iMin]){
          iMin = i
       }
    }

    if(iMin != j){
      //swap(a[j] , a[iMin]);
      var c = a[j]; 
      a[j] = a[iMin];
      a[iMin] = c;
    }

 }

 console.log(a);

}

SelectionSort([2,8,11,5,3,19,14])

//https://www.youtube.com/watch?v=g-PGLbMth_g