#Ads-block-youtube-to-invidious-extension

Was bringt mir diese Chrome-Erweiterung?
- Wenn Youtube Sie aufgrund eines Adblockers blockiert hat, wird der Button "YouTube-Werbung zulassen" durch "Invidious" ersetzt, Sie werden dann nach 2,5 Sekunden automatisch zu Invidious weitergeleitet, Ihr Video wird dort geladen.

What does this Chrome extension bring me?
- If Youtube has blocked you due to an adblocker, the "Allow YouTube Ads" button will be replaced by "Invidious", you will then be automatically redirected to Invidious after 2.5 seconds, your video will be loaded there.


## Beschreibung YouTube zu Invidious Button

Diese Chrome-Erweiterung fügt einen Button hinzu, um YouTube-Videos automatisch in Invidious zu öffnen. Die Erweiterung ändert im Grunde den Text und Funktion des Button "YouTube-Anzeigen erlauben" in "Invidious öffnen". Und ermöglicht es, das Video in Invidious ohne Werbung zu schauen.

![image](https://github.com/Mr-Robot-ops/Ads-block-youtube-to-invidious-extension/assets/55334802/cd02d978-166e-4af3-8753-652d5f154155)

Manuelle Funktion, fall YouTube zukünftig etwas ändert

![image](https://github.com/Mr-Robot-ops/Ads-block-youtube-to-invidious-extension/assets/55334802/b8dc7a48-756a-49d0-8ad6-a043f15e7345)


## Installation

![image](https://github.com/Mr-Robot-ops/Ads-block-youtube-to-invidious-extension/assets/55334802/f852fac6-2759-4ad3-9f8e-d320e1965c91)

1. Laden Sie die Erweiterung herunter: [GitHub Releases](https://github.com/Mr-Robot-ops/Ads-block-youtube-to-invidious-extension/releases)
2. Entpacken Sie die ZIP Datei
3. Gehen Sie im Chrome-Browser zu `chrome://extensions/`
4. Aktivieren Sie den "Entwicklermodus" oben rechts auf der Seite.
5. Klicken Sie auf "Entpackte Erweiterung laden" und wähle das Verzeichnis aus, wo Sie die Erweiterungsdateien entpackt haben (Ornder).
6. Optional können Sie in der popup.js und content.js den Invidious Link ändern. Siehe: [Invidious](https://docs.invidious.io/instances/)

## Invidious Link ändern (Optional)

1. Öffnen Sie die "content.js" mit z.B. Notepad ++

Zeile:
```
const invidiousUrl = 'https://yt.artemislena.eu/watch?v=' + videoId;
```
Anschließend die Standard Einstellung: "https://yt.artemislena.eu/" durch den gewünschten Invidious Link ersetzten

2. Öffnen Sie die popup.js

Zeile: 
```
var invidiousUrl = "https://yt.artemislena.eu/watch?v=" + videoId;
```
Anschließend die Standard Einstellung: "https://yt.artemislena.eu/" durch den gewünschten Invidious Link ersetzten


## Verwendung

Sobald die Erweiterung installiert ist, befolgen Sie diese Schritte:

1. Besuchen Sie eine YouTube-Videoseite in Ihren Chrome-Browser.
2. Drücken Sie einmal F5 um den Button zu ersetzen
3. Sie werden feststellen, dass der "YouTube-Anzeigen erlauben" Button jetzt als "Invidious öffnen" angezeigt wird.
4. Klicke Sie auf den Button "Invidious öffnen", um das Video in Invidious zu schauen. Oder warten Sie einfach 2,5 Sekunden. 

## Beitrag

Wenn Sie Fehler finden, Vorschläge haben oder zur Verbesserung dieser Erweiterung beitragen möchten, können Sie einen Pull Requests erstellen oder Issues auf GitHub melden.

## Lizenz

Dieses Projekt ist unter der [CC0 1.0 Universal (CC0 1.0) Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/) lizenziert.

## Autor

- *Mr-Robot-ops* - [GitHub](https://github.com/Mr-Robot-ops)

## Dankeschön

- [Invidious](https://invidious.io/) - Für die großartige Invidious-Plattform.

## Hinweis

Diese Erweiterung wurde für den persönlichen Gebrauch erstellt und steht unter der Lizenz "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication". Verwendung auf eigene Verantwortung.

**Haftungsausschluss:** Diese Erweiterung ist nicht mit YouTube oder Invidious verbunden und wird von ihnen nicht unterstützt oder gesponsert.

##Kontakt 

Sie können mich über GitHub kontaktieren oder Discord: iluckyduck

