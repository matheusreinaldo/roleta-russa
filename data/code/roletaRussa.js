import * as path from './modules/paths.js';

const sounds = {
    "spin": new Audio(path.soundsPath+'spin.wav'),
    "fail": new Audio(path.soundsPath+'fail.wav'),
    "shot": new Audio(path.soundsPath+'shot.wav')
}

var cartucho = 0;
var balaVerdadeira = 0;

var botaoPuxarGatilho = document.querySelector('#puxarGatilho');
var botaoRodarTambor = document.querySelector('#rodarTambor');

const resultado = document.querySelector('#resultado');
const numeroCartucho = document.querySelector('#numeroCartucho');

botaoRodarTambor.addEventListener('click', rodarTambor);
botaoPuxarGatilho.addEventListener('click', puxarGatilho);

botaoPuxarGatilho.disabled=true;

function rodarTambor() {
    sounds.spin.currentTime = 0;
    sounds.spin.play();

    balaVerdadeira = Math.floor(Math.random() * 6 + 1);
    cartucho = 0;

    numeroCartucho.innerText=`${cartucho}/6`
    resultado.innerText = '[ Tambor rodado ]'

    botaoPuxarGatilho.disabled=false;
}

function puxarGatilho() {
    cartucho++;

    numeroCartucho.innerText=`${cartucho}/6`

    switch (cartucho)
    {
        case 6:
            botaoPuxarGatilho.disabled=true;

        case balaVerdadeira:
            sounds.shot.currentTime = 0;
            sounds.shot.play();

            document.body.style.backgroundColor='white';

            resultado.innerText = 'KABOOOM! VOCÊ MORREU!';

            setInterval("document.body.style.backgroundColor='black';", 250);
        break;

        default:
            sounds.fail.currentTime = 0;
            sounds.fail.play();

            resultado.innerText = 'Ufa... O cartucho estava vazio.';
        break;

    }
    /*
    if (cartucho == balaVerdadeira) {
        sounds.shot.currentTime = 0;
        sounds.shot.play();

        document.body.style.backgroundColor='white';

        resultado.innerText = 'KABOOOM! VOCÊ MORREU!';

        setInterval("document.body.style.backgroundColor='black';", 250);
    } else {
        sounds.fail.currentTime = 0;
        sounds.fail.play();

        resultado.innerText = 'Ufa... O cartucho estava vazio.';
    }

    if (cartucho == 6) {
        botaoPuxarGatilho.disabled=true;

        return;
    }
    */
}


