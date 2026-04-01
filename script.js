// //  PASSENGER COUNTER APP
// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
// let showEl = document.getElementById("show-el")

// let count = 0
// console.log(count);

// function increment() {
//   count = count + 1
//   countEl.textContent = count
//   showEl.innerText =  "✅ " + count 
//   console.log(count);
// }

// function save() {
//   let savings = count + " - "
//  saveEl.textContent += savings
//  countEl.textContent = 0
//  count = 0
// }

//  PASSENGER COUNTER APP ENDED

// E-COMMERCE ERROR MESSAGE APP

// let errorEl = document.getElementById("error-el")

// function purchase() {
//     errorEl.innerText = "something went wrong, please try again"
// }

// E-COMMERCE ERROR MESSAGE APP ENDED

// MINI CALCULATOR
// let num1 = 8
// let num2 = 2

// let num1El = document.getElementById("num1-el").textContent = num1
// let num2El = document.getElementById("num2-el").textContent = num2
// let sumEl = document.getElementById("sum-el")

// function addition() {
//     let result = num1 + num2
//     sumEl.textContent ="sum: " + result 
// }

// function subtraction() {
//     let result = num1 - num2
//     sumEl.textContent = "sum: " + result
// }

// function division() {
//     let result = num1 / num2
//     sumEl.textContent = "sum: " + result
// }

// function multiply() {
//    let result = num1 * num2
//    sumEl.textContent = "sum: " + result 
// }

// MINI CALCULATOR ENDED


// BLACKJACK GAME APP
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardEl = document.getElementById("cards-el")
// let playerEl = document.getElementById("player-el")

// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = " "
// let player = {
//     name: "per",
//     chips: 145
// }

// playerEl.textContent = player.name + ":" + " $" + player.chips
 
// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random()* 13) + 1
//      if (randomNumber > 10) {
//        return 11
//     }else if (randomNumber === 1) {
//        return 10
//     }
//     return randomNumber
// }

// function startGame() {
// isAlive = true
// let firstNumber = getRandomCard()
// let secondNumber = getRandomCard()
// sum = firstNumber + secondNumber
// cards=[firstNumber,secondNumber]

//    renderGame() 
// }


// function renderGame() {
//   sumEl.textContent = "Sum: " + sum
//   cardEl.textContent = "Cards: "

//   for (let i = 0; i < cards.length; i += 1) {
//     cardEl.textContent += cards[i] + " "
//   }

//     if (sum <= 20) {
//         message = "draw a new card"
//     }
//     else if (sum === 21) {
//         message = "you won a blackjack huray"
//         hasBlackJack = true  
//     }
//     else {
//         message = "you are out of the game"
//         isAlive = false
//     }
    
//     messageEl.textContent = message
// }

// function newCard() {
//     if(isAlive === true && hasBlackJack === false) {
//     let card = getRandomCard()
//         sum += card
//         cards.push(card)
//         console.log(cards)
//         renderGame() 
//     }
    
// }

// BLACKJACK GAME APP ENDED 

// RECAP
// let person = {
//     name: "Sanusi",
//     age: 12,
//     country: "Nigeria"
// }

// function logData() {
//     let info = person.name + " is " + person.age + " years old and lives in " + person.country
//     console.log(info)
// }
// logData()

// let age = 84

// if(age < 6) {
//    console.log("Free")
// }else if(age < 18) {
//     console.log("child discount")
// }else if(age < 27) {
//     console.log("student discount")
// }else if(age < 67) {
//     console.log("full price")
// }else{
//     console.log("senior citizen discount")
// }

// let largeCountries = ["china","india","usa","indonesia","pakistan"]

// for(let i = 0; i < largeCountries.length; i ++) {
//     console.log(" - " +largeCountries[i])
// }


// let largeCountries = ["tuvalu","india","usa","indonesia","moncao"]
// largeCountries.pop()
// largeCountries.shift()
// largeCountries.push("pakistan")
// largeCountries.unshift("china")
// console.log(largeCountries)

// let dayOfMonth = 13
// let weekDay = "friday"

// if(dayOfMonth === 13 && weekDay === "friday") {
//     console.log("🤥")
// }else{
//     console.log("no way")
// }

// let hands =  ["rock","paper","scissor"]

// function myHands() {
//     let randomNumber = Math.floor(Math.random()*3)
//     return hands[randomNumber]
// }
// console.log(myHands())

// let fruits = ["🍎","🍊","🍎","🍎","🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")


// function appleBtn() {
//    for(let i = 0; i < fruits.length; i ++) {
//       if(fruits[i] === "🍎") {
//           appleShelf.textContent += "🍎"
//       }
//    }
// }

// function orangeBtn() {
//     for(let i = 0; i < fruits.length; i ++) {
//         if(fruits[i] === "🍊") {
//             orangeShelf.textContent += "🍊"
//         }
//     }
// }




// function myFruits() {
//     for(let i = 0; i < fruits.length; i ++){
//      if (fruits[i] === "🍎") {
//      appleShelf.textContent +=  "🍎" 
//      }
//      else if(fruits[i] === "🍊" ) {
//         orangeShelf.textContent += "🍊"
//      }
//     }
// }
// myFruits()
// myFruits()
 
// let name = "tobi"
// console.log(name)
// let name = ["tobi","kunle", "shalewa"]
// name.push("john")
// name.unshift("rose")
// console.log(name)

// let cardEl = document.getElementById("cards-el")
// let sumEl = document.getElementById("sum-el")
// let messageEl = document.getElementById("message-el")



// let cards = []
// let sum = 0
// let message = ""
// hasBlackJack = false
// isAlive = false

// function startGame() {
//  let firstCard = getRandomCard()
//  let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard
//     isAlive = true
//     renderGame()
    
// }

// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random()*13)+1
//     if(randomNumber > 10) {
//        return 10
//     }else if(randomNumber === 1 ) {
//         return 11
//     }else {
//         return randomNumber
//     }
// }

// function renderGame() {
//    cardEl.textContent ="Cards: " + cards
//    sumEl.textContent = "Sum: " + sum

//    if(sum < 21) {
//        message = "Draw a new card"
//    }else if(sum === 21) {
//        message = "Wooh you won a BlackJack"
//        hasBlackJack = true
//    }else {
//     message = "You are out of the game"
//     isAlive = false
//    }
//    messageEl.textContent = message
// }

// function newCard() {
//   if(isAlive === true && hasBlackJack === false) {
//     let newCard = getRandomCard()
//   cards.push(newCard)
//   sum += newCard
//   renderGame()  
// } 
// }


// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// let fruits = ["🍎","🍊","🍊","🍎","🍊","🍎"]

// function appleBtn() {
//     for(let i = 0; i < fruits.length; i++) {
//       if(fruits[i] === "🍎") {
//          appleShelf.textContent += "🍎"
//       }
//     }
// }


// function orangeBtn() {
//     for(let i = 0; i < fruits.length; i++) {
//        if(fruits[i] === "🍊" ) {
//          orangeShelf.textContent += "🍊"
//        }
//     }
// }





// let airBnb = {
//     name: "castle",
//     age: 60,
//     isFree: true,
//     location: ["china", "ghana"]
// }
// console.log(airBnb.location[0])
// console.log(airBnb.age)
// console.log(airBnb.name)

// let likeDocumentaries = true
// let likeStartUps = false

// if (likeDocumentaries === true || likeStartUps === true) {
//       recommendMovies() 
// }

// function recommendMovies() {
//      console.log("hey, check out this new film")
// }


// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if(hasSolvedChallenge === false && hasHintsLeft === false) {
//      showSolution()
// }

// function showSolution() {
//     console.log("showing the solution....")
// }


// function rollDice() {
//     let randomNumber = Math.floor(Math.random()*6 ) +1
//     return randomNumber
    
// }
// console.log(rollDice())

// let race1 = 200
// let race2 = 300

// function totalRaceTime() {
//      return race2
// }
// let allRace = totalRaceTime()
// console.log(allRace)

// let cards = [2,3,6,4]

// for (let i = 0; i < cards.length; i += 1) {
//     console.log(cards[i])
// }

// let sentence = ["hello","my","name","is","per"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i += 1) {
//    greetingEl.textContent += sentence[i] + " "
// }

// let myProperties =[
//     "zero experience",
//     "bsc",
//     "no licenses",
//     "footballer"
// ]

// let newProperties = "i am alive"
// myProperties.push(newProperties)
// console.log(myProperties)

// console.log(myProperties[2])
// console.log(myProperties[0])
// console.log(myProperties[3])
// console.log(myProperties[1])

// jhjhjhj


// let age = 1000

// if (age < 100) {
//     console.log("Not eligible");
// }
// else if(age === 100) {
//  console.log("here is your card from the king");
// }
// else{
//     console.log("not eligible, you have a card already");
// }

// let age = 20

// if (age < 21) {
//    console.log("you cannot enter the club");
// }
// else{
//     console.log("Welcome Otondo");
// }



// let firstName = "Daniel"
// let secondName = "poland"
// let fullName = firstName + " " + secondName
// console.log(fullName);

// let name = "Linda"
// let greeting = "Hi there"

// function myGreeting() {
// let welcome = greeting +", "+ name +"!"
// console.log(welcome);
// }
//  myGreeting()


 
// let myPoints = 3

// function add3Points() {
//   myPoints = myPoints + 3
// }
// add3Points()
// add3Points()
// add3Points()

// function remove1Point() {
//   myPoints = myPoints - 1
// }
// remove1Point()
// remove1Point()

// console.log(myPoints);








// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
// let displayEl = document.getElementById("display-el")


// let count = 0

// function increment() {
//   count += 1
//   countEl.innerText = count
//   displayEl.innerText = countEl.innerText
//   console.log(count);
// }

// function save() {
//  let entry = count + "- " 
//   saveEl.innerText += entry
// }

// function remove() {
// let erase = count
// saveEl.textContent += erase

// console.log(erase);
// }






// console.log(4+5)
// console.log("2"+"4");
// console.log("5"+1);
// console.log(100+"100");

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Dami"
// let greetings = "Welcome back"
// welcomeEl.innerText = greetings + " " + name 
// welcomeEl.innerText += "👋🏼"


// let name = "Sanusi Oyindamola"
// let greeting = "Hi, my name is"
// let myGreeting = greeting + " " + name
// console.log(myGreeting);

// let name = "Dami"
// let message = "you have three new notifications"
// let messageToUser = name + ", " + message
// console.log(messageToUser)



// let lapsCompleted = 0

// function increment() {
// lapsCompleted = lapsCompleted + 1
// }

// increment()
// increment()
// increment()

// console.log(lapsCompleted)

// let lap1 =34
// let lap2 = 33
// let lap3 = 36
// let sum = lap1 + lap2 + lap3

// function totalLapTime() {
//    console.log(sum) 
// }
// totalLapTime() 

// function countDown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countDown()

// function callNumber() {
//     console.log(42)
// }
// callNumber()


//  let myAge =31
//  let humanDogRatio = 7
//  let myDogAge = myAge * humanDogRatio
//  console.log(myDogAge)

// const name = "hello world" 
// console.log(name)

// let count = 4
// count += 1
// console.log(count)

// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints=bonusPoints + 45
// console.log(bonusPoints)

// let myAge = 28
// console.log(myAge)


//COUNTER PASENGER APP

// document.getElementById("count-el").innerText=5

//COUNTER PASENGER APP ENDED