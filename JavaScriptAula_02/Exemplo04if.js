const botaoNumeroPositivo = document.getElementById("numeroPositivo")
const textareaResultado = document.getElementById("resultado")
const inputNumero1 = document.getElementById("numero1")
const botao8000 = document.getElementById("8")
const botaopar = document.getElementById("numeroPar")

function verficarNumeroPositivo(){
    const numero1 = parseInt(inputNumero1.value);
    if(numero1 > 0){
        textareaResultado.value = textareaResultado.value + numero1 +(" Numero positivo\n ");
    }
    else if(numero1 == 0){
        textareaResultado.value = textareaResultado.value + numero1 +(" Numero neutro\n ");

    }
    else{
        textareaResultado.value = textareaResultado.value + numero1 +(" Nao positivo\n ");
    }
}

    function numero8000(){
        const numero1 = parseInt(inputNumero1.value);

        if ( numero1 > 8000){
            textareaResultado.value = textareaResultado.value + numero1 +(" Maior que 8000\n ");
            
        }
        else if (numero1 == 8000){
            textareaResultado.value = textareaResultado.value + numero1 +(" igual a 8000\n ");
            
        }
        else{
            textareaResultado.value = textareaResultado.value + numero1 +(" Menor que 8000\n ");
        }
        
    }
    function par (){
        const numero1 = parseInt(inputNumero1.value);
        if (numero1 % 2  === 0){
            textareaResultado.value = textareaResultado.value + numero1 +(" é Par\n ");

        }
        else{
            textareaResultado.value = textareaResultado.value + numero1 +(" Não é par\n ");
        }
        


    }

botaoNumeroPositivo.onclick = verficarNumeroPositivo;
botao8000.onclick = numero8000;
botaopar.onclick = par;



document.getElementById("nome").style.display = "block";