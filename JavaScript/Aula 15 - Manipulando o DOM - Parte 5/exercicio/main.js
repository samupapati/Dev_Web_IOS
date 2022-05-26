
adicionarItem = document.querySelector('.adicionarItem');
itemAdicionar = document.querySelector('.itemAdicionar');
valorAdicionar = document.querySelector('.valorAdicionar');
quantidadeAdicionar = document.querySelector('.quantidadeAdicionar');

divLi = document.querySelector('.divLi');
li = document.querySelector('.li');
valores = document.querySelector('.valores');
cifrao = document.querySelector('.cifrao');
buttonsItem = document.querySelector('.buttonsItem');
aumentarQtd = document.querySelector('.aumentarQtd');
numeroQtd = document.querySelector('.numeroQtd');
diminuirQtd = document.querySelector('.diminuirQtd');
excluirItem = document.querySelector('.excluirItem');

subtotal = document.querySelector('.subtotal');
liSubtotal = document.querySelector('.liSubtotal');
total = document.querySelector('.total');
liTotal = document.querySelector('.liTotal')

adicionarItem.addEventListener('submit', adicionarAoCarrinho);

function adicionarAoCarrinho(e){
  e.preventDefault();
  if(itemAdicionar.value != '' && valorAdicionar.value != '' && quantidadeAdicionar.value != ''){
    alert('teste')
  }
}