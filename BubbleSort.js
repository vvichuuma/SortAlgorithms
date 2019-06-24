
//Bubble Sort Algorithm in Javascript: 

var a = [5,14,3,21,10,2,7,1]; 

var l = a.length; 

for(let i = 0; i < l-1; i++){

    
    for(let j = 0; j < l-1; j++){
         
         if(a[j] > a[j+1]){
            c = a[j+1]; 
            a[j+1] = a[j]
            a[j] = c
         }


    }


}

console.log(a);

//Big O Complexity - o(n2)
//Bubble sort is pretty much a Loop within a loop