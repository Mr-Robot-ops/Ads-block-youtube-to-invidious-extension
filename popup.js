document.getElementById("openInvidious").addEventListener("click", function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var tab = tabs[0];
    var videoUrl = tab.url;
    var videoId = videoUrl.match(/v=([^&]+)/)[1];
    var invidiousUrl = "https://yt.artemislena.eu/watch?v=" + videoId;
    chrome.tabs.create({ url: invidiousUrl });
  });
});
