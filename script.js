//Insere Legenda na Imagem
const textoEntrada = document.getElementById('text-input');
const textoSaida = document.getElementById('meme-text');

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
