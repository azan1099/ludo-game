let score1 = 0;
let score2 = 0;

const diceImages = [
    'dice1.png',
    'dice2.png',
    'dice3.png',
    'dice4.png',
    'dice5.png',
    'dice6.png'
];
function rollDice(player) {
    const outcome = Math.floor(Math.random() * 6) + 1;
    const diceImage = diceImages[outcome - 1];
    document.getElementById(`diceImage${player.charAt(player.length - 1)}`).src = diceImage;
    if (player === 'player1') {
        score1 += outcome;
        document.getElementById('score1').innerText = score1;
    } else {
        score2 += outcome;
        document.getElementById('score2').innerText = score2;
    }
    if (score1 >= 100 || score2 >= 100) {
        declareWinner(player);
    }
}
function declareWinner(player) {
    alert(`Player ${player.charAt(player.length - 1)} wins!`);
}