"use strict";

(function(){
   const values = [];//array to represent
   const oneBar = document.querySelectorAll('.block');//each bar in the gragh(GUI)
   const upperArray = document.querySelectorAll('.Ablock');//top array items(GUI)
   const startBtn = document.getElementById("start");//start button
   const restartBtn = document.getElementById("resstart");//restart button
   
   
   //fill array with random values between 0 and 100
   for(let i=0; i<35; i++){
       let randomNumber = Math.ceil(Math.random()*100); 
       values.push(randomNumber);
   }
   
   /*
     set bar GUI initial values
   */
   oneBar.forEach( (bar, index) => {
      let per = values[index]; 
      setTimeout( () => {
         bar.style.backgroundImage = `-webkit-linear-gradient(bottom, #ffd600, red ${per}%, transparent 0%, transparent 100%)`;
      }, per);
   });
   
   /*
   set top array GUI initial values
   */
   upperArray.forEach( (item, index) => {
         item.innerHTML = values[index];
   });
   
   /*
   Handle restart event
   */
   restartBtn.addEventListener('click', () => {
      window.location.reload();
   });
   
   
   /*
   Handle start event
   */
   start.addEventListener('click', () => {
      start.style.display = "none";
      insertionSort(values);
   });
   
   /*
   insertion sort algorithm
   */
   async function insertionSort(inputArr) {
        let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            let current = inputArr[i];
            upperArray[i].style.border = "4px solid red";
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
            await handleBarAnimation(inputArr);
            await handleUpperArray(inputArr);
            upperArray[j+1].style.border = "4px solid red";
            await delay();
            upperArray[j+1].style.border = "4px solid #388e3c";
            upperArray[0].style.border = "4px solid #388e3c";
            upperArray[i].style.border = "4px solid #388e3c";
            
        }
   }
   
   
   /*
   promise to handle bar GUI changes
   */
   function handleBarAnimation(inputArray){
       return new Promise( (resolve, reject) => {
           oneBar.forEach( (bar, index) => {
             let per = inputArray[index]; 
             setTimeout( () => {
                bar.style.backgroundImage = `-webkit-linear-gradient(bottom, #ffd600, red ${per}%, transparent 0%, transparent 100%)`;
                resolve("ok");
             } , 500);
          });
       });
   }
   
   /*
   promise to top array GUI changes
   */
   function handleUpperArray(inputArray){
       return new Promise( (resolve, reject) => {
             setTimeout( () => {
                upperArray.forEach( (item, index) => {
                    item.innerHTML = inputArray[index];
                });
                resolve("ok");
             } , 100);
       });
   }
   
   /*
   promise make a delay
   */
   function delay(){
       return new Promise( (resolve, reject) => {
             setTimeout( () => {
                resolve("ok");
             } , 500);
       });
   }
   
})();
