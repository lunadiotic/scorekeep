const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const resetButton = document.querySelector('#reset');
const playTo = document.querySelector('#playto');

const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function reset() {
	isGameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove('winner', 'loser');
	p2Display.classList.remove('winner', 'loser');
}

p1Button.addEventListener('click', function () {
	if (!isGameOver) {
		p1Score += 1;
		if (p1Score === winningScore) {
			isGameOver = true;
			p1Display.classList.add('winner');
			p2Display.classList.add('loser');
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener('click', function () {
	if (!isGameOver) {
		p2Score += 1;
		if (p2Score === winningScore) {
			isGameOver = true;
			p2Display.classList.add('winner');
			p1Display.classList.add('loser');
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener('click', reset);

playTo.addEventListener('change', function () {
	winningScore = parseInt(this.value);
	reset();
});
