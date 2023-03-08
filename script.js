const adjectives = [
  'Mighty', 'Brave', 'Bold', 'Eternal', 'Radiant', 'Majestic', 'Divine', 'Noble', 'Fearless', 'Honorable'
];

const nouns = [
  'Guardians', 'Dragons', 'Knights', 'Champions', 'Heroes', 'Paladins', 'Crusaders', 'Sentinels', 'Gladiators', 'Warriors'
];

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', function() {
  const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
  const randomNounIndex = Math.floor(Math.random() * nouns.length);
  const guildName = adjectives[randomAdjectiveIndex] + " " + nouns[randomNounIndex];
  const guildNameDiv = document.getElementById('guild-name');
  guildNameDiv.textContent = guildName;
});
