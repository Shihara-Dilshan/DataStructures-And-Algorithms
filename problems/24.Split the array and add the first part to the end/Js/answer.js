let arr = [12, 10, 5, 6, 52, 36];

let splitPart = arr.splice(0,2);

arr = [...arr, ...splitPart];

console.log(arr);