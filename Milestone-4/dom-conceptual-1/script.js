// console.log("Hello from js");

// const listItems = document.getElementsByClassName("list-item")

// const mainDiv = document.querySelector('#mainDiv')
// console.log(mainDiv.children[0]);

// const img = document.querySelector('img')

// console.log(img);
// img.setAttribute('alt', 'updated.jpg')


const listItems = document.getElementsByClassName("list-item");
for (let list of listItems) {
  list.style.backgroundColor = "red";
}

const btn = document.getElementById("btn");

const countText = document.getElementById("count");

btn.addEventListener("click", function () {
  let currentCount = parseInt(countText.innerText);
  currentCount++;
  countText.innerText = currentCount;
});

const wishlistBtns = document.querySelectorAll(".wishlist-btn-card");

let count = 0;

wishlistBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    let wishCount = document.getElementById("wishCount");
    count++;
    wishCount.innerText = count;
  });
});

const buttons = document.querySelectorAll(".add-to-cart-btn");
// const buttons = document.getElementsByClassName('')
let cart = [];


buttons.forEach((btn) => {
     btn.addEventListener("click", function (e) {
    const card = e.target.closest(".product-cart");
    console.log(card);
    const ProductName = card.querySelector(".product-name").textContent;
    const price = parseInt(card.querySelector(".product-price").textContent);
    const category = card.querySelector(".category-name").textContent;

    const product = {
      name: ProductName,
      productPrice: price,
      ProductCategory: category,
      quantity: 1,
    };

    addToCart(product);
  });
});



// using for of
// for (let btn of buttons) {
//   btn.addEventListener("click", function (e) {
//     const card = e.target.closest(".product-cart");
//     console.log(card);
//     const ProductName = card.querySelector(".product-name").textContent;
//     const price = parseInt(card.querySelector(".product-price").textContent);
//     const category = card.querySelector(".category-name").textContent;

//     const product = {
//       name: ProductName,
//       productPrice: price,
//       ProductCategory: category,
//       quantity: 1,
//     };

//     addToCart(product);
//   });
// }

// cart = [
// {name: 'Smart Watch', productPrice: 2500, ProductCategory: 'Electronics', quantity: 2},
// {name: 'Headphone', productPrice: 4500, ProductCategory: 'Electronics', quantity: 1}
// ]

function addToCart(product) {
    
  const existingItem = cart.find((item) => item.name == product.name);

//   existingItem ={name: 'Smart Watch', productPrice: 2500, ProductCategory: 'Electronics', quantity: 2}

  console.log(existingItem);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push(product);
  }
  console.log(cart);
  updateCart();
}

const cartItemsDiv = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalPrice = document.getElementById("totalPrice");

function updateCart() {
  cartItemsDiv.innerHTML = "";
  let total = 0;
  let totalItems = 0;

  cart.forEach((item) => {
    total = total + item.productPrice * item.quantity;
    totalItems = totalItems + item.quantity;

    const div = document.createElement("div");
    div.innerHTML = `
            ${item.name} (x ${item.quantity}) - $ ${item.productPrice * item.quantity}
            <button>Remove</button>
        `;
    cartItemsDiv.appendChild(div);
  });

  console.log(total);

  cartCount.innerText = totalItems;
  totalPrice.innerText = total;
}
