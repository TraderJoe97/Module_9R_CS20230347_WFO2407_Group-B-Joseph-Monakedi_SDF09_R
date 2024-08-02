let player = {
    name: "Person",
    chips: 150
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message =""
let messageEl = document.getElementById("message-el")
let cardsEl= document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": R" + player.chips

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let SecondCard = getRandomCard()
    cards = [firstCard, SecondCard]
    sum = sumArray(cards)
    renderGame()
} 

function printCards(arr) {
    let cardsString = arr.join(" + ");
    return cardsString
  }
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13 + 1)
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent ="Cards: " + printCards(cards) 
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message 
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let newCard = getRandomCard()
        cards.push(newCard)
        sum = sumArray(cards)
        renderGame()
    }
}