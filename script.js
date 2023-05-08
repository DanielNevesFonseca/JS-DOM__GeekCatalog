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

function insertElementsInHeader() {
  const logo = document.createElement('img');
  logo.src = 'logo.svg';
  logo.style.cursor = 'pointer';
  document.querySelector('header').appendChild(logo);

  const boxButtons = document.createElement('ul');
  boxButtons.id = 'box-buttons';
  document.querySelector('header').appendChild(boxButtons);

  const productsButton = document.createElement('li');
  productsButton.innerText = 'Products';
  document.querySelector('#box-buttons').appendChild(productsButton);

  const contactButton = document.createElement('li');
  contactButton.innerText = 'Contact';
  document.querySelector('ul').appendChild(contactButton);
}

const paintingsTitle = document.createElement('h2');
paintingsTitle.innerText = 'Paintings';
paintingsTitle.id = 'paintings-title';
document.querySelector('.paintings').appendChild(paintingsTitle);

const titleActionFigures = document.createElement('h2');
titleActionFigures.innerText = 'Action Figures';
titleActionFigures.id = 'action-figures-title';
document.querySelector('.action-figures').appendChild(titleActionFigures);

const containerProductsPaintings = document.createElement('ul');
containerProductsPaintings.className = 'container-products-paintings';
document.querySelector('.paintings').appendChild(containerProductsPaintings);

const containerProductsActionFigures = document.createElement('ul');
containerProductsActionFigures.className = 'container-products-action-figures';
document.querySelector('.action-figures').appendChild(containerProductsActionFigures);

function createPaintingCards(paintingsList) {
  for (let i = 0; i < paintingsList.length; i++) {
    const boxProduct = document.createElement('li');
    boxProduct.className = 'box-product-p';

    const productImage = document.createElement('img');
    productImage.src = paintingsList[i].image;
    productImage.id = 'image-product';

    const nameProduct = document.createElement('h3');
    nameProduct.id = 'title-product-name';
    nameProduct.innerText = paintingsList[i].name;

    const priceProduct = document.createElement('p');
    priceProduct.id = 'price-product';
    priceProduct.innerText = paintingsList[i].price;

    document.querySelector('.container-products-paintings').appendChild(boxProduct);
    document.querySelectorAll('.box-product-p')[i].appendChild(productImage);
    document.querySelectorAll('.box-product-p')[i].appendChild(nameProduct);
    document.querySelectorAll('.box-product-p')[i].appendChild(priceProduct);
  }
}

function createActionFigCards(actionFigList) {
  for (let i = 0; i < actionFigList.length; i++) {
    const boxProduct = document.createElement('li');
    boxProduct.className = 'box-product-af';

    const productImage = document.createElement('img');
    productImage.src = actionFigList[i].image;
    productImage.id = 'image-product';

    const nameProduct = document.createElement('h3');
    nameProduct.id = 'title-product-name';
    nameProduct.innerText = actionFigList[i].name;

    const priceProduct = document.createElement('p');
    priceProduct.id = 'price-product';
    priceProduct.innerText = actionFigList[i].price;

    document.querySelector('.container-products-action-figures').appendChild(boxProduct);
    document.querySelectorAll('.box-product-af')[i].appendChild(productImage);
    document.querySelectorAll('.box-product-af')[i].appendChild(nameProduct);
    document.querySelectorAll('.box-product-af')[i].appendChild(priceProduct);
  }
}
// chamada da função da montagem do header
insertElementsInHeader();

// chamadas das funções construtoras de cards
createActionFigCards(actionFiguresArray);
createPaintingCards(paintingsArray);












