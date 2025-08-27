//butonlar
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');

//sesler
const do1 = document.getElementById('do');
const re1 = document.getElementById('re');
const mi1 = document.getElementById('mi');
const fa1 = document.getElementById('fa');
const sol1 = document.getElementById('sol');
const la1 = document.getElementById('la');
const si1 = document.getElementById('si');
const do2 = document.getElementById('do2')

//event listenerlar
b1.addEventListener('click', playDo);
b2.addEventListener('click', playRe);
b3.addEventListener('click', playMi);
b4.addEventListener('click', playFa);
b5.addEventListener('click', playSol);
b6.addEventListener('click', playLa);
b7.addEventListener('click', playSi);
b8.addEventListener('click', playDo2);

document.addEventListener('keydown', function(event) {
    if (event.key === "q" || event.key === "Q") {
        playDo();
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === "w" || event.key === "W") {
        playRe();
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === "e" || event.key === "E") {
        playMi();
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === "r" || event.key === "R") {
        playFa();
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === "t" || event.key === "T") {
        playSol();
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === "y" || event.key === "Y") {
        playLa();
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === "u" || event.key === "U") {
        playSi();
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === "ı" || event.key === "I") {
        playDo2();
    }
})

//fonksiyonlar
function playDo() {
    do1.currentTime = 0;
    do1.play();
}

function playRe() {
    re1.currentTime = 0;
    re1.play();
}

function playMi() {
    mi1.currentTime = 0;
    mi1.play();
}

function playFa() {
    fa1.currentTime = 0;
    fa1.play();
}

function playSol() {
    sol1.currentTime = 0;
    sol1.play();
}

function playLa() {
    la1.currentTime = 0;
    la1.play();
}

function playSi() {
    si1.currentTime = 0;
    si1.play();
}

function playDo2() {
    do2.currentTime = 0;
    do2.play();
}