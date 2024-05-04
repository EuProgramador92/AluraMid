// Exemplo sem laços de repetição.


function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play()
    }
document.querySelector('.tecla_pom').onclick = tocaSomPom;


function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play()
    }
document.querySelector('.tecla_clap').onclick = tocaSomClap;


function tocaSomTim(){
    document.querySelector('#som_tecla_tim').play()};
document.querySelector('.tecla_tim').onclick = tocaSomTim;


function tocaSomPuff(){
    document.querySelector('#som_tecla_puff').play()};
document.querySelector('.tecla_puff').onclick = tocaSomPuff;


function tocaSomSplash(){
    document.querySelector('#som_tecla_splash').play()};
document.querySelector('.tecla_splash').onclick = tocaSomSplash;

function tocaSomToim(){
    document.querySelector('#som_tecla_toim').play()};
document.querySelector('.tecla_toim').onclick = tocaSomToim;


function tocaSomPsh(){
    document.querySelector('#som_tecla_psh').play()};
document.querySelector('.tecla_psh').onclick = tocaSomPsh;


function tocaSomTic(){
    document.querySelector('#som_tecla_tic').play()};
document.querySelector('.tecla_tic').onclick = tocaSomTic;


function tocaSomTom(){
    document.querySelector('#som_tecla_tom').play()};
document.querySelector('.tecla_tom').onclick = tocaSomTom;



//__________ PASSO A PASSO___________________

// Nesse exemplo para funcionamento do teclado criamos uma função para encontrar o elemento de audio dentro do HTML 
// → function tocaSomTom(){ document.querySelector('#som_tecla_tom').play()};

// Após usamos a função querySelector para identificar o botão no HTML para reproduzir aquele som, e chamamos a função
// criada anteriormente ao precionar o botão atravez do ( .onclick ) passando o valor para função atravez do operador ( = )
// → document.querySelector('.tecla_tom').onclick = tocaSomTom;

// Explicando os elementos
// document → siginifica todo o documento HTML
// querySelector() → função nativa do JavaScripit para encontrar algo no documento HTML
// ( ' # xxxxx ') → Dentro de uma função procura por um elemento tipo ( id )
// ( ' . xxxxx ') → Dentro de uma função procura por um elemento tipo ( classe )
// .play() → Função nativa do JavaScripit para executar audio

// Inviabilidade do metodo → Se tivessimos muito botões o codgo seria muito repetitivo e extenso