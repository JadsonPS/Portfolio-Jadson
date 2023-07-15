document.getElementById('mario')

document.getElementById('esquerda')


let passosDireita = 0;
let passosEsquerda = 0;
let passos = 0;
function mover(direcao) {

    /* Movimento para esquerda */  
    if (direcao == 'esquer') {
        

        if(passosEsquerda%2 === 0){
            document.getElementById('mario').style.backgroundImage = 'url(./imagens/frames/corte/esquerda-0.png)'
            document.getElementById('mario').style.left = (passos*10) + 'px';
        }else{
            document.getElementById('mario').style.backgroundImage = 'url(./imagens/frames/corte/esquerda-1.png)'
            document.getElementById('mario').style.left = (passos*10) + 'px';
        }
        passosEsquerda += 1;
        passos -= 1;

    /* Movimento para direita */    
    } else if (direcao == 'direit') {
        
            
         if(passosDireita%2 === 0){
            document.getElementById('mario').style.backgroundImage = 'url(./imagens/frames/corte/direita-0.png)'
            document.getElementById('mario').style.left = (passos*10) + 'px';
        }else{
            document.getElementById('mario').style.backgroundImage = 'url(./imagens/frames/corte/direita-1.png)'
            document.getElementById('mario').style.left = (passos*10) + 'px';
        }
        passosDireita += 1;
        passos += 1;
 
    }
}