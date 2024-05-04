function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null  && elemento.localName === 'audio') {
    // (elemento && elemento.localName === 'audio') O null é opcional, o Js 
    // entende que o elemento sozinho dever ser diferente de nulo, conter algum valor.
        elemento.play();
    }

    else{   
        console.log('Elemento não encontrado ou seletor invalido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}` //__TemplatString__
    
    tecla.onclick = function () {
    tocaSom(idAudio)
    };

    tecla.onkeydown = function (evento) { //console.log(evento)
        if (evento.code === 'Space' || evento.code === 'Enter')
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

} 


//___________________________ PASSO A PASSO _____________________________________.

// 1° Criamos uma função que exige um elemento ( seletroAudio ) quando chamada em seu interior  usa esse elemento para
// reproduzir o audio com a função interna do JS ( .play() ), porem agora a função antes de executar usa o operador if ( se )
// para conferir se o elemento passado dentro da função existe e tambem se ele é um elemento de audio, e usa o operador else ( se não )
// que retorna algo caso o if não aconteça.
//_____ Linha 1 a 13 ______


// 2°  Criamos um seletor que encontra no HTML atravez do document.querySelectorAll('.tecla') todo elemento que tem em
// comum a classe ( .tecla  ) retorna uma lista com eles e armazena-os na ( const listaDeTeclas ) ______ Linha 15 _______


// 3° Criamos o laço de repetição for ( para ), dentro do for podemos passar 3 elementos, o primeiro executa antes do laço e geralemte
// é a declaração do contador do laço, o segundo executa durante o laço e é a condição para execução do laço, o terceiro executa apos o laço
// e geralemten incrementa o valor do contador que termina o laço ______ Linha 17 ______


// 4° Dentro do for criamos uma logica para criar o seletor de audio correto conforme o botão apertado, criamos uma logica para que 
// adicionar a classe que muda os botões de cor quando apertados atravez do teclado já que o css só interpreta o click do mouse.

// 01- Criamos a const que armazena o valor da listaDeTecla tendo o contador como indice para determinar a posição do valor a 
// ser guardado ______ Linha 19 ______

// 02- Criamos outra const que usa o valor armazenado na const tecla seguido do classList[1] que busca a segunda classe do botão 
// e armazenana na const instrumento, observe no HTML que a segunda classse do botão tem um nome em comun com o id do arquivo de 
// audio  ______ Linha 20 ______

// 03- Criamos agora a const que usa o valor da const instrumento mais o prefixo ( '#som_' ) que é o prefixo comun de todos id's 
// dos audios, criando assim o nome do id do audio armazenando na const idAudio ______ Linha 21 _______

// 04- Com o seletor de audio criado las linhas 19, 20 e 21 chamamos agora a função criada no 1° passo e passamos o valor do seletor
// para a função que executa o audio conforme o seletor criado dentro do while ______ Linha 23 _______

// 05- Com a função interna do JS onkeydonw criamos uma função que guarda o evento de aperta uma tecla para baixo, depois usamos um 
// if para conferir se as teclas apertadas são espaço ou enter, e se forem atravez do classList.add() adiciona a classe .ativa do css 
// que muda a cor do botão quando tambem precionado atravez do teclado do computador _____ Linha 27 a 29 ______

// 06- Com a função interna do JS onkeyup detectamos o evento quanto a tecla é desapertada e criamos uma função que remove
// a classe .ativa  com classList.remove(), assim devolvendo a cor do botão original.


// Operadores → ( AND = && ) ( OR = || ) ( === Compara valor e tipo  )

