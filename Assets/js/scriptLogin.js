function validacaoEmail() {
    var fieldEmail = document.getElementById("email");

    var usuario = fieldEmail.value.substring(0, fieldEmail.value.indexOf("@"));
    var dominio = fieldEmail.value.substring(fieldEmail.value.indexOf("@")+1, fieldEmail.value.length);

    if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) && (dominio.search("@") == -1) && (usuario.search(" ") == -1) && (dominio.search(" ") == -1) && (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
        fieldEmail.classList.remove("fieldError");
        document.getElementById("emailError").style.display = "none";
    } else {
        fieldEmail.classList.add("fieldError");
        document.getElementById("emailError").style.display = "block";
    }
}

function validacaoSenha() {
    var fieldSenha = document.getElementById("senha");

    if (fieldSenha.value == "") {
        if (document.getElementById("senhaError").style.display == "block") {
            document.getElementById("senhaError").style.display = "none";
        }

        fieldSenha.classList.add("fieldError");
        document.getElementById("senhaError").style.display = "block";        
    } else {
        fieldSenha.classList.remove("fieldError");
        document.getElementById("senhaError").style.display = "none";
    }
}