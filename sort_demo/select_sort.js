console.log("select_sort")
function selectSort(arr){
    console.time("select_sort time is: ")
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                var temp = "";
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    console.timeEnd("select_sort time is: ")
}
var array = [6,3,7,2,9,4,6,5];
console.log("before: "+array);
selectSort(array)
console.log("after: "+array);