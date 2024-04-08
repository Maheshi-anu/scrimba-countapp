// document.querySelector(".count-elem").innerText = "5";

// let count = 0
// console.log(count)

// let myAge = 24
// console.log(myAge)

// let x = 5 * 10 
// console.log(x)

// let first = 5
// let second = 10
// let y = first + second
// console.log(y)

// let myAge = 24
// let humanDogsRatio = 7
// let myDogAge = myAge * humanDogsRatio
// console.log(myDogAge)


// let count = 5

// count = count + 1
// console.log(count)

// let bouncepoint = 50
//  bouncepoint = bouncepoint + 50
//  bouncepoint = bouncepoint - 75
//  bouncepoint = bouncepoint + 45
//  console.log(bouncepoint)

// function print(){
//     console.log("42")
// }
//  print()
//  print()
//  print()

// function increment(){
//     console.log("the button was clicked")
// }

// let lapsCompleted = 0

// function incrementLap(){
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// let userName = "John"
// console.log(userName)

// let notification = "You have 3 new notifications"

// console.log(userName + " , " +  notification)
// let message = userName + " , " +  notification
// console.log(message)

// let myName = "Maheshi"
// let greeting = "Hi my name is "
// let myGreeting = greeting + myName
// console.log(myGreeting)

// let points = 4
// let bonusPoint = 10
// let totalPoints = points + bonusPoint
// console.log(totalPoints)


let saveEl = document.querySelector("#save-el")
let countEl = document.querySelector(".count-elem")
console.log(countEl)

let count = 0

function increment(){
    // count = count + 1
    count += 1 //same as above
    countEl.textContent = count
    console.log(count)
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

    console.log(count)
}

save()



