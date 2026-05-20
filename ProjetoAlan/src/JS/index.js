
function login() {
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    const loginButton = document.querySelector(".loginButton");
    // alert("Login realizado com sucesso!");
    if (email === "admin@gmail.com" && password === "12345") {
        alert("Login realizado com sucesso!");
    } else {
        alert("E-mail ou senha incorretos.");
    }
}
