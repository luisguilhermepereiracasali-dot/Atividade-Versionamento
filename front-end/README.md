# 💻 Desenvolvimento Front-end

## 📝 Descrição do Projeto/Atividade
Desenvolvimento do **AgroStream Dashboard**, uma interface web responsiva projetada para centralizar e exibir os dados de telemetria dos robôs agrícolas do projeto *Eve's Bloom*. O painel renderiza gráficos dinâmicos sobre a qualidade do solo, nível de bateria dos protótipos e alertas imediatos sobre danos estruturais ou esvaziamento do reservatório de sementes, permitindo que o produtor rural tome decisões rápidas através de qualquer dispositivo.

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
Durante o desenvolvimento desta interface, consolidei conceitos fundamentais de estruturação e estilização com **HTML5 semântico** e **CSS3 moderno (Flexbox e Grid Layout)**, garantindo que o painel se adapte perfeitamente tanto em monitores de escritório quanto em telas de smartphones no campo. Também aprofundei conhecimentos em **JavaScript assíncrono (ES6+)** para consumir dados de APIs, além da **manipulação dinâmica do DOM** para atualizar os indicadores de status na tela em tempo real sem a necessidade de recarregar a página.

### 2. Para que serve (Por que aprendi)?
O Front-end é a ponte direta entre o usuário e a complexidade do sistema. Aprender a construir interfaces amigáveis, limpas e responsivas é crucial porque o usuário final (neste caso, o produtor agrícola) precisa acessar dados complexos de forma visual, intuitiva e rápida. Uma interface mal projetada gera erros de operação, enquanto um bom Front-end garante acessibilidade, melhora a experiência do usuário (UX) e potencializa a eficiência do produto final.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   **HTML5** (Estruturação semântica da página)
*   **CSS3** (Estilização avançada com Grid, Flexbox e variáveis CSS)
*   **JavaScript Vanilla (ES6+)** (Consumo de API e lógica de exibição)
*   **Chart.js** (Biblioteca utilizada para renderizar os gráficos de umidade e nutrientes do solo)

---

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
O trecho de código abaixo demonstra como o JavaScript consome as informações de telemetria do robô e atualiza os cards de alerta na interface de forma dinâmica:

```javascript
// Função responsável por renderizar os alertas dos robôs na tela
const atualizarPainelAlertas = (dadosRobo) => {
  const containerAlertas = document.getElementById('painel-alertas');
  containerAlertas.innerHTML = ''; // Limpa os alertas anteriores

  // Verifica se o nível de bateria ou sementes está crítico
  if (dadosRobo.bateria < 20 || dadosRobo.reservatorioVazio || dadosRobo.danificado) {
    const cardAlerta = document.createElement('div');
    
    // Aplica a classe CSS de perigo caso haja dano estrutural
    cardAlerta.classList.add(dadosRobo.danificado ? 'alerta-critico' : 'alerta-atencao');
    
    // Injeta o conteúdo dinâmico baseado no status atual do robô
    cardAlerta.innerHTML = `
      <h3>⚠️ Alerta no Protótipo: ${dadosRobo.id}</h3>
      <p>Status da Bateria: <strong>${dadosRobo.bateria}%</strong></p>
      <p>Diagnóstico de Danos: <strong>${dadosRobo.danificado ? 'Crítico/Parado' : 'Operando'}</strong></p>
    `;
    
    containerAlertas.appendChild(cardAlerta);
  }
};
```

### Instruções para Executar
Como este projeto foi desenvolvido utilizando tecnologias web nativas, você pode executá-lo de forma simples:

1.  Certifique-se de estar dentro da pasta do projeto (`/front-end`).
2.  Abra o arquivo `index.html` diretamente em qualquer navegador web (Chrome, Edge, Firefox).
3.  **Dica de Desenvolvimento:** Para uma melhor experiência com atualizações em tempo real, utilize a extensão **Live Server** do VS Code clicando com o botão direito no arquivo `index.html` e selecionando *"Open with Live Server"*.
