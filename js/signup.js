import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

document.getElementById("signUpButton").addEventListener("click", () => {
  let details = JSON.parse(localStorage.getItem("UserDetails")) || [];

  function User(Name, Email, Pass) {
    this.UserName = Name;
    this.UserEmail = Email;
    this.UserPass = Pass;
  }

  let UserfName = document.getElementById("firstName").value;
  let Useremail = document.getElementById("SignUpemail").value;
  let Userpass = document.getElementById("SignUppass").value;

  let obj = new User(UserfName, Useremail, Userpass);

  details.push(obj);

  localStorage.setItem("UserDetails", JSON.stringify(details));

  alert(" Signup successful!");

  window.location.href = "login.html";
});
