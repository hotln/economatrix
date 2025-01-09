const scenarioButton = document.querySelector('.btn-alt');
const paragraphOverlay = document.getElementById('paragraph-overlay');
const backdropElement = document.getElementById('backdrop');
const coopBtnElement = document.getElementById('coop-btn');
const cheatBtnElement = document.getElementById('cheat-btn');
const gameBoardSquares = document.querySelectorAll('#game-board li');

function openScenarioOverlay() {
    backdropElement.style.display = 'block'; // Arka planı görünür yapar
    paragraphOverlay.style.display = 'block'; // Senaryo overlay'ini görünür yapar
  }

  function closeScenarioOverlay() {
    backdropElement.style.display = 'none'; // Arka planı gizler
    paragraphOverlay.style.display = 'none'; // Senaryo overlay'ini gizler
  }
  
  scenarioButton.addEventListener('click', openScenarioOverlay);

  backdropElement.addEventListener('click', closeScenarioOverlay);


  scenarioButton.addEventListener('click', openScenarioOverlay);


  const avatarImage = document.getElementById('avatar-image');
  const avatarText = document.getElementById('avatar-text');
  
  // Resme tıklandığında sabit paragrafın görünmesini sağlayan olay dinleyici
  avatarImage.addEventListener('click', function() {
      avatarText.style.display = 'block';  // Paragrafı görünür yap
  });
  
 
  
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
  
    // Cheat butonuna basıldığında kontrol
    const cheatButton = document.getElementById('cheat-btn');
    cheatButton.addEventListener('click', () => {
      const allButtons = document.querySelectorAll('.dropdown-btn');
      const allCorrect = Array.from(allButtons).every(btn => btn.dataset.selected === 'correct');
  
      if (allCorrect) {
        document.getElementById('backdrop').style.display = 'block';
        document.getElementById('win-overlay').style.display = 'block';
      } else{
        document.getElementById('lose-overlay').style.display = 'block';
      }
    });
  });
  const coopButton = document.getElementById('coop-btn');
  coopButton.addEventListener('click', () => {
    document.getElementById('lose-overlay').style.display = 'block';})
  
  










