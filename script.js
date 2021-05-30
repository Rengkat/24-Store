"use strict";
//click on add cart
//add product pict to cart
//add price to cart
//add name to cart
//add total price
//change num on cart
//change num on like
//remove from cart and subtract from price
//validate contact form
//validate login/signup form
//currency change onchange with exchange rate and sign

class Product {
  constructor(image, productName, price) {
    this.image = image;
    this.productName = productName;
    this.price = price;
  }
}
//add cart
let cartIncrease = "";
//add likes
let likeIncreas = "";


let products = []
 localStorage.clear()
//clicking on cart button
let cartBtns = document.querySelectorAll(".btn-add-to-cart > a");
cartBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const image =
      e.target.parentElement.parentElement.previousElementSibling.src;
    const productName =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    const price = +e.target.parentElement.previousElementSibling.children[1].textContent
          .replace(",", "")
         .replace("₦", "")
      
      
    //instaantiating a product
    const product = new Product(image, productName, price);

    //push to arry to local storage
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products));
    const productArryStorage = JSON.parse(localStorage.getItem('products'))
    if (!productArryStorage) return
    let me = productArryStorage
    console.log(me.image);

    //adding cart number
    cartIncrease++;

    document.querySelector(".cart-indicate").innerHTML = cartIncrease;
    let parentDiv = document.querySelector(".product-container-append");

    //creating a new div
    let newDiv = document.createElement("div");
    //add a class name
    newDiv.className = "product-description";
    newDiv.innerHTML = `<div class="real-product">
    <img src="${product.image}" alt="" class="cart-image">
    <p class="product-name">${product.productName}</p>
  </div>
   <li><input type="number" name="quantity" id="quantity" /></li> 
   <li class="price"><h5 class = "final-price">₦${product.price}</h5></li>
   <li class="close-btn"><h5>X</h5></li>
  `;
    parentDiv.appendChild(newDiv);
    document.querySelector(".priceAnalysis").style.opacity = "1";

    // matching
    // productNamesArry.find((nam) => nam.includes(`${product.productName}`));
  });
});
// clicking on like button
document.querySelectorAll(".like").forEach((like) => {
  like.addEventListener("click", (e) => {
    likeIncreas++;
    document.querySelector(".heart-indicate").textContent = likeIncreas;
  });

  // let prices = document.querySelectorAll("");
  // console.log(prices.textContent);
});

//clicking to view cart
const cart = document
  .querySelector(".main-cart")
  .addEventListener("click", () => {
    document.querySelector(".main-container").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".transparent").style.display = "block";
  });

// clicking on closing cart
document.querySelector(".close-btn-cart").addEventListener("click", () => {
  document.querySelector(".main-container").style.display = "none";
  document.querySelector("body").style.overflow = "scroll";
  document.querySelector(".transparent").style.display = "none";
});

//looping through prices
let pricArry = [];
let shipping;
let coupon;
let total;
document.querySelectorAll(".final-price").forEach((pr) => {
  pricArry.push(Number(pr.textContent.replace("₦", "")));
  let add = pricArry.reduce((a, b) => {
    return a + b;
  }, 0);
  document.querySelector(".sub-total").textContent = `₦${add}`;
  add > 20000 ? (shipping = 1300) : (shipping = 2000.05);
  document.querySelector(".shipping-price").textContent = `₦${shipping}`;
  add > 70000
    ? (coupon = Math.abs((add * 5) / 100))
    : (coupon = Math.abs((add * 1) / 100));
  document.querySelector(".tip").textContent = `₦${coupon}`;
  document.querySelector(".total-price").textContent = `₦${
    add + shipping + coupon
  }`;
  // pricArry.reduce((a, b) => {
  //   return a + b;
  // });
}, 0);
///Clicking trasperant to go back to main  page/////////////INPORTANT
// document.querySelector(".main-container").addEventListener("click", () => {
//   document.querySelector(".main-container").style.display = "none";
//   document.querySelector("body").style.overflow = "scroll";
//   document.querySelector(".transparent").style.display = "none";
// });
//remove product from cart
document.querySelectorAll(".close-btn").forEach((remove) => {
  remove.addEventListener("click", (e) => {
    let productName =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling.children[1].textContent;
        console.log(productName);
    if (confirm(`Are you sure you want to remove ${productName} from cart?`)) {
      e.target.parentElement.parentElement.remove();
    }
    //stop event from propageting
    // e.stopPropagation()
  });
  
});

// let ht = document.getElementsByClassName("btn-add-to-cart");
// console.log(ht);
// let ki = document.getElementsByTagName("button");
// console.log(ki);
// console.log(document.head);
// console.log(document.body);
// let nd = document.createElement("div");
// nd.classList.add("top-header");
// nd.innerHTML = `Accept all cookies to store data<button class="btn-add-to-cart">GOT IT!</button> `;
// let doc = document.querySelector("container-grid");
// doc.append(nd.cloneNode(true));
// doc.prepend(nd);
// let logo = document.querySelector(".logo");
// logo.setAttribute("id", "top-logo");
// logo.setAttribute("src", "/hero image/an_vision-kf0GtI-wKDo-unsplash.jpg");
// logo.style.height = "12rem";
// console.log(logo.height);

// console.log(logo);
// console.log(logo.getAttribute("alt"));

const scrollBtn = document.querySelector(".scroll-btn");
let section = document.querySelector(".smooth-scrol");
scrollBtn.addEventListener("click", (e) => {
  const sectionScrolTo = section.getBoundingClientRect();
  console.log(e.currentTarget, e.target);
  //scrolling
  // window.scrollTo(
  //   sectionScrolTo.left + window.pageXOffset,
  //   sectionScrolTo.top + window.pageYOffset
  // );

  //to make it smooth {OLD SCHOOL WAY}
  window.scrollTo({
    left: sectionScrolTo.left + window.pageXOffset,
    top: sectionScrolTo.top + window.pageYOffset,
    behavior: "smooth",
  });
  //{NEW WAY OF SCROLLING}
  // section.scrollIntoView({ behavior: "smooth" });
});
// console.log(window.pageXOffset, window.pageYOffset);
// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);

//smoth scroling for hot deal
let scrol2 = document.querySelector("#hot-deals");
document.querySelector(".hot-deal").addEventListener("click", () => {
  let scrolTo = scrol2.getBoundingClientRect();
  window.scrollTo({
    //{OLD SCHOOL WAY}
    left: scrolTo.left + window.pageXOffset,
    top: scrolTo.top + window.pageYOffset,
    behavior: "smooth",
  });

  //{NEW WAY}
  // scrol2.scrollIntoView({ behavior: "smooth" });
});

//LOCAL STORAGE

function localStor() {
  const localSto = localStorage.setItem()
}