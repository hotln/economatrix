const scenarioButton = document.querySelector('.btn-alt');

const paragraphOverlay = document.getElementById('paragraph-overlay');
const backdropElement = document.getElementById('backdrop');

const titlesOverlay = document.getElementById('titlesCrisesOverlay');
const titlesButton = document.querySelector('.btn2');
const invest  = document.getElementById('invest');
const investinfo  = document.getElementById('investinfo');
  
  function closetitlesOverlay() {
    backdropElement.style.display = 'none'; 
    titlesOverlay.style.display = 'none';
  }
  scenarioButton.addEventListener('click', function() {
    window.location.href = 'laGrandeDepressionInfo.html';
});

 
  titlesButton.addEventListener('click', closetitlesOverlay);
  scenarioButton.addEventListener('hover' , function() {
    investinfo.display.style='block';
  }

);
  
const avatars = document.querySelectorAll('#av1 li');
const avatarInfo = document.getElementById('avatar-info');

avatars.forEach((avatar) => {
  avatar.addEventListener('mouseover', () => {
    avatarInfo.textContent = avatar.getAttribute('data-info');
    avatarInfo.style.display = 'block';
  });

  avatar.addEventListener('mouseout', () => {
    avatarInfo.style.display = 'none';
  });
});
