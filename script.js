//Insere Legenda na Imagem
const textoEntrada = document.getElementById('text-input');
const textoSaida = document.getElementById('meme-text');
const container = document.getElementById('meme-image-container');

textoEntrada.addEventListener('keyup', exibeTexto);

function exibeTexto(){
    textoSaida.innerHTML = textoEntrada.value;
}


//Upload de Imagem
function exibeImagem(event) {
    let imagem = document.getElementById('meme-image');
    imagem.src = (URL.createObjectURL(event.target.files[0]));
    imagem.onload = function() {
        URL.revokeObjectURL(imagem.src) 
    }
};


//Botões
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

fire.addEventListener('click',btnFire);
function btnFire(){
    container.style.border='none'
    container.style.border='3px dashed red'
}

water.addEventListener('click',btnWater);
function btnWater(){
    container.style.border='none'
    container.style.border='5px double blue'
}


earth.addEventListener('click',btnEarth);
function btnEarth(){
    container.style.border='none'
    container.style.border='6px groove green'
}