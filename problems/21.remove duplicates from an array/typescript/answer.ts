let array:Array<number> = new Array();
let arrayNew:Array<number> = new Array();


array = [1,2,4,2,2,4,5,6,7,10,10];

array.forEach( value => {
    if(arrayNew.indexOf(value) === -1){
        arrayNew.push(value);
    }
});


console.log(arrayNew);
