console.log("bubble_sort")
function bubbleSort(arr){
    console.time("bubble_sort time is: ")
    for(var i = 0;i<arr.length-1;i++){
        for(var j = 0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                var temp = "";
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.timeEnd("bubble_sort time is: ")
}
var array = [6,3,7,2,9,4,6,5];
console.log("before: "+array);
bubbleSort(array)
console.log("after: "+array);