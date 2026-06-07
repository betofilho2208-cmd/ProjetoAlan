function menuHamburguer() {
    document.querySelector(".barraLateral").classList.toggle("abrir");
}

const areaTabela = document.querySelector(".areaTabela");

// Controle do botão ativo
const botoes = document.querySelectorAll(".barraLateral button");

function ativarBotao(botao) {
    botoes.forEach(btn => btn.classList.remove("ativo"));
    botao.classList.add("ativo");
}

document.getElementById("inicioBtn").addEventListener("click", function () {

    ativarBotao(this);

    areaTabela.innerHTML = `
        <h2>Últimos Chamados</h2>

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
});

document.getElementById("chamadosBtn").addEventListener("click", function () {

    ativarBotao(this);

    areaTabela.innerHTML = `
        <h2>Central de Chamados</h2>

        <table>
            <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Status</th>
            </tr>

            <tr>
                <td>#001</td>
                <td>João</td>
                <td class="Verde">Finalizado</td>
            </tr>

            <tr>
                <td>#002</td>
                <td>Maria</td>
                <td class="Amarelo">Em atendimento</td>
            </tr>

            <tr>
                <td>#003</td>
                <td>Carlos</td>
                <td class="Vermelho">Aguardando</td>
            </tr>
        </table>
    `;
});

document.getElementById("localizacaoBtn").addEventListener("click", function () {

    ativarBotao(this);

    areaTabela.innerHTML = `
        <h2>Localização dos Guinchos</h2>

        <p style="margin-top:15px;">
            📍 Mapa em desenvolvimento.
        </p>

        <p style="margin-top:10px;">
            Guinchos ativos: 5
        </p>
    `;
});

document.getElementById("planosBtn").addEventListener("click", function () {

    ativarBotao(this);

    areaTabela.innerHTML = `
        <h2>Planos SOS Auto</h2>

        <div style="display:flex; gap:20px; flex-wrap:wrap; margin-top:20px;">

            <div class="card">
                <h3>Básico</h3>
                <p style="font-size:18px;">1 guincho/mês</p>
            </div>

            <div class="card">
                <h3>Premium</h3>
                <p style="font-size:18px;">Guinchos ilimitados</p>
            </div>

        </div>
    `;
});

document.getElementById("configuracoesBtn").addEventListener("click", function () {

    ativarBotao(this);

    areaTabela.innerHTML = `
        <h2>Configurações</h2>

        <div style="margin-top:15px;">
            <p>⚙️ Alterar senha</p>
            <br>
            <p>👤 Gerenciar usuários</p>
            <br>
            <p>🔔 Preferências de notificações</p>
        </div>
    `;
});