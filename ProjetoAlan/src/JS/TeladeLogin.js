const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const loginButton = document.querySelector(".loginButton");

// notificações toast
function mostrarToast(mensagem, tipo) {

    const toast = document.getElementById("toast");

    toast.textContent = mensagem;

    toast.className = "";

    if (tipo === "Verde") {
        toast.classList.add("toast-success");
    }

    if (tipo === "Amarelo") {
        toast.classList.add("toast-warning");
    }

    if (tipo === "Vermelho") {
        toast.classList.add("toast-error");
    }

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

function login() {

    const email = emailInput.value;
    const password = passwordInput.value;

    const tipoUsuario = document.querySelector(
        'input[name="tipoUsuario"]:checked'
    ).value;

    if (email.trim() === "" || password.trim() === "") {
        mostrarToast("Preencha todos os campos.", "Amarelo");
        return;
    }

    if (password.length < 4) {
        mostrarToast("A senha deve ter pelo menos 4 caracteres.", "Amarelo");
        return;
    }

    if (email === "admin@gmail.com" && password === "12345") {

        if (tipoUsuario === "Guincheiro") {

            mostrarToast("Login realizado com sucesso!", "Verde");

            setTimeout(() => {

                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = "../navigation/Dashboard.html";
                }, 500);

            }, 1500);

        } else {
            mostrarToast("Área do cliente ainda não está disponível.", "Amarelo");
        }

    } else {
        mostrarToast("E-mail ou senha incorretos.", "Vermelho");
    }
}

// Função para verificar se os campos de email e senha estão preenchidos e habilitar/desabilitar o botão de login
function verificarCampos() {

    if (
        emailInput.value.trim() !== "" &&
        passwordInput.value.trim() !== ""
    ) {
        loginButton.disabled = false;
        loginButton.style.opacity = "1";
    } else {
        loginButton.disabled = true;
        loginButton.style.opacity = "0.6";
    }
}

emailInput.addEventListener("input", verificarCampos);
passwordInput.addEventListener("input", verificarCampos);

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !loginButton.disabled) {
        login();
    }
});

verificarCampos();