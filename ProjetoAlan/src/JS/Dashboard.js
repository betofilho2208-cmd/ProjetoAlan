// BOTÕES DO MENU
const inicioBtn = document.getElementById("inicioBtn");
const chamadosBtn = document.getElementById("chamadosBtn");
const localizacaoBtn = document.getElementById("localizacaoBtn");
const planosBtn = document.getElementById("planosBtn");
const configBtn = document.getElementById("configBtn");

// ÁREAS DA DASHBOARD
const dashboardTitulo = document.querySelector(".Dashboard h1");
const areaTabela = document.querySelector(".areaTabela");
const cards = document.querySelector(".cards");

// CONTADORES DOS CARDS
const chamadosHoje = document.querySelectorAll(".card p")[0];
const guinchosAtivos = document.querySelectorAll(".card p")[1];
const clientesOnline = document.querySelectorAll(".card p")[2];

// VALORES INICIAIS
let chamados = 12;
let guinchos = 5;
let clientes = 28;

// BOTÃO ATIVO
function removerAtivo() {
    document.querySelectorAll(".barraLateral button")
        .forEach(btn => btn.classList.remove("ativo"));
}

function ativarBotao(botao) {
    removerAtivo();
    botao.classList.add("ativo");
}

// TROCA DE TELAS

// EVENTOS DOS BOTÕES
inicioBtn.addEventListener("click", mostrarInicio);
chamadosBtn.addEventListener("click", mostrarChamados);
localizacaoBtn.addEventListener("click", mostrarLocalizacao);
planosBtn.addEventListener("click", mostrarPlanos);
configBtn.addEventListener("click", mostrarConfiguracoes);

// DASHBOARD DINÂMICO
function atualizarDashboard() {

    chamados += Math.floor(Math.random() * 2);

    clientes += Math.floor(Math.random() * 3) - 1;

    if (clientes < 0) {
        clientes = 0;
    }

    chamadosHoje.textContent = chamados;
    guinchosAtivos.textContent = guinchos;
    clientesOnline.textContent = clientes;
}

// INICIAR
setInterval(atualizarDashboard, 5000);

mostrarInicio();
const menuHamburguer = document.querySelector(".menuHamburguer");
const barraLateral = document.querySelector(".barraLateral");

menuHamburguer.addEventListener("click", () => {
    barraLateral.classList.toggle("abrir");
});