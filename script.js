const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },  
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3 
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$ 99,00",
    type: "Paintings",
  },
  // Produto 4 
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$ 275,00",
    type: "Paintings",
  },
  // Produto 5
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$ 160,00",
    type: "Paintings",
  },
  // Produto 6
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$ 120,00",
    type: "Paintings",
  },
  // Produto 7
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$ 700,00",
    type: "Action Figures",
  },
  // Produto 8
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$ 950,00",
    type: "Action Figures",
  },
  // Produto 9
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$ 1030,00",
    type: "Action Figures",
  },
  // Produto 10
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$ 870,00",
    type: "Action Figures",
  },
  // Produto 11
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$ 510,00",
    type: "Action Figures",
  },
];

// Código abaixo desenvolvido por Daniel Neves Fonseca

const actionFiguresArray = [];
const paintingsArray = [];

// esta função separa os produtos de acordo com seus tipos e armazena os objetos em arrays
function separateItems(productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].type === 'Action Figures') {
      actionFiguresArray.push(productsArray[i]);
    } else if (productsArray[i].type === 'Paintings') {
      paintingsArray.push(productsArray[i]);
    }
  }
}
separateItems(productsArray);

// criação e inserção da logo no body
const logo = document.createElement('img');
logo.src = 'logo.svg';
logo.style.cursor = 'pointer';
document.querySelector('header').appendChild(logo);

// criação e inserção da uma ul no header
const boxBotoes = document.createElement('ul');
boxBotoes.id = 'box-botoes';
document.querySelector('header').appendChild(boxBotoes);

// criação e inserção dos botoes na ul
const botaoProducts = document.createElement('li');
botaoProducts.innerText = 'Products';
document.querySelector('#box-botoes').appendChild(botaoProducts);

const botaoContact = document.createElement('li');
botaoContact.innerText = 'Contact';
document.querySelector('ul').appendChild(botaoContact);

// criação e inserção dos titulos nas sections no main
const tituloPaintings = document.createElement('h1');
tituloPaintings.innerText = 'Paintings';
tituloPaintings.id = 'paintings-titulo';
document.querySelector('.paintings').appendChild(tituloPaintings);

const tituloActionFigures = document.createElement('h1');
tituloActionFigures.innerText = 'Action Figures';
tituloActionFigures.id = 'action-figures-titulo';
document.querySelector('.action-figures').appendChild(tituloActionFigures);

//  criação e inserção container do modelo caixa de produtos
const containerProdutosPaintings = document.createElement('div');
containerProdutosPaintings.className = 'container-produtos-paintings';
document.querySelector('.paintings').appendChild(containerProdutosPaintings);

const containerProdutosActFigures = document.createElement('div');
containerProdutosActFigures.className = 'container-produtos-action-figures';
document.querySelector('.action-figures').appendChild(containerProdutosActFigures);

function createPaintingCards(paintingsList) {
  for (let i = 0; i < paintingsList.length; i++) {
    const boxProduto = document.createElement('div');
    boxProduto.className = 'box-produto-p';
    // imagem dentro da caixa de produtos
    const imagemProduto = document.createElement('img');
    imagemProduto.src = paintingsList[i].image;
    imagemProduto.id = 'imagem-produto';

    // título nome do produto
    const nomeProduto = document.createElement('h2');
    nomeProduto.id = 'titulo-nome-produto';
    nomeProduto.innerText = paintingsList[i].name;

    // preço do produto
    const precoProduto = document.createElement('p');
    precoProduto.id = 'preco-produto';
    precoProduto.innerText = paintingsList[i].price;

    document.querySelector('.container-produtos-paintings').appendChild(boxProduto);
    document.querySelectorAll('.box-produto-p')[i].appendChild(imagemProduto);
    document.querySelectorAll('.box-produto-p')[i].appendChild(nomeProduto);
    document.querySelectorAll('.box-produto-p')[i].appendChild(precoProduto);
  }
}
createPaintingCards(paintingsArray);

function createActionFigCards(actionFigList) {
  for (let i = 0; i < actionFigList.length; i++) {
    const boxProduto = document.createElement('div');
    boxProduto.className = 'box-produto-af';
    // imagem dentro da caixa de produtos
    const imagemProduto = document.createElement('img');
    imagemProduto.src = actionFigList[i].image;
    imagemProduto.id = 'imagem-produto';

    // título nome do produto
    const nomeProduto = document.createElement('h2');
    nomeProduto.id = 'titulo-nome-produto';
    nomeProduto.innerText = actionFigList[i].name;

    // preço do produto
    const precoProduto = document.createElement('p');
    precoProduto.id = 'preco-produto';
    precoProduto.innerText = actionFigList[i].price;

    document.querySelector('.container-produtos-action-figures').appendChild(boxProduto);
    document.querySelectorAll('.box-produto-af')[i].appendChild(imagemProduto);
    document.querySelectorAll('.box-produto-af')[i].appendChild(nomeProduto);
    document.querySelectorAll('.box-produto-af')[i].appendChild(precoProduto);

  }
}
createActionFigCards(actionFiguresArray);












