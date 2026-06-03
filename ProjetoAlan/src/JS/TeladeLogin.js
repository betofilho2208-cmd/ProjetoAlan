function login() {
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    const loginButton = document.querySelector(".loginButton");
    
     const tipoUsuario = document.querySelector(
        'input[name="tipoUsuario"]:checked').value;

   if (email === "admin@gmail.com" && password === "12345") {

        if (tipoUsuario === "Guincheiro") {
            document.body.classList.add("fade-out");
                setTimeout(() => {

            window.location.href = "../navigation/Dashboard.html";}, 500);

        } else {
            alert("Área do cliente ainda não está disponível.");
        }

    } else {
        alert("E-mail ou senha incorretos.");
    }
}

