const textoEntrada = document.getElementById('text-input');
const textoSaida = document.getElementById('meme-text');

textoEntrada.addEventListener('keyup', exibeTexto);

function exibeTexto(){
    textoSaida.innerHTML = textoEntrada.value;
}