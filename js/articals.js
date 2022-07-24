import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

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
