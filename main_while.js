function tocaSom(seletorAudio) {
    document.querySelector(seletorAudio).play()
};

const listaDeTeclas = document.querySelectorAll('.tecla');   //console.log(listaDeTeclas)

let contador = 0;

while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`//__TemplatString__ // console.log(idAudio);
  
       tecla.onclick = function () {
        tocaSom(idAudio);
    };
    contador = contador + 1; // console.log(contador);
}


// _________________________ Passo a Passo _____________________________


// 1° Criamos uma função que exige um elemento ( seletroAudio ) quando chamada em seu interior  usa esse elemento para
// reproduzir o audio com a função interna do JS ( .play() ) _____ Linha 1 a 3 ______


// 2°  Criamos um seletor que encontra no HTML atravez do document.querySelectorAll('.tecla') todo elemento que tem em
// comum a classe ( .tecla  ) retorna uma lista com eles e armazena-os na ( const listaDeTeclas ) ______ Linha 5 _______


// 3° Criamos um elemento que sera usado para armazenar a contagem do nosso laço de repetição while e colocamos seu valor em
// zero → ( let contador = 0 ) ______ Linha 7 _______


// 4° Criamos um laço de repetição While que possui uma condicional para ser executado e repete as instruções em seu interior
// enquanto essa condicional for verdadeira, a condicional desse while se da pelo valor do contador ser menor que o tamanho da 
// lista de teclas criada no 2° passo acrecida da funcionalidade ( .lenght ) que retorna o tamanho do elemento no nosso caso 
// 9 elementos de 0 a 8 que são os botões que possuem a classe ( .tecla ) ______ Linha 9 ______


// 5° Dentro do while criamos uma logica para criar o seletor de audio correto conforme o botão apertado

// 01- Criamos a const que armazena o valor da listaDeTecla tendo o contador como indice para determinar a posição do valor a 
// ser guardado ______ Linha 11 ______

// 02- Criamos outra const que usa o valor armazenado na const tecla seguido do classList[1] que busca a segunda classe do botão 
// e armazenana na const instrumento, observe no HTML que a segunda classse do botão tem um nome em comun com o id do arquivo de 
// audio  ______ Linha 12 ______

// 03- Criamos agora a const que usa o valor da const instrumento mais o prefixo ( '#som_' ) que é o prefixo comun de todos id's 
// dos audios, criando assim o nome do id do audio armazenando na const idAudio ______ Linha 13 _______

// 04- Com o seletor de audio criado las linhas 11, 12 e 13 chamamos agora a função criada no 1° passo e passamos o valor do seletor
// para a função que executa o audio conforme o seletor criado dentro do while ______ Linha 15 _______

// 05- Após o while agora acrecentamos ao contador o seu propio valor +1 a cada vez que while é executado, assim a condição uma hora 
// termina o laço while







