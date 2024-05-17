const campoTipoPJ = document.getElementById("tipoPessoaJuridica");
const campoTipoPF = document.getElementById("tipoPessoaFisica");

function apresentarCamposPJ(){
   apresentarCampos("campos-pj");
   removerCampos("campos-pf");
   }


function apresentarCamposPF(){
    apresentarCampos("campos-pf");
    removerCampos("campos-pj");

}
function apresentarCampos(removerClasse) {
    const divs = document.getElementsByClassName(removerClasse);
   let indice =0;
   while (indice < divs.length){
    let div = divs[indice];
    div.classList.remove("inactive");
    indice = indice +1;
}
}
function removerCampos(tipoPessoa){
    const divs = document.getElementsByClassName(tipoPessoa);
    let indice =0;
    while (indice < divs.length){
     let div = divs[indice];
     div.classList.add("inactive");
     indice = indice + 1;
}
}

campoTipoPF.onclick = apresentarCamposPF;
campoTipoPJ.onclick = apresentarCamposPJ;
