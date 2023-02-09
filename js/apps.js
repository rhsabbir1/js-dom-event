function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option : 3
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

// Option : 4

const pinkBtn = document.getElementById('pink-btn');
pinkBtn.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}
// Option : 4 complex
const coralBtn = document.getElementById('coral-btn');
coralBtn.addEventListener('click', function makeCoral() {
    document.body.style.backgroundColor = 'coral';
})


// Fainul and useAble method 
// --------------------------\\
document.getElementById('make-navy').addEventListener('click', function () {
    document.body.style.backgroundColor = 'Navy';
})