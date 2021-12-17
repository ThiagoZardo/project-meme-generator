const textoEntrada = document.getElementById('text-input');
const textoSaida = document.getElementById('meme-text');

textoEntrada.addEventListener('keyup', exibeTexto);

function exibeTexto(){
    textoSaida.innerHTML = textoEntrada.value;
}


//código da internet


// let container = document.getElementById('meme-image-container');

// function theimage(){
//     const escolherArquivo = document.getElementById('meme-image').files[0].name;
//     let imagem = document.createElement('img') ;
//     imagem.innerHTML = '/' + escolherArquivo; 
//     container.appendChild(imagem);
 
//  console.log(escolherArquivo);
// }


let exibeImagem = function(event) {
    let imagem = document.getElementById('meme-image');
    imagem.src = URL.createObjectURL(event.target.files[0]);
    imagem.onload = function() {
        URL.revokeObjectURL(imagem.src) // free memory
    }
};


