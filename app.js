var contador = document.getElementById('contador');
contador.textContent= 0
var botao = document.getElementById('botao');
var parabens= document.getElementById('parabens');

botao.addEventListener('click',function(){

    contador.textContent = parseInt(contador.textContent) + 1;
    var temp = parseInt(contador.textContent);

    if (temp % 100 === 0) {
        parabens.textContent = 'Novo Record: ' + temp + ' clicks';
    }
});
