const audios = [
   

    {caminho:'audios/Ai.mp3', legenda: 'Ai'},
    {caminho:'audios/Aiaiaii.mp3', legenda: 'Aiaiaii'},
    {caminho:'audios/Cavalo.mp3', legenda: 'Cavalo'},
    {caminho:'audios/Cheega.mp3', legenda: 'Cheega'},
    {caminho:'audios/Dança gatinho dança.mp3', legenda: 'Dança gatinho dança'},
    {caminho:'audios/Demaais.mp3', legenda: 'Demaais'},
    {caminho:'audios/É brincadeira ein!.mp3', legenda: 'É brincadeira ein!'},
    {caminho:'audios/Ele goosta.mp3', legenda: 'Ele goosta'},
    {caminho:'audios/Esqueca-tudo.mp3', legenda: 'Esqueca-tudo'},
    {caminho:'audios/Não.mp3', legenda: 'Não'},
    {caminho:'audios/Pare!.mp3', legenda: 'Pare!'},
    {caminho:'audios/Que isso meu filho calma.mp3', legenda: 'Que isso meu filho calma'},
    {caminho:'audios/Que papelao ein.mp3', legenda: 'Que papelao ein'},
    {caminho:'audios/Risada atumalaca.mp3', legenda: 'Risada atumalaca'},
    {caminho:'audios/Tome.mp3', legenda: 'Tome'},
    {caminho:'audios/Ui.mp3', legenda: 'Ui'},
    {caminho:'audios/Vamo dança.mp3', legenda: 'Vamo dança'},
    {caminho:'audios/Xiiii.mp3', legenda: 'Xiiii.mp3'},
    {caminho:'audios/ahh-agora-eu-entendi-agora-eu-saquei.mp3', legenda: 'ahh agora eu entendi'},
    {caminho:'audios/bem-te-vi-cantando.mp3', legenda: 'bem te vi cantando'},
    {caminho:'audios/bom-dia-pra-voce.mp3', legenda: 'bom dia pra voce'},
    {caminho:'audios/chapolin-nao-aguenta-brincadeira.mp3', legenda: 'chapolin'},
    {caminho:'audios/chaves-ai-que-burro-da-zero-pra-ele.mp3', legenda: 'chaves'},
    {caminho:'audios/cleber-machado-ih-rapaz-que-loucura.mp3', legenda: 'ih rapaz'},
    {caminho:'audios/dilma-ganhar-e-perder.mp3', legenda: 'dilma ganhar ou perder'},
    {caminho:'audios/dona-florinda-como-e-que-e.mp3', legenda: 'dona florinda'},
    {caminho:'audios/eu-sou-rica.mp3', legenda: 'eu sou rica'},
    {caminho:'audios/faustao-errou.mp3', legenda: 'errow'},
    {caminho:'audios/filomena-oh-coitado.mp3', legenda: 'oh coitado'},
    {caminho:'audios/galvao-bueno-haja-coracao.mp3', legenda: 'haja coracao'},
    {caminho:'audios/gemido-whatsapp.mp3', legenda: 'NÃO CLIQUE AQUI'},
    {caminho:'audios/grilo-estridulando.mp3', legenda: 'grilo'},
    {caminho:'audios/jair-bolsonaro-o-tempo-todo-infernizam-a-minha-vida-orra.mp3', legenda: 'jair bolsonaro'},
    {caminho:'audios/obrigado-amigo-voce-e-um-amigo.mp3', legenda: 'obrigado amigo'},
    {caminho:'audios/ok-houve-um-equivoco.mp3', legenda: 'pk houve um equivoco'},
    {caminho:'audios/plantao-da-globo.mp3', legenda: 'plantão globo'},
    {caminho:'audios/risada-bebe-crianca.mp3', legenda: 'risada bebe'},
    {caminho:'audios/risada-carlos-alberto-de-nobrega.mp3', legenda: 'risada carlos alberto'},
    {caminho:'audios/risada-chucky-brinquedo-assassino.mp3', legenda: 'risada chucky'},
    {caminho:'audios/risada-coringa-joker.mp3', legenda: 'risada jocker'},
    {caminho:'audios/risada-de-fundo-de-chaves.mp3', legenda: 'risada chaves'},
    {caminho:'audios/risada-gargalhada-interminavel.mp3', legenda: 'risada interminavel'},
    {caminho:'audios/risada-hilaria-homem-47-segundos.mp3', legenda: 'risada interminavel 2'},
    {caminho:'audios/risada-kiko-quico.mp3', legenda: 'risada kiko'},
    {caminho:'audios/seu-madruga-reprovado.mp3', legenda: 'seu madruga reprovado'},
    {caminho:'audios/silvio-santos-abertura-show-do-milhao.mp3', legenda: 'show do milhao'},
    {caminho:'audios/silvio-santos-certa-resposta.mp3', legenda: 'certa resposta'},
    {caminho:'audios/silvio-santos-e-ta-bom.mp3', legenda: 'ta bom'},
    {caminho:'audios/ta-chovendo-ai-aqui-ta-chovendo.mp3', legenda: 'ta chovendo ai'},
    {caminho:'audios/tema-da-vitoria-curto.mp3', legenda: 'tema vitoria'},
    {caminho:'audios/to-passada-chocada-meu-deus-jesus.mp3', legenda: 'to passado'},
    {caminho:'audios/vaca-mugindo.mp3', legenda: 'vaca mudindo'},
    {caminho:'audios/xaropinho-ratinho-rapaz.mp3', legenda: 'xaropinho ih rapaz'},
    
];

function trocar(){
    let currentImgIndex=1;
    const ImgSrcArray = [ //caminho das suas imgs aqui
        'images/botao3.png',
    ];
    const el = document.getElementById('btn');
    el.addEventListener('click', function(e) {
        idBotao = e.target.id;

    if(currentImgIndex === ImgSrcArray.length) {
        currentImgIndex=0;
    }

    document.getElementById(idBotao).src=ImgSrcArray[currentImgIndex];
    currentImgIndex++;
    setTimeout(function() {
        document.getElementById(idBotao).src='images/botao.png'; //altera a img do elemento "agni" de acordo com o indice
    }, 1000);
    });
}

const botoes = document.querySelectorAll('.botao');
const legendas = document.querySelectorAll('p');

for (let i=0; i < 53; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

const audioTag = document.querySelector('audio');


botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play().then(r => {

            });
        });

    });

});
