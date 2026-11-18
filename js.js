let playerScore = 0;
let computerScore = 0;

function jatek(playerChoice) {
    if(playerChoice=="ko"){
        let rockChoosen=document.getElementById("rock")
        let paperChoosen=document.getElementById("paper")
        let scissorsChoosen=document.getElementById("scissors")
        rockChoosen.style.border="3px solid red"
        paperChoosen.style.border="none"
        scissorsChoosen.style.border="none"
    }
    else if(playerChoice=="papir"){
        let rockChoosen=document.getElementById("rock")
        let paperChoosen=document.getElementById("paper")
        let scissorsChoosen=document.getElementById("scissors")
        paperChoosen.style.border="3px solid red"
        rockChoosen.style.border="none"
        scissorsChoosen.style.border="none"
    }
    else if(playerChoice=="ollo"){
        let rockChoosen=document.getElementById("rock")
        let paperChoosen=document.getElementById("paper")
        let scissorsChoosen=document.getElementById("scissors")
        scissorsChoosen.style.border="3px solid red"
        rockChoosen.style.border="none"
        paperChoosen.style.border="none"
    }

    
    let choices = ["ko", "papir", "ollo"]
    let random = Math.floor(Math.random() * 3)

    let computerChoice = choices[random]

    document.getElementById("computerChoiceImg").src=`img/${computerChoice}.png`

    if ((playerChoice == "ko" && computerChoice == "papir")
        || (playerChoice == "papir" && computerChoice == "ollo")
        || (playerChoice == "ollo" && computerChoice == "ko")
    ) {
        computerScore++
        let computerPoint=document.getElementById("computer-score")
        let result=document.getElementById("result")
        computerPoint.innerText=computerScore.toString();
        result.innerText="Eredmény: A Számítógép Nyert!"
    }
    else if ((playerChoice == "ko" && computerChoice == "ollo")
        || (playerChoice == "papir" && computerChoice == "ko")
        || (playerChoice == "ollo" && computerChoice == "papir")
    ) {
        playerScore++
        let playerPoint=document.getElementById("player-score")
        let result=document.getElementById("result")
        result.innerText="Eredmény: Te Nyertél!"
        playerPoint.innerText=playerScore.toString();
    }
    else if (playerChoice == computerChoice) {
        let result=document.getElementById("result")
        result.innerText="Eredmény: Döntetlen"
        //dontetlen
        // console.log("dontetlen")
    }
}