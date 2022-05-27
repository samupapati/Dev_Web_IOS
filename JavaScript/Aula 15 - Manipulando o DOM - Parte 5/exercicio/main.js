
adicionarItem = document.querySelector('.adicionarItem');
itemAdicionar = document.querySelector('.itemAdicionar');
valorAdicionar = document.querySelector('.valorAdicionar');
quantidadeAdicionar = document.querySelector('.quantidadeAdicionar');



subtotal = document.querySelector('.subtotal');
liSubtotal = document.querySelector('.liSubtotal');
total = document.querySelector('.total');
liTotal = document.querySelector('.liTotal')

adicionarItem.addEventListener('submit', adicionarAoCarrinho);

function adicionarAoCarrinho(e){
  e.preventDefault();
  if(itemAdicionar.value != '' && valorAdicionar.value != '' && quantidadeAdicionar.value != ''){

  }
}