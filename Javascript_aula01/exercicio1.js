function dadosPokemon(){
    const elementoNome = document.querySelector("#nome");
    const elementoAltura = document.querySelector("#altura");
    const elementoPeso = document.querySelector("#peso");

    let nome = elementoNome.value;
    let altura = elementoAltura.value;
    let peso = elementoPeso.value;
   
    alert("Nome : " + nome + " " + "Altura: " + altura + " " + "Peso: " + peso );

}