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
    btn.addEventListener('click', (event) => {      
        playRound(event)
    } )
})
const score = document.querySelector('.score')
const roundText = document.querySelector('.round')
const message = document.querySelector('.message')
let toDisplay = ''
const resetGame = () => {
    round = 0 
    userScore = 0 
    computerScore = 0
    score.innerText= `Player vs computer 0:0`

}


const playRound = (event) => {
    round ++
    roundText.innerText = `Round: ${round}`
    const playerSelection = event.target.id
    const computerSelection = computerPlay()
    console.log(playerSelection, computerSelection, userScore, computerScore)
    const lose = () => {
        computerScore++
        
        score.innerText = `Player vs computer ${userScore}:${computerScore}`
        toDisplay = `You Lose! ${computerSelection} beats ${playerSelection}`
        finalMessage(round)

    }
    const won = () => {
        userScore++
        score.innerText = `Player vs computer ${userScore}:${computerScore}`
        toDisplay = `You won!`
        finalMessage(round)


    }
    if (playerSelection === 'rock' && computerSelection === "paper" ||
        playerSelection === 'paper' && computerSelection === "scissor" ||
        playerSelection === 'scissor' && computerSelection === "rock") {

        lose()
        
    } else if (playerSelection === computerSelection) {
        toDisplay = "Handed over. Try again!"
    } else won()
    

  
}

const finalMessage = (round) => {
    if((userScore > 4)||(computerScore>4)){
        if (userScore > computerScore) {
            message.innerText= `User won with the score of ${userScore}:${computerScore} points in the ${round} round!`
        } else message.innerText= `Computer won with the score of ${computerScore}:${userScore} points in the ${round} round!`
    }
    }
    

(()=>{if((userScore > 4)||(computerScore>4)){
    finalMessage(round)
}})

// const game = () => {


//     while ((userScore < 5) && (computerScore < 5)) {
//         playRound()
//         round++
//     }
//     console.log(finalMessage(round))
// }

