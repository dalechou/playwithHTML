const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', function() {
  fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true&partOfSpeech=noun,adjective', {
    headers: {
      "x-rapidapi-key": "YOUR_API_KEY_HERE",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
    }
  })
  .then(response => response.json())
  .then(data => {
    const guildName = data.word + " " + data.results[0].synonyms[0];
    const guildNameDiv = document.getElementById('guild-name');
    guildNameDiv.textContent = guildName;
  })
  .catch(error => console.error(error));
});
