// Dados simulados imitando o retorno da nossa AgroCore API
const dadosTelemetriaRobo = {
    id: "ROBO-EB01",
    bateria: 15, // Gatilho de alerta (< 20%)
    reservatorioVazio: false,
    danificado: true, // Gatilho de alerta crítico
    historicoUmidade: [45, 43, 42, 40, 38, 38]
};

// Função para renderizar os alertas em tempo real na tela
const atualizarPainelAlertas = (dadosRobo) => {
    const containerAlertas = document.getElementById('painel-alertas');
    containerAlertas.innerHTML = ''; 

    if (dadosRobo.bateria < 20 || dadosRobo.reservatorioVazio || dadosRobo.danificado) {
        const cardAlerta = document.createElement('div');
        
        // Aplica a classe CSS correta baseada na gravidade
        cardAlerta.classList.add('card-alerta');
        cardAlerta.classList.add(dadosRobo.danificado ? 'alerta-critico' : 'alerta-atencao');
        
        cardAlerta.innerHTML = `
            <h3>⚠️ Alerta no Protótipo: ${dadosRobo.id}</h3>
            <p>Status da Bateria: <strong style="color:red">${dadosRobo.bateria}%</strong></p>
            <p>Diagnóstico Estrutural: <strong>${dadosRobo.danificado ? 'Dano Detectado / Parado' : 'Operando'}</strong></p>
        `;
        
        containerAlertas.appendChild(cardAlerta);
    } else {
        containerAlertas.innerHTML = '<p>✅ Nenhum alerta crítico ativo nos protótipos.</p>';
    }
};

// Inicialização do Gráfico do Solo usando Chart.js
const inicializarGrafico = (historico) => {
    const ctx = document.getElementById('graficoSolo').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['10h', '11h', '12h', '13h', '14h', '15h'],
            datasets: [{
                label: 'Umidade do Solo (%)',
                data: historico,
                backgroundColor: 'rgba(46, 125, 50, 0.2)',
                borderColor: '#2e7d32',
                borderWidth: 2,
                tension: 0.3
            }]
        },
        options: { responsive: true }
    });
};

// Executa as funções ao carregar a página
atualizarPainelAlertas(dadosTelemetriaRobo);
inicializarGrafico(dadosTelemetriaRobo.historicoUmidade);
