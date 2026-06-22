# 📱 Desenvolvimento Mobile

## 📝 Descrição do Projeto/Atividade
Desenvolvimento do aplicativo móvel **Eve's Bloom** utilizando React Native. O aplicativo foi projetado para atender produtores do ramo de agronegócio, funcionando como uma central de monitoramento portátil que exibe a telemetria de robôs de campo em tempo real. O app monitora a qualidade do solo, a área de plantio, o nível de bateria do protótipo, o status do reservatório de sementes e envia notificações push caso ocorra algum dano estrutural durante a operação.

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
[Substitua este texto por sua resposta. Explique em suas palavras os conceitos teóricos e práticos de desenvolvimento mobile que você aprendeu com esta atividade, tais como: componentes, Hooks do React (useState, useEffect), tratamento de estados assíncronos, consumo de APIs, estilização, etc.]

### 2. Para que serve (Por que aprendi)?
[Substitua este texto por sua resposta. Explique qual a relevância de aprender a desenvolver aplicativos móveis nativos/híbridos com React Native para o mercado de trabalho atual. Qual problema real esta competência resolve no dia a dia corporativo?]

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   React Native / Expo
*   TypeScript
*   Axios (para consumo de API)
*   React Navigation (para navegação entre telas do app)

---

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
O trecho de código abaixo demonstra a implementação do hook `useEffect` e o gerenciamento de estados assíncronos para buscar e atualizar os dados críticos de telemetria do robô direto da API para a tela do smartphone:

```tsx
// Função responsável por buscar os dados de telemetria do robô agrícola
const buscarDadosTelemetria = async (roboId: string) => {
  try {
    setLoading(true);
    // Consome os dados de campo expostos pela nossa API central (AgroCore)
    const response = await fetch(`https://agrocore.com{roboId}`);
    const data = await response.json();
    
    // Atualiza o estado do app com o nível de bateria, solo e alertas de danos
    setStatusRobo(data);
  } catch (err) {
    setError('Não foi possível conectar ao protótipo em campo.');
  } finally {
    // Finaliza o estado de carregamento da interface do usuário
    setLoading(false);
  }
};
```

### Instruções para Executar
1. Instale as dependências na pasta do projeto:
   ```bash
   npm install
   ```
2. Inicialize o servidor de desenvolvimento do Expo:
   ```bash
   npx expo start
   ```
3. Use o aplicativo Expo Go em seu dispositivo móvel ou um emulador Android/iOS para visualizar.
