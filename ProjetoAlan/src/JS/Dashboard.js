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
function mostrarInicio() {

    dashboardTitulo.textContent = "Dashboard";

    cards.style.display = "flex";
    areaTabela.style.display = "block";

    ativarBotao(inicioBtn);
}

function mostrarChamados() {

    dashboardTitulo.textContent = "Chamados";

    cards.style.display = "none";

    areaTabela.style.display = "block";
    areaTabela.innerHTML = `
        <h2>Chamados Recentes</h2>

        <table>
            <tr>
                <th>Cliente</th>
                <th>Veículo</th>
                <th>Status</th>
            </tr>

            <tr>
                <td>João</td>
                <td>HB20</td>
                <td class="Verde">Concluído</td>
            </tr>

            <tr>
                <td>Maria</td>
                <td>Onix</td>
                <td class="Amarelo">Em andamento</td>
            </tr>

            <tr>
                <td>Carlos</td>
                <td>Corolla</td>
                <td class="Vermelho">Aguardando</td>
            </tr>
        </table>
    `;

    ativarBotao(chamadosBtn);
}

function mostrarLocalizacao() {

    dashboardTitulo.textContent = "Localização";

    cards.style.display = "none";

    areaTabela.style.display = "block";
    areaTabela.innerHTML = `
        <h2>Localização dos Guinchos</h2>
        <p>📍 5 guinchos disponíveis na região.</p>
        <p>📍 Fortaleza - CE</p>
        <p>📍 Sobral - CE</p>
        <p>📍 Tianguá - CE</p>
    `;

    ativarBotao(localizacaoBtn);
}

function mostrarPlanos() {

    dashboardTitulo.textContent = "Planos";

    cards.style.display = "none";

    areaTabela.style.display = "block";
    areaTabela.innerHTML = `
        <h2>Planos SOS Auto</h2>

        <p><strong>Básico:</strong> 1 guincho por mês</p>
        <br>

        <p><strong>Premium:</strong> Guinchos ilimitados</p>
        <br>

        <p><strong>Empresarial:</strong> Cobertura para frotas</p>
    `;

    ativarBotao(planosBtn);
}

function mostrarConfiguracoes() {

    dashboardTitulo.textContent = "Configurações";

    cards.style.display = "none";

    areaTabela.style.display = "block";
    areaTabela.innerHTML = `
        <h2>Configurações do Sistema</h2>

        <p>👤 Perfil do Administrador</p>
        <br>

        <p>🔔 Notificações</p>
        <br>

        <p>🔒 Segurança</p>
    `;

    ativarBotao(configBtn);
}

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