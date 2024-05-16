const botaoingles = document.querySelector("#idioma-ingles");
const botaoPortugues = document.getElementById("idioma-portugues")
const botaoEspanhol = document.getElementById("idioma-espanhol")
const elementosH1 = document.getElementsByTagName("h1")

const h1 = elementosH1[0];
function removerClasses(){
    h1.classList.remove("titulo-ingles");
    h1.classList.remove("titulo-espanhol");
    h1.classList.remove("titulo-portugues");
}


function alterarIdiomaIngles (){
   
    h1.innerHTML = " Hello world";
    removerClasses();
    h1.classList.add("titulo-ingles")
    
}

function alterarIdiomaPortugues (){
   
    h1.innerHTML = " Ola mundo";
    removerClasses();
    h1.classList.add("titulo-portugues")
}
function alterarIdiomaEspanhol(){
    
    h1.innerHTML = " Hola mundo";
    removerClasses();
    h1.classList.add("titulo-espanhol")

}


botaoingles.onclick = alterarIdiomaIngles;
botaoPortugues.onclick = alterarIdiomaPortugues;
botaoEspanhol.onclick = alterarIdiomaEspanhol;
