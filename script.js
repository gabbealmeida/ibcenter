var menuItem = document.querySelectorAll('.item-menu');

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo'));
    this.classList.add('ativo');
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink));

// Ativar links do menu

var btnExp = document.querySelector('#btn-exp');
var sidebar = document.querySelector('.sidebar');

btnExp.addEventListener('click', function () {
    sidebar.classList.toggle('exp'); // Alterna a classe 'exp' na sidebar para expandir ou recolher o menu
}   );