let imagens = document.querySelectorAll('.slide img');
let indice = 0;

function trocarImagem() {
 imagens.forEach((imagem) => {
 imagem.style.display = 'none';
 });
 imagens[indice].style.display = 'block';
 indice++;
 if (indice >= imagens.length) {
 indice = 0;
 }
}

setInterval(trocarImagem, 3000);

// hora e data


function saudacaoEData() {
    const agora = new Date();
    const horas = agora.getHours();
    const diaDaSemana = agora.toLocaleString('pt-BR', { weekday: 'long' });
    const diaDoMes = agora.getDate();
    const mes = agora.toLocaleString('pt-BR', { month: 'long' });
    const ano = agora.getFullYear();

    let saudacao;
    if (horas < 12) {
        saudacao = "Bom dia!";
    } else if (horas < 18) {
        saudacao = "Boa tarde!";
    } else {
        saudacao = "Boa noite!";
    }

    return `${saudacao} Hoje é ${diaDaSemana}, dia ${diaDoMes} de ${mes} de ${ano}.`;
}


document.getElementById("resultado").innerText = saudacaoEData();
