document.getElementById('mario')

document.getElementById('esquerda')

document.getElementById('home')


let passosDireita = 0;
let passosEsquerda = 0;
let passos = 0;
function mover(direcao) {


   /*  console.log(document.getElementById('home').clientWidth) */ // largura da tela
    


    /* Movimento para esquerda */  
    if (direcao == 'esquer') {
        

        if(passos >= -9){
            if(passosEsquerda%2 === 0){
                document.getElementById('mario').style.backgroundImage = 'url(./mario/imagens/frames/corte/esquerda-0.png)';
                document.getElementById('mario').style.left = (passos*10) + 'px';
            }else{
                document.getElementById('mario').style.backgroundImage = 'url(./mario/imagens/frames/corte/esquerda-1.png)';
                document.getElementById('mario').style.left = (passos*10) + 'px';
            }
            passosEsquerda += 1;
            passos -= 1;
            if(passos == -10) {
                console.log("10 passos para a esquerda");
                document.getElementById('mario').style.backgroundImage = 'url(./mario/imagens/frames/corte/comemoracao-mario-fire.png)';
            }
        }

    /* Movimento para direita */    
    } else if (direcao == 'direit') {
        
        if(passos <= 9){
            if(passosDireita%2 === 0){
                document.getElementById('mario').style.backgroundImage = 'url(./mario/imagens/frames/corte/direita-0.png)';
                document.getElementById('mario').style.left = (passos*10) + 'px';
            }else{
                document.getElementById('mario').style.backgroundImage = 'url(./mario/imagens/frames/corte/direita-1.png)';
                document.getElementById('mario').style.left = (passos*10) + 'px';
            }
            passosDireita += 1;
            passos += 1;
            if(passos == 10) {
                console.log("10 passos para a direita");
                document.getElementById('mario').style.backgroundImage = 'url(./mario/imagens/frames/corte/mario-explosion.png)';
            }
        }  
        

        
 
    }
}