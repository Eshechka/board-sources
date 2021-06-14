const board = document.querySelector('#board');
const SQUARES_NUMBER = 240;
const colors = ['#2E1114', '#501B1D', '#64485C', '#83677B', '#ADADAD', '#6F2232', '#950740'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });
    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });

    board.append(square);
}

function setColor(el) {
    const randomColor = getRandomColor();
    el.style.backgroundColor = randomColor;
    el.style.boxShadow = `0 0 1px ${randomColor}, 0 0 4px ${randomColor}`;
}
function removeColor(el) {
    el.style.backgroundColor = '#222222';
    el.style.boxShadow = 'none';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
