/*

dragstart -> Quando você segura um botão do mouse e começa a movê-lo,é acionado no elemento arrastável que você está arrastando.

drag -> Depois que o dragstartevento é acionado, é acionado repetidamente enquanto você arrasta o elemento.

dragend -> é acionado quando você para de arrastar o elemento.

---

dragenter -> é acionado assim que você arrasta o elemento sobre um destino de soltura.

dragover -> Depois que o dragenter evento é acionado, é acionado repetidamente, desde que você arraste o elemento dentro do limite do destino de soltura.

dragleave -> é acionado Quando você arrasta o elemento para fora do limite do destino de soltura. o dragover para de disparar e dragleave dispara.

drop -> é acionado caso você solte o elemento no alvo. é acionado em vez do dragleave.

---

Para transformar um elemento em um destino de soltar válido, você pode substituir o comportamento padrão de ambos os eventos dragenter e dragover chamando o event.preventDefault().

---

Para transferir dados em uma ação de arrastar e soltar, você usa o dataTransfer.

O dataTransfer é uma propriedade do evento. Ele permite que você transfira dados do elemento arrastado para o destino de soltura.

O dataTransfer tem dois métodos: setData()e getData().

O setData() permite definir os dados da operação de arrastar para o formato e dados especificados:

Exemplo: dataTransfer.setData(format, data)

O formato pode ser text/plain ou text/uri-list. E os dados podem ser uma string representando os dados a serem adicionados ao objeto de arrastar.

O getData() recupera os dados de arrastar armazenados pelo setData(). O getData()aceita um argumento:

Exemplo: dataTransfer(format)

O formato pode ser text/plain ou text/uri-list. O getData() retorna uma string armazenada pelo setData() ou uma string vazia se a operação de arrastar não incluir dados.

*/


// ----------------------------------------------------------------

// seleciona o elemento
const item = document.querySelector('.item');
const drops = document.querySelector('.container');

// drops.addEventListener('dragover', (e) => e.preventDefault());
// drops.addEventListener('drop', () => item.classList.remove('hide'));

// anexe o manipulador de eventos dragstart
item.addEventListener('dragstart', dragStart);

// manipula o início do arrasto
function dragStart(e) {
  // console.log('drag starts....');

  // console.log(e.target);

  e.dataTransfer.setData('text/plain', e.target.id); // armazena o idelemento arrastável.

  setTimeout(() => e.target.classList.add('hide'), 0); // faz o elemento desaparecer de sua posição original (testar sem este código para entender o funcionamento)
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('dragenter', dragEnter);
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', drop);
});

function dragEnter(e) {
  e.preventDefault();

  console.log('enter');
  // console.log(e.target);

  e.target.classList.add('drag-over');
}

function dragOver(e) {
  e.preventDefault();

  console.log('over');
  // console.log(e.target);

  e.target.classList.add('drag-over');
}

function dragLeave(e) {
  console.log('leave');
  // console.log(e.target);

  e.target.classList.remove('drag-over');
}

function drop(e) {
  console.log('drop');
  // console.log(e.target);

  e.target.classList.remove('drag-over');

  // obtém o elemento arrastável
  const id = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(id);

  // adicioná-lo ao destino de soltar
  e.target.appendChild(draggable);

  // exibe o elemento arrastável
  draggable.classList.remove('hide');
}

// RESUMO

/*

Adicione a draggable com o valor true a um elemento para torná-lo arrastável;

Os eventos dragstart, drage dragend disparam no elemento arrastável;

Os eventos , ou são disparados no destino dragenterde soltar dragover . dragleave drop;
Chame os manipuladores event.preventDefault() de eventos dragenter e dragover para tornar um elemento um destino de soltar válido;

Use o event.dataTransfer objeto com os métodos setData() e getData() para transferir dados na operação de arrastar e soltar.

*/