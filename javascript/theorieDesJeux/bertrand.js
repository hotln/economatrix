const backdropElement = document.getElementById('backdrop');
const indiceBtn = document.getElementById('pizza');

const indiceOverlay = document.getElementById('indice-overlay');



  function openIndiceOverlay() {
    indiceOverlay.style.display = 'block'; 
  }

  function closeIndiceOverlay() {
    indiceOverlay.style.display = 'none'; 
  }

 indiceBtn.addEventListener('click', openIndiceOverlay);
 


  const playerButtons = document.querySelectorAll('.player-choice-btn');
const aiButtons = document.querySelectorAll('.ai-choice-btn');

const winOverlay = document.getElementById('win-overlay');
const coutOverlay = document.getElementById('cout-overlay');
const loseOverlay = document.getElementById('lose-overlay');
const egaliteOverlay = document.getElementById('egalite-overlay');

// Overlay'leri sıfırla
function resetOverlays() {
    winOverlay.style.display = 'none';
    loseOverlay.style.display = 'none';
    egaliteOverlay.style.display = 'none';
}

// Buton renklerini sıfırla
function resetButtonColors() {
    playerButtons.forEach(button => {
        button.style.backgroundColor = 'rgb(208, 168, 168)';
        button.style.cursor= 'pointer';
    });

    aiButtons.forEach(button => {
        button.style.backgroundColor = 'rgb(208, 168, 168)'; // Varsayılan renk
       
    });
}



playerButtons.forEach(playerButton => {
    playerButton.addEventListener('click', () => {
        resetButtonColors();
        resetOverlays();

        // Oyuncunun seçimi
        const playerChoice = parseInt(playerButton.textContent);
        playerButton.style.backgroundColor = 'rgb(130, 39, 215)';

        // Bilgisayarın rastgele seçimi
        const randomIndex = Math.floor(Math.random() * aiButtons.length);
        const aiSelectedButton = aiButtons[randomIndex];
        const aiChoice = parseInt(aiSelectedButton.textContent);
        aiSelectedButton.style.backgroundColor = 'rgb(130, 39, 215)';

        if(playerChoice == 5){
            coutOverlay.style.display = 'block';
            backdropElement.style.display = 'block';
        }
        else if (playerChoice > aiChoice) {
            loseOverlay.style.display = 'block';
            backdropElement.style.display = 'block';
        } else if (playerChoice < aiChoice) {
            winOverlay.style.display = 'block';
            backdropElement.style.display = 'block';
        } else {
            egaliteOverlay.style.display = 'block';
            backdropElement.style.display = 'block';
        }
    });
});

const tryButton = document.getElementById('tryagain-btn');
const goButton = document.getElementById('othertheories-btn');
const tryButton2 = document.getElementById('tryagain2-btn');
const goButton2 = document.getElementById('othertheories2-btn');
const tryButton3 = document.getElementById('tryagain3-btn');
const goButton3 = document.getElementById('othertheories3-btn');
const tryButton4 = document.getElementById('tryagain4-btn');
const goButton4 = document.getElementById('othertheories4-btn');

goButton.addEventListener('click',function(){
    backdropElement.style.display = 'none';
    window.location.href = 'TheoriesDeJeux.html';
  });
  tryButton.addEventListener('click',function(){
    backdropElement.style.display = 'none';
    loseOverlay.style.display = 'none';
    resetButtonColors();
  });
  goButton2.addEventListener('click',function(){
    backdropElement.style.display = 'none';
    window.location.href = 'TheoriesDeJeux.html';
  });
  tryButton2.addEventListener('click',function(){
    backdropElement.style.display = 'none';
    coutOverlay.style.display = 'none';
    resetButtonColors();
  });

  goButton3.addEventListener('click',function(){
    backdropElement.style.display = 'none';
    window.location.href = 'TheoriesDeJeux.html';
  });
  tryButton3.addEventListener('click',function(){
    backdropElement.style.display = 'none';
     winOverlay.style.display = 'none';
    resetButtonColors();
  });
  goButton4.addEventListener('click',function(){
    backdropElement.style.display = 'none';
    window.location.href = 'TheoriesDeJeux.html';
  });
  tryButton4.addEventListener('click',function(){
    backdropElement.style.display = 'none';
    egaliteOverlay.style.display = 'none';
    resetButtonColors();
  });

  document.getElementById("egalite-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const value = parseInt(document.getElementById("egalite-input").value);
    const feedback = document.getElementById("egalite-feedback");

    // Oyuncu seçimini kontrol et
    const playerChoice = Array.from(document.querySelectorAll('.player-choice-btn'))
        .find(btn => btn.style.backgroundColor === 'rgb(130, 39, 215)');
    
    if (playerChoice) {
        const playerValue = parseInt(playerChoice.textContent);

        // Matematiksel ifadeyi kontrol et (yarısı)
        const expectedValue = ((100 - 5 * playerValue) * (playerValue - 5)) / 2;

        if (value === expectedValue) {
            feedback.textContent = "Félicitations !";
            tryButton4.style.display= 'block';
            goButton4.style.display= 'block';
        } else {
            feedback.textContent = "Essayez encore.";
        }
    } else {
        feedback.textContent = "Aucune sélection trouvée. Réessayez.";
    }
});

document.getElementById("win-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const value = parseInt(document.getElementById("win-input").value);
    const feedback = document.getElementById("win-feedback");

    // Oyuncu seçimini ve kazanan durumu kontrol et
    const playerChoice = Array.from(document.querySelectorAll('.player-choice-btn'))
        .find(btn => btn.style.backgroundColor === 'rgb(130, 39, 215)');
    
    if (playerChoice) {
        const playerValue = parseInt(playerChoice.textContent);

        // Matematiksel ifadeyi kontrol et
        const expectedValue = (100 - 5 * playerValue) * (playerValue - 5);

        if (value === expectedValue) {
            feedback.textContent = "Félicitations !";
            tryButton3.style.display= 'block';
            goButton3.style.display= 'block';
        } else {
            feedback.textContent = "Essayez encore.";
        }
    } else {
        feedback.textContent = "Aucune sélection trouvée. Réessayez.";
    }
});
const closebtn= document.getElementById('close');
closebtn.addEventListener('click', function(){
  indiceOverlay.style.display='none';
});

const plusbtn= document.getElementById('plus');
plusbtn.addEventListener('click', function(){
  window.location.href = 'bertrandInfo.html';
});
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay-begin");
  const closeButton = document.getElementById("close-overlay");
 

  // Sayfa yüklendiğinde overlay'i göster
  overlay.style.display = "flex";

  // Butona tıklandığında overlay'i gizle
  closeButton.addEventListener("click", function () {
      overlay.style.display = "none";
      backdropElement.style.display = "none";
  });
});




