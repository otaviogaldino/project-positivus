let processCard = document.querySelector('.process-card');
let iconMais = document.getElementById('icon-mais');
let iconMenos = document.getElementById('icon-menos');
let processCardResposta = document.querySelector('.process-card-resposta');

iconMais.addEventListener('click', () => {
    processCardResposta.style.display = 'block';
    iconMais.style.display = 'none';
    iconMenos.style.display = 'block';
    processCard.style.backgroundColor = '#B9FF66';
    processCard.style.transition = '0.3s';
})
iconMenos.addEventListener('click', () => {
    processCardResposta.style.display = 'none';
    iconMais.style.display = 'block';
    iconMenos.style.display = 'none';
    processCard.style.backgroundColor = '#F3F3F3';
    processCard.style.transition = '0.3s';
})