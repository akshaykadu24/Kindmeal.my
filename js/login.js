import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer();






let x = document.querySelector('form').addEventListener("submit", UserSingIn)

function UserSingIn() {
    event.preventDefault()

    let Log_In_userEmail = document.querySelector('#l_email').value;
    let Log_In_userPass = document.querySelector('#l_password').value;

    let x = JSON.parse(localStorage.getItem("UserDetails"))

    checkLogIn()
    function checkLogIn() {
        let isTrue = false
        x.forEach(function (element, i) {

            if (element.UserEmail == Log_In_userEmail && element.UserPass == Log_In_userPass) {
                isTrue = true
            }
        });
        if (isTrue) {
            localStorage.setItem("loginstatus", true)

            alert("loged In")
            window.location.reload()
        }
        else {

            alert("wrong Credentials")
        }

    }
}







// document.getElementById("submit").addEventListener("click", () => {
//     let userdata = JSON.parse(localStorage.getItem("UserDetails"));

//     login(userdata)
// })




let y = localStorage.getItem("loginstatus");

let logout = () => {
    let x = false;
    localStorage.setItem("loginstatus", x)
    window.location.href = "artical.html";
};

if (y) {

    let z = JSON.parse(localStorage.getItem("UserDetails"))
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








