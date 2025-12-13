function playAudio(audio)
{
    audio.currentTime = 0;
    audio.play();
}

var cartucho = 0;
var balaVerdadeira = 0;

var botaoPuxarGatilho = document.querySelector('#puxarGatilho');

const resultado = document.querySelector('#resultado');
const numeroCartucho = document.querySelector('#numeroCartucho');

export function rollDrum(soundSpin)
{
    playAudio(soundSpin);

    balaVerdadeira = Math.floor(Math.random() * 6 + 1);
    cartucho = 0;

    numeroCartucho.innerText=`${cartucho}/6`
    resultado.innerText = '[ Tambor rodado ]'
    botaoPuxarGatilho.disabled=false;
}


export function pullTrigger(soundFail, soundShot)
{
    cartucho++;
    numeroCartucho.innerText=`${cartucho}/6`

    if (cartucho == balaVerdadeira) {

        playAudio(soundShot);
        document.body.style.backgroundColor='white';
        resultado.innerText = 'KABOOOM! VOCÊ MORREU!';
        setInterval("document.body.style.backgroundColor='black';", 250);

    }

    else
    {
        playAudio(soundFail);
        resultado.innerText = 'Ufa... O cartucho estava vazio.';
    }

    if (cartucho == 6) {
        botaoPuxarGatilho.disabled=true;
    }
}