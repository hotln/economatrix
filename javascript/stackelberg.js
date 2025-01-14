const scenarioOverlay = document.getElementById('scenario-overlay');
const backdropElement = document.getElementById('backdrop');
const leaderButton = document.getElementById('leader');
const followerButton = document.getElementById('follower');
const leaderSent = document.getElementById('leaderSentence');
const followSent = document.getElementById('followerSentence');
const winButton= document.getElementById('360');
const button180 = document.getElementById('180');
const button240 = document.getElementById('240');
const againtry = document.getElementById('againtry');
const againplay = document.getElementById('againplay');

  function closeScenarioOverlay() {
    backdropElement.style.display = 'none'; 
    scenarioOverlay.style.display = 'none'; 
  }
  function getRandomComputerChoice() {
    
    const choices = ['180', '240', '360'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
document.addEventListener('DOMContentLoaded', () => {
    // Dropdown seçimlerini işlemek
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const button = dropdown.querySelector('.dropdown-btn');
        const items = dropdown.querySelectorAll('.dropdown-item, .correct');
      
  
      items.forEach(item => {
        item.addEventListener('click', () => {
          button.textContent = item.textContent;
          button.dataset.selected = item.classList.contains('correct') ? 'correct' : 'incorrect';
        });
      });
    });
  
    
  });
 leaderButton.addEventListener('click', closeScenarioOverlay);
 followerButton.addEventListener('click', closeScenarioOverlay);


 leaderButton.addEventListener('click', () => handlePlayerChoice('leader'));
followerButton.addEventListener('click', () => handlePlayerChoice('follower'));

function handlePlayerChoice(playerChoice) {

    if (playerChoice === 'leader') {
        leaderSent.style.display = 'block';
        winButton.addEventListener('click', () => {
            const allButtons = document.querySelectorAll('.dropdown-btn');
            const allCorrect = Array.from(allButtons).every(btn => btn.dataset.selected === 'correct');
            document.getElementById('backdrop').style.display = 'block';
            if (allCorrect) {
             
              document.getElementById('win-overlay').style.display = 'block';
            } else{
              document.getElementById('lose-overlay').style.display = 'block';

            }
          }); 
          button180.addEventListener('click',() => {
            document.getElementById('backdrop').style.display = 'block';
            document.getElementById('lose-overlay').style.display = 'block';
       }); 
       button240.addEventListener('click',() => {
        document.getElementById('backdrop').style.display = 'block';
        document.getElementById('lose-overlay').style.display = 'block';
   }); 
 }
 if (playerChoice === 'follower') { 

    const randomChoice = getRandomComputerChoice(); // Rastgele seçimi al
        followSent.style.display = 'block';
        followSent.textContent = `ChocoLeader a choisi de produire ${randomChoice} chocolats`;
      if(randomChoice === '180' || randomChoice === '240' ){
        button240.addEventListener('click', () => {
            const allButtons = document.querySelectorAll('.dropdown-btn');
            const allCorrect = Array.from(allButtons).every(btn => btn.dataset.selected === 'correct');
            document.getElementById('backdrop').style.display = 'block';
            if (allCorrect) {
             
              document.getElementById('win-overlay').style.display = 'block';
            } else{
              document.getElementById('lose-overlay').style.display = 'block';

            }
          }); 
          button180.addEventListener('click', () => {
            document.getElementById('backdrop').style.display = 'block';
              document.getElementById('lose-overlay').style.display = 'block';
          }); 
          winButton.addEventListener('click', () => {
            document.getElementById('backdrop').style.display = 'block';
            document.getElementById('lose-overlay').style.display = 'block';
        }); 

      }
      if(randomChoice === '360'){
        button180.addEventListener('click', () => {
            const allButtons = document.querySelectorAll('.dropdown-btn');
            const allCorrect = Array.from(allButtons).every(btn => btn.dataset.selected === 'correct');
            document.getElementById('backdrop').style.display = 'block';
            if (allCorrect) {
             
              document.getElementById('win-overlay').style.display = 'block';
            } else{
              document.getElementById('lose-overlay').style.display = 'block';

            }
          }); 
          button240.addEventListener('click', () => {
              document.getElementById('lose-overlay').style.display = 'block';
          }); 
          winButton.addEventListener('click', () => {
            document.getElementById('lose-overlay').style.display = 'block';
        }); 




      }
     
      }
 }

 document.addEventListener('DOMContentLoaded', (event) => {
  function restartGame() {
      console.log("Reloading the page to restart the game...");
      location.reload(); // Reload the entire page
  }

  const againTryButton = document.getElementById('againtry');
  const againPlayButton = document.getElementById('againplay');

  if (againTryButton) {
      againTryButton.addEventListener('click', restartGame);
      console.log("Attached event listener to againtry button");
  } else {
      console.log("againtry button not found");
  }

  if (againPlayButton) {
      againPlayButton.addEventListener('click', restartGame);
      console.log("Attached event listener to againplay button");
  } else {
      console.log("againplay button not found");
  }
});

 