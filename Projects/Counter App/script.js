//  document.getElementById("count-el").innerText=5
// intilize the count as 0n
// listen for clicks on the increment button 
// increment the count variables when the buttoon is Clicked 
// chnage the count-el in the HTML to reflect the new count 


let count = 0;

let countEl = document.getElementById("count-el");

function increment() {
    count++;
    countEl.innerText = count;
}



