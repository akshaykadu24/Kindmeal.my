import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer();

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let doc = (tag) => {
  return document.createElement(tag);
};
let container = document.getElementById("container");
let total = 0;
let count = 0;
let append = (cart) => {
  container.innerHTML = null;
  cart.forEach(
    (
      {
        img,
        title,
        shop_name,
        location,
        details,
        rating,
        contains,
        discount,
        price,
      },
      index
    ) => {
      let aimg = doc("img");
      aimg.src = img;
      aimg.setAttribute("id", "main_img");
      let atitle = doc("h1");
      atitle.innerText = title;
      let heading_div = doc("div");
      heading_div.setAttribute("id", "heading_div");
      let ashop_name = doc("h2");
      ashop_name.innerText = `${shop_name} - `;
      let alocation = doc("h3");
      alocation.innerText = location;
      heading_div.append(ashop_name, alocation);
      let adetails = doc("p");
      adetails.innerText = details;
      let button_div = doc("div");
      button_div.setAttribute("id", "button_div");
      let button = doc("button");
      button.innerText = "Delete";
      let addcart = (index) => {
        console.log("akshay");
        cart.splice(index, 1);
        total = total - +price;
        count--;
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload();
      };
      button.addEventListener("click", () => {
        addcart(index);
      });

      let arating = doc("div");
      arating.setAttribute("id", "rating_div");
      let rating_func = (rating) => {
        rating.forEach((elem) => {
          console.log("ak");
          let img1 = doc("img");
          img1.src = elem;
          let star_div = doc("div");
          star_div.append(img1);
          arating.append(star_div);
        });
      };
      rating_func(rating);
      button_div.append(button, arating);

      let down_div = doc("div");
      down_div.setAttribute("id", "down_div");

      let acontains = doc("div");
      acontains.setAttribute("id", "contain_div");
      let contain_func = (contains) => {
        contains.forEach((elem) => {
          let img2 = doc("img");
          img2.src = elem;
          let contain_div = doc("div");
          contain_div.append(img2);
          acontains.append(contain_div);
        });
      };
      contain_func(contains);
      let adiscount = doc("p");
      adiscount.setAttribute("id", "disc");
      adiscount.innerHTML = `KindMeal Discount <p>${discount}</p>`;
      let aprice = doc("p");
      aprice.setAttribute("id", "price");
      aprice.innerHTML = `Price <h1>${price}</h1>`;
      total += +price;
      count++;
      down_div.append(acontains, adiscount, aprice);
      let div = doc("div");
      let data_div = doc("div");
      data_div.setAttribute("id", "data_div");
      data_div.append(atitle, heading_div, adetails, button_div, down_div);
      div.append(aimg, data_div);
      container.append(div);
    }
  );
  document.getElementById("cart").innerHTML = `Cart (${count})`;
  document.getElementById("total").innerHTML = `Total :- ${total}`;
};

append(cart);

let name = document.getElementById("name");
let address = document.getElementById("address");
let mob = document.getElementById("mob");
let order_place = document.getElementById("order_place");

let submitting = () => {
  event.preventDefault();
  console.log(name.value);
  container.innerHTML = null;
  cart_total.innerHTML = null;
  container2.innerHTML = null;
  order_place.innerText = `Congratulations '${name.value}'  Order is place`;
};

let order_btn = document.getElementById("order_btn");
order_btn.addEventListener("click", () => {
  submitting();
});

let y = localStorage.getItem("loginstatus");
let logout = () => {
  let x = false;
  localStorage.setItem("loginstatus", x);
  window.location.href = "index.html";
};
if (y == "true") {
  let z = JSON.parse(localStorage.getItem("UserDetails"));
  let x = document.getElementById("loginAndsignup");
  x.innerHTML = null;
  let name = document.createElement("p");
  name.innerText = `${z[0].UserName}`;
  //   name.style.color = "black";
  let lgt = document.createElement("p");
  lgt.innerText = "logout";
  lgt.addEventListener("click", logout);
  x.append(name, lgt);
}
