
function findUniq(arr) {
    let temp = arr[0]

    if(temp > arr[1]){
        return temp
    }

    if(arr[arr.length-3] === arr[arr.length-2]){
        if(arr[arr.length - 2] > arr[arr.length -1]){
            return arr[arr.length-1]
        }
    }

    for(let i = 1; i < arr.length; i++){
        if(temp !== arr[i]){
            return arr[i]
        }
    }
    return temp;
}


console.log(findUniq([1,0,0]))
console.log(findUniq([ 3, 10, 3, 3, 3 ]));
console.log(findUniq([ 3, 3, 3, 3, 7 ]));
console.log(findUniq([ 1,1,1,1,1,1,1,1,9]));