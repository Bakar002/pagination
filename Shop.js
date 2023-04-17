
if (localStorage.getItem('isLoggedIn') === 'true') {
    // User is logged in, show the "logged in" section and hide the "logged out" section
    document.getElementById('cart-icon').classList.remove('hidden');
    
  } else {
   
    document.getElementById('cart-icon').classList.add('hidden');
   
  }
  const searchInput = document.getElementById("search-input");
 searchInput.style.display = "none";
  Badge();

  if (localStorage.getItem('inputArray'))
  {dyn()};
  const paginationContainer1=document.getElementById("pagination1");
  const paginationContainer2=document.getElementById("pagination2");
  const paginationContainer3=document.getElementById("pagination3");
  const paginationContainer4=document.getElementById("pagination4");
  const paginationContainer5=document.getElementById("pagination5");

  paginationContainer2.style.display = "none";
  paginationContainer1.style.display = "none";
  paginationContainer3.style.display = "none";
  paginationContainer4.style.display = "none";
  paginationContainer5.style.display = "none";
 ReCards();
  let inputArray = [];
  const container4 = document.querySelector(".cards-container4");

  fetch("All.Json")
    .then((response) => response.json())
    .then((data) => {
      const itemsPerPage = 6;
      showProducts(1);
      // Calculate the number of pages
      const totalPages = Math.ceil(data.products.length / itemsPerPage);
      
      // Get the product list container and pagination container
     
      const paginationContainer4 = document.getElementById("pagination4");
     // Get the search input element
const searchInput = document.getElementById("search-input");

// Add an event listener to the search input
searchInput.addEventListener("input", () => {
  // Show the first page of products with the current search input
  showProducts(1);
});

      // Create the pagination buttons
      for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.classList.add("my-button");
        button.innerText = i;
        if (button.checked) {
          // Change the background color of the button when it's checked
          button.style.backgroundColor = "blue";
        } else {
          // Reset the background color of the button when it's unchecked
          button.style.backgroundColor = "";
        }
        button.addEventListener("click", () => {
          // 

          showProducts(i);
         

        });
        paginationContainer4.appendChild(button);
       
      }
      function showProducts(page) {
const searchInput = document.getElementById("search-input");

  const searchText = searchInput.value.trim().toLowerCase();
 
  // Calculate the start and end indexes of the products to display
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the products for the current page
  let productsToDisplay = data.products.slice(startIndex, endIndex);

  // Filter the products based on the search input
  if (searchText !== "") {
    productsToDisplay = data.products.filter((product) =>
      product.title.toLowerCase().includes(searchText)
    );
  }
  

      
     container4.innerHTML = "";
      productsToDisplay.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        const image = document.createElement("div");
        image.classList.add("card__image");
        image.style.backgroundImage = `url(${product.image})`;
        card.appendChild(image);
  
        const info = document.createElement("div");
        info.classList.add("card__info");
        card.appendChild(info);
  
        const title = document.createElement("h2");
        title.classList.add("card__title");
        title.textContent = product.title;
        info.appendChild(title);
  
        const price = document.createElement("div");
        price.classList.add("card__price");
        price.textContent = `$${product.price.toFixed(2)}`;
        info.appendChild(price);
        const addToCartIcon = document.createElement("i");
        addToCartIcon.classList.add("fas", "fa-cart-plus", "card__add-to-cart");
        addToCartIcon.addEventListener("click", () => {
        
          let titl=product.title;
            let pric=product.price;
            let imag=product.image;
            let existingItem = inputArray.find(item => item.title === titl)
  
          if (existingItem) { // if an existing item is found
    existingItem.quantity++; // increase the quantity of the existing item
  } else { // if no existing item is found
    const item = {
      title: titl,
      price: pric,
      image: imag,
      quantity: 1 // set the initial quantity to 1
    };
    inputArray.push(item); // push the item object into the array
  }      
  update();
  
  dyn();
  updateTotal();
  addEvents();
  Badge();
        });
       
         // store the updated items array in local storage
        
        price.appendChild(addToCartIcon);
  
      container4.appendChild(card);
      });}
    })
    .catch((error) => {
      console.log(error);
    });
  
  container4.style.display = "none";
  
  // show the cards when the button is clicked
  
  const showCardsBtn4 = document.querySelector("#show-cards-btn4");
  showCardsBtn4.addEventListener("click", () => {
  container2.style.display = "none";
  container.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "flex";
  container5.style.display = "none";
  paginationContainer2.style.display = "none";
  paginationContainer1.style.display = "none";
  paginationContainer3.style.display = "none";
  paginationContainer4.style.display = "flex";
  paginationContainer5.style.display = "none";
  searchInput.style.display = "flex";
  
  ;
  });
  const container5 = document.querySelector(".cards-container5");
  fetch("Toys.Json")
  .then((response) => response.json())
  .then((data) => {
    const itemsPerPage = 6;

      // Calculate the number of pages
      const totalPages = Math.ceil(data.products.length / itemsPerPage);
      
      // Get the product list container and pagination container
     
      const paginationContainer5 = document.getElementById("pagination5");
      showProducts(1);
      const searchInput = document.getElementById("search-input");

// Add an event listener to the search input
searchInput.addEventListener("input", () => {
  // Show the first page of products with the current search input
  showProducts(1);
});
      // Create the pagination buttons
      for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.classList.add("my-button");
        button.innerText = i;
        button.addEventListener("click", () => {
          // 

          showProducts(i);
        });
        paginationContainer5.appendChild(button);
      }
      function showProducts(page) {
        const searchInput = document.getElementById("search-input");

        const searchText = searchInput.value.trim().toLowerCase();
       
        // Calculate the start and end indexes of the products to display
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
      
        // Get the products for the current page
        let productsToDisplay = data.products.slice(startIndex, endIndex);
      
        // Filter the products based on the search input
        if (searchText !== "") {
          productsToDisplay = data.products.filter((product) =>
            product.title.toLowerCase().includes(searchText)
          );
        }
        
      
     container5.innerHTML = "";
      productsToDisplay.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const image = document.createElement("div");
      image.classList.add("card__image");
      image.style.backgroundImage = `url(${product.image})`;
      card.appendChild(image);

      const info = document.createElement("div");
      info.classList.add("card__info");
      card.appendChild(info);

      const title = document.createElement("h2");
      title.classList.add("card__title");
      title.textContent = product.title;
      info.appendChild(title);

      const price = document.createElement("div");
      price.classList.add("card__price");
      price.textContent = `$${product.price.toFixed(2)}`;
      info.appendChild(price);
      const addToCartIcon = document.createElement("i");
      addToCartIcon.classList.add("fas", "fa-cart-plus", "card__add-to-cart");
      addToCartIcon.addEventListener("click", () => {
      
        let titl=product.title;
          let pric=product.price;
          let imag=product.image;
          let existingItem = inputArray.find(item => item.title === titl)

        if (existingItem) { // if an existing item is found
  existingItem.quantity++; // increase the quantity of the existing item
} else { // if no existing item is found
  const item = {
    title: titl,
    price: pric,
    image: imag,
    quantity: 1 // set the initial quantity to 1
  };
  inputArray.push(item); // push the item object into the array
}      
update();

dyn();
updateTotal();
addEvents();
Badge();
      });
     
       // store the updated items array in local storage
      
      price.appendChild(addToCartIcon);

    container5.appendChild(card);
    });}
  })
  .catch((error) => {
    console.log(error);
  });
 
container5.style.display = "none";

// show the cards when the button is clicked

const showCardsBtn5 = document.querySelector("#show-cards-btn5");
showCardsBtn5.addEventListener("click", () => {
container2.style.display = "none";
container.style.display = "none";
container3.style.display = "none";
container4.style.display = "none";
container5.style.display = "flex";
paginationContainer2.style.display = "none";
paginationContainer1.style.display = "none";
paginationContainer3.style.display = "none";
paginationContainer4.style.display = "none";
paginationContainer5.style.display = "flex";
searchInput.style.display = "flex";

;
});



  const container = document.querySelector(".cards-container");
 
 
  fetch("mensclothing.JSON")
    .then((response) => response.json())
    .then((data) => {
      const itemsPerPage = 6;

      // Calculate the number of pages
      const totalPages = Math.ceil(data.products.length / itemsPerPage);
      
      // Get the product list container and pagination container
     
      const paginationContainer1 = document.getElementById("pagination1");
      showProducts(1);
      const searchInput = document.getElementById("search-input");

// Add an event listener to the search input
searchInput.addEventListener("input", () => {
  // Show the first page of products with the current search input
  showProducts(1);
});
      // Create the pagination buttons
      for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.classList.add("my-button");
        button.innerText = i;
        button.addEventListener("click", () => {
          // 

          showProducts(i);
        });
        paginationContainer1.appendChild(button);
      }
      function showProducts(page) {

        const searchInput = document.getElementById("search-input");

  const searchText = searchInput.value.trim().toLowerCase();
 
  // Calculate the start and end indexes of the products to display
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the products for the current page
  let productsToDisplay = data.products.slice(startIndex, endIndex);

  // Filter the products based on the search input
  if (searchText !== "") {
    productsToDisplay = data.products.filter((product) =>
      product.title.toLowerCase().includes(searchText)
    );
  }
  
      
     container.innerHTML = "";
      productsToDisplay.forEach((product) => {
        
        
        const card = document.createElement("div");
        card.classList.add("card");
  
        const image = document.createElement("div");
        image.classList.add("card__image");
        image.style.backgroundImage = `url(${product.image})`;
        card.appendChild(image);
  
        const info = document.createElement("div");
        info.classList.add("card__info");
        card.appendChild(info);
  
        const title = document.createElement("h2");
        title.classList.add("card__title");
        title.textContent = product.title;
        info.appendChild(title);
  
        const price = document.createElement("div");
        price.classList.add("card__price");
        price.textContent = `$${product.price.toFixed(2)}`;
        info.appendChild(price);
        const addToCartIcon = document.createElement("i");
      
        addToCartIcon.classList.add("fas", "fa-cart-plus", "card__add-to-cart");
        addToCartIcon.addEventListener("click", () => {
         
        
         let titl=product.title;
          let pric=product.price;
          let imag=product.image;
         
          let existingItem = inputArray.find(item => item.title === titl)

        if (existingItem) { // if an existing item is found
  existingItem.quantity++; // increase the quantity of the existing item
} else { // if no existing item is found
  const item = {
    title: titl,
    price: pric,
    image: imag,
    quantity: 1 // set the initial quantity to 1
  };
  
  inputArray.push(item); // push the item object into the array
  
}

  
update();

dyn();
updateTotal();
addEvents();
Badge();

    
        });
        price.appendChild(addToCartIcon);
  
      container.appendChild(card);
      });}
    })
    .catch((error) => {
      console.log(error);
    });
   
container.style.display = "none";

// show the cards when the button is clicked

const showCardsBtn = document.querySelector("#show-cards-btn");
showCardsBtn.addEventListener("click", () => {
  container2.style.display = "none";
container.style.display = "flex";
container3.style.display = "none";
container4.style.display = "none";
container5.style.display = "none";
searchInput.style.display = "flex";

  ;
});
const container2 = document.querySelector(".cards-container2");

fetch("womenclothing.JSON")
  .then((response) => response.json())
  .then((data) => {
    const itemsPerPage = 6;

      // Calculate the number of pages
      const totalPages = Math.ceil(data.products.length / itemsPerPage);
      
      // Get the product list container and pagination container
     
      const paginationContainer2 = document.getElementById("pagination2");
      showProducts(1);
      const searchInput = document.getElementById("search-input");

// Add an event listener to the search input
searchInput.addEventListener("input", () => {
  // Show the first page of products with the current search input
  showProducts(1);
});
      // Create the pagination buttons
      for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.classList.add("my-button");
        button.innerText = i;
        button.addEventListener("click", () => {
          // 

          showProducts(i);
        });
        paginationContainer2.appendChild(button);
      }
      function showProducts(page) {

        const searchInput = document.getElementById("search-input");

        const searchText = searchInput.value.trim().toLowerCase();
       
        // Calculate the start and end indexes of the products to display
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
      
        // Get the products for the current page
        let productsToDisplay = data.products.slice(startIndex, endIndex);
      
        // Filter the products based on the search input
        if (searchText !== "") {
          productsToDisplay = data.products.filter((product) =>
            product.title.toLowerCase().includes(searchText)
          );
        }
       
      
     container2.innerHTML = "";
      productsToDisplay.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const image = document.createElement("div");
      image.classList.add("card__image");
      image.style.backgroundImage = `url(${product.image})`;
      card.appendChild(image);

      const info = document.createElement("div");
      info.classList.add("card__info");
      card.appendChild(info);

      const title = document.createElement("h2");
      title.classList.add("card__title");
      title.textContent = product.title;
      info.appendChild(title);

      const price = document.createElement("div");
      price.classList.add("card__price");
      price.textContent = `$${product.price.toFixed(2)}`;
      info.appendChild(price);
      const addToCartIcon = document.createElement("i");
      addToCartIcon.classList.add("fas", "fa-cart-plus", "card__add-to-cart");
      addToCartIcon.addEventListener("click", () => {
      
        let titl=product.title;
          let pric=product.price;
          let imag=product.image;
          let existingItem = inputArray.find(item => item.title === titl)

        if (existingItem) { // if an existing item is found
  existingItem.quantity++; // increase the quantity of the existing item
} else { // if no existing item is found
  const item = {
    title: titl,
    price: pric,
    image: imag,
    quantity: 1 // set the initial quantity to 1
  };
  inputArray.push(item); // push the item object into the array
}      
update();

dyn();
updateTotal();
addEvents();
Badge();
      });
     
       // store the updated items array in local storage
      
      price.appendChild(addToCartIcon);

    container2.appendChild(card);
    });}
  })
  .catch((error) => {
    console.log(error);
  });
 
container2.style.display = "none";

// show the cards when the button is clicked

const showCardsBtn2 = document.querySelector("#show-cards-btn2");
showCardsBtn2.addEventListener("click", () => {
container2.style.display = "flex";
container.style.display = "none";
container4.style.display = "none";
container5.style.display = "none";
container3.style.display = "none";

paginationContainer2.style.display = "flex";
paginationContainer1.style.display = "none";
paginationContainer4.style.display = "none";
paginationContainer5.style.display = "none";
paginationContainer3.style.display = "none";
searchInput.style.display = "flex";

;
});
const container3 = document.querySelector(".cards-container3");


fetch("electronics.JSON")
  .then((response) => response.json())
  .then((data) => {
    const itemsPerPage = 6;

      // Calculate the number of pages
      const totalPages = Math.ceil(data.products.length / itemsPerPage);
      
      // Get the product list container and pagination container
     
      const paginationContainer3 = document.getElementById("pagination3");
      showProducts(1);
      const searchInput = document.getElementById("search-input");

// Add an event listener to the search input
searchInput.addEventListener("input", () => {
  // Show the first page of products with the current search input
  showProducts(1);
});
      // Create the pagination buttons
      for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.classList.add("my-button");
        button.innerText = i;
        button.addEventListener("click", () => {
          // 

          showProducts(i);
        });
        paginationContainer3.appendChild(button);
      }
      function showProducts(page) {
        const searchInput = document.getElementById("search-input");

        const searchText = searchInput.value.trim().toLowerCase();
       
        // Calculate the start and end indexes of the products to display
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
      
        // Get the products for the current page
        let productsToDisplay = data.products.slice(startIndex, endIndex);
      
        // Filter the products based on the search input
        if (searchText !== "") {
          productsToDisplay = data.products.filter((product) =>
            product.title.toLowerCase().includes(searchText)
          );
        }
       
      
     container3.innerHTML = "";
      productsToDisplay.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const image = document.createElement("div");
      image.classList.add("card__image");
      image.style.backgroundImage = `url(${product.image})`;
      card.appendChild(image);

      const info = document.createElement("div");
      info.classList.add("card__info");
      card.appendChild(info);

      const title = document.createElement("h2");
      title.classList.add("card__title");
      title.textContent = product.title;
      info.appendChild(title);

      const price = document.createElement("div");
      price.classList.add("card__price");
      price.textContent = `$${product.price.toFixed(2)}`;
      info.appendChild(price);
      const addToCartIcon = document.createElement("i");
      addToCartIcon.classList.add("fas", "fa-cart-plus", "card__add-to-cart");
      addToCartIcon.addEventListener("click", () => {
        let titl=product.title;
        let pric=product.price;
        let imag=product.image;

        let existingItem = inputArray.find(item => item.title === titl)

        if (existingItem) { // if an existing item is found
  existingItem.quantity++; // increase the quantity of the existing item
} else { // if no existing item is found
  const item = {
    title: titl,
    price: pric,
    image: imag,
    quantity: 1 // set the initial quantity to 1
  };
  inputArray.push(item); // push the item object into the array
}

       
update();

dyn();
updateTotal();
addEvents();
Badge();
      });
    

      price.appendChild(addToCartIcon);
     
    container3.appendChild(card);
    });}
  })
  .catch((error) => {
    console.log(error);
  });
 
container3.style.display = "none";

// show the cards when the button is clicked

const showCardsBtn3 = document.querySelector("#show-cards-btn3");
showCardsBtn3.addEventListener("click", () => {
container2.style.display = "none";
container.style.display = "none";
container3.style.display = "flex";
container4.style.display = "none";
container5.style.display = "none";
paginationContainer2.style.display = "none";
paginationContainer1.style.display = "none";
paginationContainer3.style.display = "flex";
paginationContainer4.style.display = "none";
paginationContainer5.style.display = "none";
searchInput.style.display = "flex";

;
});
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");
cartIcon.addEventListener('click', ()=>{
cart.classList.add('active')})
closeCart.addEventListener('click', ()=>{
  cart.classList.remove('active')})
  



  if(document.readyState=="loading"){
    document.addEventListener('DOMContentLoaded',start)
  }
  else{
    start();
  }
  function start() {
    addEvents();
  }
  
  function update() {
    addEvents();
    toloc();
   
    updateTotal();
   
    
  }
  function addEvents () {
  
let cartQuantity=document.querySelectorAll('.cart-quantity')
cartQuantity.forEach((input)=>{
input.addEventListener("change",QuantityChange)
});

}



 function removeCartItem() {
  // Get the title of the item from the DOM
  
 
  this.parentElement.remove();
 
  const titlee=this.parentElement.children[1].children[0].innerHTML;
  console.log(this.parentElement.children[1].children[0].innerHTML)
  
    const items = JSON.parse(localStorage.getItem('inputArray'));
    console.log(items)
 const updatedCartItems = items.filter(item => item.title !==titlee );

// Save the updated cartItems array back to local storage
 console.log(updatedCartItems)
 
 
 updateTotal();
   
    
    // Retrieve the list of arrays from local storage
    localStorage.setItem('inputArray', JSON.stringify(updatedCartItems));
inputArray=updatedCartItems;
Badge();
  }
  function QuantityChange() {
    if (isNaN(this.value)||this.value < 1) {
      this.value=1;
      console.log("hello")
  
    }
    this.value=Math.floor(this.value);
    updateTotal();
    
  }





  function dyn() {
    const content3 = document.querySelector(".cart-content")
content3.innerHTML="";
    const storedItems = JSON.parse(localStorage.getItem('inputArray'));
    storedItems.forEach(element => {
      const content3 = document.querySelector(".cart-content");
      const cart = document.createElement("div");
       cart.classList.add("cart-box");
        cart.innerHTML=`<img  src="${element.image}" class="cart-img"/>
      <div class="detail-box">
        <div class="cart-product-title">${element.title}</div>
        <div class="cart-price">$${element.price}</div>
        <p  class="cart-quantity" />${element.quantity}</p>
      </div>
      <i class="fas fa-trash cart-remove"</i>`;
     
      content3.appendChild(cart)


  //   const cart = document.createElement("div");
  //   cart.classList.add("cart-box");
  //   const imeg = document.createElement("img");
  
  //   imeg.classList.add("cart-img");
  //     imeg.setAttribute('src',element.image);
  
  //   cart.appendChild(imeg);
  //   const box = document.createElement("div");
  //   box.classList.add("detail-box");
  //   cart.appendChild(box);
  //   const Ptitle = document.createElement("div");
  //   Ptitle.classList.add("cart-product-title");
  //   Ptitle.textContent = element.title;
  //   box.appendChild(Ptitle);
    
  //   const Pr = document.createElement("div");
  //   Pr.classList.add("cart-price");
  //   Pr.textContent = `$${element.price.toFixed(2)}`;
  //   box.appendChild(Pr);
  //   const rem = document.createElement("i");
  //   rem.classList.add("fas", "fa-trash", "cart-remove");
  //   cart.appendChild(rem)
    
  // content3.appendChild(cart)
  
  //   const inp = document.createElement("input");
  //   inp.classList.add("cart-quantity");
  //   inp.type="number";
  //   inp.value=element.quantity;
  //   inp.max="10";
  //   inp.min="1";
  //   box.appendChild(inp)
  
   
    let removeItem_btn=document.querySelectorAll('.cart-remove')
    removeItem_btn.forEach((btn)=>{
      btn.addEventListener("click",removeCartItem);
     
    });
    
    
    });

   

  }




  
  
  updateTotal();
  
  
  function updateTotal(){
    let cartBox=document.querySelectorAll(".cart-box ");
   
    const totalPrice=cart.querySelector(".total-price");

    let total=0;
    cartBox.forEach((cartbox)=>{
let price=cartbox.querySelector(".cart-price");
let tprice=parseFloat(price.innerHTML.replace("$",""));
let quantity=cartbox.querySelector(".cart-quantity").innerHTML;

total += tprice * quantity;

    });
    total=total.toFixed(2);
totalPrice.innerHTML= "$"+total;

  }
  
  
  function toloc() {
    if (localStorage.getItem('isLoggedIn') === 'true'){
    localStorage.setItem('inputArray', JSON.stringify(inputArray));}
    else{
      showToast("First Signin")
      const newFilePath = "Form1.html";

      // navigate to the new file using window.location
      window.location.href = newFilePath;
    }

  }
  
function badgeup() {
  let badge=document.querySelector(".badge").innerHTML;
badge=localStorage.getItem('inputArray').length
}
 function OrderCreate() {
  
  // Attach event listener to button
 const total=document.querySelector(".total-price")
 
  // Retrieve data from local storage and parse as array of objects
  const data = JSON.parse(localStorage.getItem("inputArray"));
if (data.length > 0){
  // Create object to keep track of titles and their quantities
  const titlesAndQuantities = {};
  
  // Iterate over array of objects and update quantities for each title
  data.forEach(item => {
    if (!titlesAndQuantities[item.title]) {
      titlesAndQuantities[item.title] = item.quantity;
    } else {
      titlesAndQuantities[item.title] += item.quantity;
    }
  });
  const data2 = JSON.parse(localStorage.getItem("card"));
  // Create HTML for card
  let cardHtml = `
  
    <div class="card1">
    <div class="success-icon">
    <i class="fas fa-check-circle"></i></div>
      <h2 class="card-title1">ORDER SUCCCESSFULL</h2>
      <ul class="card-list1">
  `;
  
  // Iterate over titles and quantities and add to card HTML
  for (const title in titlesAndQuantities) {
    const quantity = titlesAndQuantities[title];
    const listItemHtml = `
      <li>${title}: ${quantity}</li>
    `;
    cardHtml += listItemHtml;
  }
  
  // Close card HTML
  cardHtml += `
  <h3 style="color:red" >Total:${total.innerHTML}</h3>
      </ul>
      <div class="description">
    <p>Thank you for your order. We will process it soon.</p>
  </div>
    </div>`;
  
  // Append card HTML to container
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML += cardHtml;
let inputArray=[];
var modal = document.getElementById("myModal");
modal.style.display = "none";
  showToast("Order has been placed")

localStorage.setItem('card', JSON.stringify(cardsContainer.innerHTML));
console.log(cardsContainer.innerHTML)

localStorage.setItem('inputArray', JSON.stringify(inputArray));
setTimeout(() => {
  location.reload();
}, 2000);

}else{
  var modal = document.getElementById("myModal");
modal.style.display = "none";
  showToast("Please selet any product")
}

 }
 function OrderHistory() {
  
  let cont=document.getElementById("cont")
  cont.style.display = "none";
  const cart = document.querySelector(".cart");
  cart.classList.remove('active');
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.style.display="block"

 }
 function ReCards(params) {

  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.style.display="none"
   
  const data2 = JSON.parse(localStorage.getItem("card"));
cardsContainer.innerHTML= data2;
 }

 function Badge() {

  let data3 = JSON.parse(localStorage.getItem("inputArray"));
 
  let badge=document.querySelector(".badge");
  if(!data3){

badge.innerHTML=""
  }
 else{
  badge.innerHTML=data3.length;

 }
 
 }
 function showToast(message) {
  const toaster = document.getElementById("toaster");
  const toasterMessage = document.getElementById("toaster-message");

  toasterMessage.innerText = message;
  toaster.classList.add("active");

  setTimeout(() => {
    toaster.classList.remove("active");
  }, 4000);
}
var modal = document.getElementById("myModal");

		// Get the button that opens the modal
		var btn = document.getElementById("myBtn");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on the button, open the modal
		btn.onclick = function() {
			modal.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
    
    