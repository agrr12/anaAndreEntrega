var lista = [
    {
        "id":0,
        "header": "Immanuel Kant",
        "imagem": "https://nova-acropole.org.br/wp-content/uploads/2019/02/immanuel-kant.jpg",
        "cidade": "Königsberg, Prússia",
    },
    {
        "id":1,
        "header": "Jeremy Bentham",
        "imagem": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Jeremy_Bentham_by_Henry_William_Pickersgill_detail.jpg",
        "cidade": "Londres, Inglaterra",
    },
    {
        "id":2,
        "header": "René Descartes",
        "imagem": "https://static.todamateria.com.br/upload/de/sc/descartes3.gif",
        "cidade": "Paris, França"
    },
    {
        "id":3,
        "header": "John Rawls",
        "imagem": "https://ideiasradicais.com.br/wp-content/uploads/2020/08/rawls-2.jpg",
        "cidade": "Baltimore, EUA",
    },
    {
        "id":4,
        "header": "Ludwig Wittgenstein",
        "imagem": "https://www.netmundi.org/filosofia/wp-content/uploads/2012/07/Ludwig-Wittgenstein-filosofia.jpg",
        "cidade": "Viena, Áustria",
    },
    {
        "id":5,
        "header": "Simone Weil",
        "imagem": "https://upload.wikimedia.org/wikipedia/commons/2/23/Simone_Weil_04_%28cropped%29.png",
        "cidade": "Paris, França",
    }


    
];


function montarCard(){
    var conteudo = '';
    lista.forEach((item) => {
        conteudo +='<div class="card">';
        conteudo +=`<div class="header">${item.header}</div>`;
        conteudo +=`<div class="imgCard"><img src="${item.imagem}" alt="">`;
        conteudo +='</div>';
        conteudo +=`<div class="des">${item.cidade}</div>`;
        conteudo += '<div class="botoesDiv">';
        conteudo +='<Button class="botaoCard">Conectar</Button>';
        conteudo +='<Button class="botaoCard">Ver perfil</Button>';
        conteudo +='</div>';
        conteudo +='</div>';
    });
    document.getElementById("divPessoas").innerHTML += conteudo;
}

window.onload = montarCard();
