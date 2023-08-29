// script.js
const productContainer = document.querySelector('.product-container');
const modal = document.getElementById('product-modal');

// Load and display products
fetch('products.json')
  .then(response => response.json())
  .then(products => {
    displayProducts(products);
  });

function displayProducts(products) {
    productContainer.innerHTML = '';
  
    products.slice(0, 1).forEach(product => {
      const productCard = createProductCard(product);
      productContainer.appendChild(productCard);
    });
}


function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');

  const productImage = document.createElement('img');
  productImage.src = product.image;
  productImage.alt = product.name;
  card.appendChild(productImage);

  const productName = document.createElement('h3');
  productName.textContent = product.name;
  card.appendChild(productName);

  const productPrice = document.createElement('p');
  productPrice.textContent = product.price;
  card.appendChild(productPrice);

  card.addEventListener('click', () => {
    openProductModal(product);
  });

  return card;
}

function openProductModal(product) {
  modal.innerHTML = `
    <div class="modal-content">
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.price}</p>
      <p>${product.description}</p>
      <button id="modal-close">Close</button>
    </div>
  `;

  modal.style.display = 'flex';

  const modalCloseButton = document.getElementById('modal-close');
  modalCloseButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}
