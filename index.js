// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
// 1. Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") // pass in argument
let sumEl = document.getElementById("sum-el")


let initial = 0
let count = 0
let sum = 0 

function increment() {
    count += 1
    countEl.textContent = count
 }


 // 1. Create a function, save(), which log out the count when it's called

 let previousEnteries = 0

function save() {
    // 2. Create a variable that contains both count and the dash
    previousEnteries = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += previousEnteries
    // NB: Make sure to not delete the existing content of the paragraph

    sum = sum + count
    sumEl.textContent = `Total People entered: ${sum}`
    countEl.textContent = 0
    count = 0
    

 }

 
 function reset() {
    sum = 0 
    sumEl.textContent = `Total People entered: ${sum}`
    countEl.textContent = 0
    count = 0
    saveEl.textContent = `Previous enteries: ${initial} - `
    
    
 }
 