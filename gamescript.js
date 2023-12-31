


window.addEventListener('load', updateScoreElement);
    let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };

        function updateScoreElement () {
            
            document.querySelector('.scorecard').innerHTML = `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
            



        };
      
      
        
        let computerMove = '';
        let result = '';
        function generateResult(chosenMove){
            const randomNum = Math.random();
            if (randomNum < 1/3 && randomNum > 0){
            computerMove = 'scissors';
            
        
        }
        else if (randomNum >= 1/3 &&  randomNum < 2/3){
            computerMove = 'paper';
           
            
        }
        else{
            computerMove = 'rock';
            
        }
        let a = chosenMove.toLowerCase();
        let b =computerMove.toLowerCase();
        if (a === b){
            result = 'Tie';
            score.ties+=1;
        }
        else if (chosenMove === 'rock' && computerMove === 'scissors' || chosenMove === 'paper' && computerMove === 'rock' || chosenMove === 'scissors' && computerMove === 'paper'){
            result = 'Win';
            score.wins+=1;
        }
        else{
            result = 'Lose';
            score.losses+=1;
            
        };
        updateScoreElement();
        localStorage.setItem('score', JSON.stringify(score));



    localStorage.setItem('score', JSON.stringify(score));
    


    function resultCardElement () {
        document.querySelector('.resultcard').innerHTML = `${result}!!`;
    }
    resultCardElement();

    function moveCardElement () {
        document.querySelector('.movecard').innerHTML = `You :
        <img class="rock small-move-image" src="${chosenMove}-emoji.png" alt="">
        <img class="small-move-image" src="${computerMove}-emoji.png" alt="">:Computer`;
    }
    moveCardElement();
    };



        function resetScore() {
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            document.querySelector('.resultcard').innerHTML ='';
            document.querySelector('.movecard').innerHTML = '';
            
            updateScoreElement(); 
            localStorage.removeItem('score');
    }

    function pickComputerMove() {
        const randomNumber = Math.random();
      
        let computerMove = '';
      
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }
      
        return computerMove;
      }
      let autoPlayInterval;
      let isActive = false;
   function startAutoPlay (){
    const buttonvalue = document.querySelector('.auto-play').innerHTML;

    if (buttonvalue === 'Auto Play'){
        document.querySelector('.auto-play').innerHTML = 'Stop Play'
        isActive = true;
        autoPlayInterval = setInterval(function () {
            let chosenMove = pickComputerMove();
            generateResult(chosenMove);
        },1000)

    }
    else{
        document.querySelector('.auto-play').innerHTML = 'Auto Play';
        isActive = false;
        clearInterval(autoPlayInterval);
        
    }
   }


