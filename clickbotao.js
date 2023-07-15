/*---------------------
        Funny Button
---------------------*/

const b = document.querySelector("#buttomo")
const htmlTag = document.querySelector(".container")

b.addEventListener('click', btnClick)
let states = true;
function btnClick() {
    
    if (states) {
        b.style.backgroundImage = "url(./imagens/cursor/buttom/pixil-layer-0.png)"
        states = false
        
        
        
        document.getElementById("superMario").style.display = "flex"
        
        
    } else {
        b.style.backgroundImage = "url(./imagens/cursor/buttom/pixil-layer-1.png)"
        states = true

        document.getElementById("superMario").style.display = "none"
    }
}





