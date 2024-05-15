function mostrarDados(){
    const elementoLogin = document.querySelector('#login')
    const elementoSenha = document.querySelector('#senha')

    let login = elementoLogin.value
    let senha = elementoSenha.value

    alert("Login: " + login + " " + "Senha: " + senha)
}