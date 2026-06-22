# 🤖 Inteligência Artificial (IA)

## 📝 Descrição do Projeto/Atividade
Desenvolvimento do motor cognitivo **Crefinix**, um sistema baseado em Inteligência Artificial desenvolvido em Python. O projeto utiliza a API do Google Gemini para simular processos lógicos avançados e de raciocínio fluido, atuando como um assistente intelectual capaz de analisar requisitos técnicos complexos, gerar arquiteturas de software integradas e propor otimizações de código de forma automatizada.

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
[Substitua este texto por sua resposta. Explique em suas palavras os conceitos de IA que você aprendeu com esta atividade, tais como: modelos de linguagem (LLMs), Engenharia de Prompts (Prompt Engineering), consumo de SDKs/APIs de IA, estruturação de dados de resposta (JSON Schema), ou conceitos de Machine Learning.]

### 2. Para que serve (Por que aprendi)?
[Substitua este texto por sua resposta. Explique como a integração de IA pode agregar valor a sistemas de software tradicionais. Quais são os casos de uso práticos no mercado onde a inteligência artificial ajuda a automatizar tarefas complexas?]

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   Python
*   SDK do Google GenAI (Gemini API)
*   python-dotenv (Gerenciamento seguro de chaves de API)

---

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
O trecho de código abaixo demonstra a configuração do ambiente da Crefinix, a estruturação do prompt contextualizado do sistema e a chamada assíncrona ao modelo generativo:

```python
import google.generativeai as genai
import os
from dotenv import load_dotenv

# Carrega a chave secreta da API a partir do arquivo .env de forma segura
load_dotenv()
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

# Inicializa o modelo de linguagem de alto desempenho do Gemini
model = genai.GenerativeModel('gemini-1.5-flash')

def simular_raciocinio_crefinix(comando_tecnico):
    # Contextualização do prompt para blindar o comportamento da IA como a mente Crefinix
    prompt_sistema = (
        f"Você é o Crefinix, uma mente artificial criativa com capacidades analíticas avançadas. "
        f"Processe a seguinte solicitação técnica de forma lógica e objetiva: {comando_tecnico}"
    )
    
    # Envia a requisição com o contexto e captura a resposta gerada
    response = model.generate_content(prompt_sistema)
    return response.text.strip()
```

### Instruções para Executar
1. Certifique-se de ter o Python instalado em sua máquina.
2. Instale as dependências necessárias:
   ```bash
   pip install google-generativeai python-dotenv
   ```
3. Crie um arquivo `.env` na raiz da pasta e adicione sua chave de API:
   ```env
   GEMINI_API_KEY=sua_chave_aqui
   ```
4. Execute o script principal:
   ```bash
   python app.py
   ```
