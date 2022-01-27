const computerPlay = () => {
    const gun = ['rock', 'paper', 'scissor']
    const randomGun = Math.floor(Math.random() * gun.length)
    return gun[randomGun]
}
let userScore = 0
let computerScore = 0
let round = 0
const btns = document.querySelectorAll('button')
btns.forEach((btn)=>{
    btn.addEventListener('click', (event) => playRound(event))
})
const score = document.querySelector('.score')
const roundText = document.querySelector('.round')


const playRound = (event) => {
    round ++
    roundText.innerText = `Round: ${round}`
    const playerSelection = event.target.id
    const computerSelection = computerPlay()
    console.log(playerSelection, computerSelection, userScore, computerScore)
    const lose = () => {
        computerScore++
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        score.innerText = `Player vs computer ${userScore}:${computerScore}`
    }
    const won = () => {
        userScore++
        console.log("You won")
        score.innerText = `Player vs computer ${userScore}:${computerScore}`

    }
    if (playerSelection === 'rock' && computerSelection === "paper" ||
        playerSelection === 'paper' && computerSelection === "scissor" ||
        playerSelection === 'scissor' && computerSelection === "rock") {

        lose()
    } else if (playerSelection === computerSelection) {
        console.log("Handed over. Try again!")
    } else won()
  
}

const finalMessage = (round) => {
    if (userScore > computerScore) {
        return `User won with score of ${userScore}:${computerScore} points in the ${round} round!`
    } else return `Computer won with score of ${computerScore}:${userScore} points in the ${round} round!`
}

// const game = () => {


//     while ((userScore < 5) && (computerScore < 5)) {
//         playRound()
//         round++
//     }
//     console.log(finalMessage(round))
// }

