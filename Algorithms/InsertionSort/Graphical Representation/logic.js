"use strict";

(function(){
   const values = [15,17,11,12,42,63,75,82,18,16,19,15,57,16,20,31,15,22,38,36,45,1,94,7,0,10,20,14];//array to represent
   const oneBar = document.querySelectorAll('.block');//each bar in the gragh(GUI)
   const upperArray = document.querySelectorAll('.Ablock');//top array items(GUI)
   const startBtn = document.getElementById("start");//start button
   const restartBtn = document.getElementById("resstart");//restart button
   
   /*
     set bar GUI initial values
   */
   oneBar.forEach( (bar, index) => {
      let per = values[index]; 
      setTimeout( () => {
         bar.style.backgroundImage = `-webkit-linear-gradient(bottom, #ffd600, #ffd600 ${per}%, transparent 0%, transparent 100%)`;
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
            upperArray[0].style.border = "4px solid green";
            upperArray[i].style.border = "4px solid green";
            
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
                bar.style.backgroundImage = `-webkit-linear-gradient(bottom, #ffd600, #ffd600 ${per}%, transparent 0%, transparent 100%)`;
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
   
})();
