function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const greenBtn = document.getElementById('green-btn');
greenBtn.onclick = makeGreen;

function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

const blueBtn = document.getElementById('blue-btn');
blueBtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

const purpleBtn = document.getElementById('purple-btn');
purpleBtn.onclick = function makepurple() {
    document.body.style.backgroundColor = 'purple';
}