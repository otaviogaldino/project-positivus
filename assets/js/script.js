let processCards = document.querySelectorAll('.process-card');

processCards.forEach(card => {
    let iconMais = card.querySelector('.icon-mais');
    let iconMenos = card.querySelector('.icon-menos');
    let processCardResposta = card.querySelector('.process-card-resposta');

    

    iconMais.addEventListener('click', () => {
        processCardResposta.style.display = 'block';
        iconMais.style.display = 'none';
        iconMenos.style.display = 'block';
        card.style.backgroundColor = '#B9FF66';
        card.style.transition = '0.3s';
    })
    iconMenos.addEventListener('click', () => {
        processCardResposta.style.display = 'none';
        iconMais.style.display = 'block';
        iconMenos.style.display = 'none';
        card.style.backgroundColor = '#F3F3F3';
        card.style.transition = '0.3s';
    })
})

let menuToggle = document.getElementById('menu-toggle');
let nav = document.querySelector('header > nav'); 
menuToggle.addEventListener('click', () => {
    if(nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
})