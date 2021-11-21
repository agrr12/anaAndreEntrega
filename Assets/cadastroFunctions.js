

function limparErros(){
    var vetorElementos = ["nome", "sobrenome", "login", "senha", "senhaConfirmar", "email"];

    for(var i=0; i<vetorElementos.length; i++){
        document.getElementById("divErro").style.display="none";
        document.getElementById(vetorElementos[i]).style.borderColor =null;
        document.getElementById(vetorElementos[i]).style.backgroundColor=null;
    }

}

function verificarCamposVazios(){
    limparErros()
    var vetorElementos = ["nome", "sobrenome", "login", "senha", "senhaConfirmar", "email"];


    for(var i=0; i<vetorElementos.length; i++){
        if(document.getElementById(vetorElementos[i]).value==""){
            document.getElementById("divErro").style.display="block";
            document.getElementById(vetorElementos[i]).style.backgroundColor="pink";
            document.getElementById(vetorElementos[i]).style.borderColor="var(--errorInput)";
        }

    }

}

function voltarPrincipal(){
    document.location.href = "../index.html";
}