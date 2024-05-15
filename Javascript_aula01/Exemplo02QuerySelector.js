
function apresentarNomeCompleto()
{

    const nome = document.querySelector("#nome");
    const sobrenome = document.querySelector("#sobrenome");
    
    let nome2 = nome.value; 
    let sobrenome2 = sobrenome.value; 
    let nomeCompleto = nome2 + " " + sobrenome2;
    alert("Nome Completo: " + nomeCompleto);
    
}

