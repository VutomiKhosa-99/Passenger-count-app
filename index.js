// document.getElementById("count-el").innerText = 5
// let myAge = 23
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio


// console.log(myDogAge)


// let count = 5

// count = 3 // re-assigning of variable

// count = count + 1 // incrementing of variable


// console.log(count)


// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Cnsole.log the value after each step

// let bonusPoints = 50

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)


// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)


// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

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
 

 


 
 

// Create a function (you decide then name) that logs out the number 42 to the console
// Call/invoke he function

// function logoutNumber () {
//     console.log(42)
// }

// logoutNumber()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// Create a function that logs out the sum of all the lap times

// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with ones
// Run it three times
// function incrementValue() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementValue()
// incrementValue()
// incrementValue()

// console.log(lapsCompleted)

// Create a variable, message, that stores the string: "You have three new notifications"

// let message = "You have three new notifications"

// console.log("message")

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is"

// let name = "Vutomi"
// let greeting = "Hi, my name is"

// Create a third variable, myGreeting, that contatenates the two strings
// let myGreeting =  greeting  + " " + name
// Log myGreeting to the console

// console.log(myGreeting)

//  let points = 4
//  let bonusPoints = "10"

//   let totalPoints = points + bonusPoints

//   console.log(totalPoints)

// console.log(4 + 5) // 9
// console.log("2" + "4") // "24"
// console.log("5" + 2) // "52"
// console.log(100 + "100") // "100100"

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that confirms your name
// and the greeting we want to render on the page
// let name = "Vutomi"
// let greeting = "Hi, welcome to our website "

// let myGreeting = greeting + name

// Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = myGreeting

// Add an emoji to the end!
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

// welcomeEl.innerText += "👋" 