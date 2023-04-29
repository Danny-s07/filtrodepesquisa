const filterElement = document.querySelector('header input');
const cards = document.querySelectorAll('.cards li');

filterElement.addEventListener('input', filterCards);

function filterCards() {
  cards.forEach((card) => {
    // Resetar o estilo do Card
    card.style.display = 'block';

    // Como tem por garantia que sempre terá valor no titulo do Card,
    // pode pegar direto o H2, sem fazer verificações de segurança antes.
    const title = card.querySelector('h2').textContent.toLowerCase();
    const filterText = filterElement.value.toLowerCase();

    // Para dar suporte simples a multi-termos, você pode usar a aborgadem
    // de ter uma lista, e caso a palavra exista no titulo, salvar um true
    // e no final, caso tenha no minimo um true, mostrar o card
    const showCard = [];
    for (let word of filterText.split(' ')) {
      showCard.push(title.includes(word));
    }

    card.style.display = showCard.includes(true) ? 'block' : 'none';
  });
}
