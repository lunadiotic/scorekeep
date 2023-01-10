const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const resetButton = document.querySelector('#reset');
const playTo = document.querySelector('#playto');

const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');

let p1Score = 0;
let p2Score = 0;
let winningScore = 0;
let isGameOver = false;

function disableButton() {
	if (winningScore == 0) {
		p1Button.setAttribute('disabled', '');
		p2Button.setAttribute('disabled', '');
	} else {
		p1Button.removeAttribute('disabled');
		p2Button.removeAttribute('disabled');
	}
}

function reset() {
	isGameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove('text-success');
	p2Display.classList.remove('text-success');
}

p1Button.addEventListener('click', function () {
	if (!isGameOver) {
		p1Score += 1;
		if (p1Score === winningScore) {
			isGameOver = true;
			p1Display.classList.add('text-success');
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener('click', function () {
	if (!isGameOver) {
		p2Score += 1;
		if (p2Score === winningScore) {
			isGameOver = true;
			p2Display.classList.add('text-success');
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener('click', reset);

playTo.addEventListener('change', function () {
	winningScore = parseInt(this.value);
	disableButton();
	reset();
});

disableButton();
