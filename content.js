// content.js

// Funktion zum Überprüfen und Ändern des Buttons
function modifyAdButton() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    if (button.textContent === 'YouTube-Anzeigen erlauben') {
      // Ändere den Text des Buttons
      button.textContent = 'Invidious öffnen';

      // Füge ein Klickereignis zum Button hinzu
      button.addEventListener('click', function() {
        // Hier kannst du die URL extrahieren und Invidious öffnen
        const videoUrl = window.location.href;
        const videoIdMatch = videoUrl.match(/watch\?v=([^&]+)/);
        
        if (videoIdMatch) {
          const videoId = videoIdMatch[1];
          const invidiousUrl = 'https://yt.artemislena.eu/watch?v=' + videoId;
          window.location.href = invidiousUrl;
        }
      });

      // Automatisches Klicken nach 2,5 Sekunden
      setTimeout(function() {
        button.click();
      }, 2500); // 2,5 Sekunden in Millisekunden
    }
  });
}

// Überwache die Seite auf Änderungen
const observer = new MutationObserver(modifyAdButton);

// Überwachungsparameter
const config = { childList: true, subtree: true };

// Starte die Überwachung, um Änderungen auf der Seite zu erkennen
observer.observe(document.body, config);

// Führe die Funktion bei der Initialisierung aus
modifyAdButton();