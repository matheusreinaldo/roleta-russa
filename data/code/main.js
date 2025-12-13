import * as path from './modules/paths.js';
import * as feature from './modules/features.js';

const sounds = {
    "spin": new Audio(path.soundsPath+'spin.wav'),
    "fail": new Audio(path.soundsPath+'fail.wav'),
    "shot": new Audio(path.soundsPath+'shot.wav')
}


var botaoPuxarGatilho = document.querySelector('#puxarGatilho');
var botaoRodarTambor = document.querySelector('#rodarTambor');

botaoRodarTambor.addEventListener('click', () => 
{
    feature.rollDrum(sounds.spin);
});

botaoPuxarGatilho.addEventListener('click', () => 
{
    feature.pullTrigger(sounds.fail, sounds.shot);
});

botaoPuxarGatilho.disabled=true;
