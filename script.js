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

let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let iconTrilho = document.getElementById('icon-trilho');

trilho.addEventListener('click', ()=> {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        iconTrilho.classList.replace('bi-brightness-high', 'bi-moon');
    } else {
        iconTrilho.classList.replace('bi-moon', 'bi-brightness-high');
    }
})
