let array = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 10, 11];

let newArray = [];

array.forEach((value) => {
  if (newArray.indexOf(value) === -1) {
    newArray.push(value);
  }
});

console.log(newArray);
