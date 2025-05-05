window.onload = function () {
  const palos = [
    { nombre: 'heart', simbolo: '♥' },
    { nombre: 'spade', simbolo: '♠' },
    { nombre: 'club', simbolo: '♣' },
    { nombre: 'diamond', simbolo: '♦' }
  ];

  const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const paloIndex = Math.floor(Math.random() * 4);
  const valorIndex = Math.floor(Math.random() * 13);

  const palo = palos[paloIndex];
  const valor = valores[valorIndex];

  const carta = document.createElement('div');
  carta.classList.add('card', palo.nombre);

  const topLeft = document.createElement('div');
  topLeft.classList.add('top-left');
  topLeft.textContent = valor + palo.simbolo;

  const bottomRight = document.createElement('div');
  bottomRight.classList.add('bottom-right');
  bottomRight.textContent = valor + palo.simbolo;

  const center = document.createElement('div');
  center.classList.add('center');
  center.textContent = palo.simbolo;
  center.style.fontSize = '3rem';

  carta.appendChild(topLeft);
  carta.appendChild(center);
  carta.appendChild(bottomRight);

  document.getElementById('cardContainer').appendChild(carta);
};
