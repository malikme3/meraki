var player = {
  name: 'Amjid Hussain',
  score: 2310,
  wicket: 119,
  isRetired: true,
};

document.getElementById('spiders').innerHTML = 'voteable';
function myFunction() {
  document.getElementById('demo').innerHTML = player.name;
}

function getPlayerName() {
  document.getElementById('name').innerHTML = player.name;
}

function getPlayerScore() {
  document.getElementById('score').innerHTML = player.score;
}
