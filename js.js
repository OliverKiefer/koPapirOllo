let playerScore = 0;
let computerScore = 0;

function jatek(playerChoice) {
    let choices = ["ko", "papir", "ollo"]
    let random = Math.floor(Math.random() * 3)

    let computerChoice = choices[random]

    document.getElementById("computerChoiceImg").src=`img/${computerChoice}.png`

    if ((playerChoice == "ko" && computerChoice == "papir")
        || (playerChoice == "papir" && computerChoice == "ollo")
        || (playerChoice == "ollo" && computerChoice == "ko")
    ) {
        computerScore++
        console.log("vesztettel " + computerScore)
        console.log("te: " + playerChoice)
        console.log("comp: " +computerChoice)
    }
    else if ((playerChoice == "ko" && computerChoice == "ollo")
        || (playerChoice == "papir" && computerChoice == "ko")
        || (playerChoice == "ollo" && computerChoice == "papir")
    ) {
        playerScore++
        console.log("nyertel " + playerScore)
        console.log("te: " + playerChoice)
        console.log("comp: " + computerChoice)
    }
    else if (playerChoice == computerChoice) {
        //dontetlen
        console.log("dontetlen")
    }


}