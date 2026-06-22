# 🤖 Inteligência Artificial (IA)

## 📝 Descrição do Projeto/Atividade
Desenvolvimento do motor cognitivo **Crefinix**, um sistema baseado em Inteligência Artificial desenvolvido em Python. O projeto utiliza a API do Google Gemini para simular processos lógicos avançados e de raciocínio fluido, atuando como um assistente intelectual capaz de analisar requisitos técnicos complexos, gerar arquiteturas de software integradas e propor otimizações de código de forma automatizada.

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
Compreendi o funcionamento prático de Grandes Modelos de Linguagem (LLMs) e como interagir com eles via SDK oficial. Aprendi técnicas de Engenharia de Prompts (Prompt Engineering) para delimitar o papel da IA, fornecendo contextos estruturados e restrições para evitar alucinações. Aprendi também sobre a parametrização de hiperparâmetros (como controle de criatividade) e o gerenciamento de credenciais usando variáveis de ambiente de forma segura.

### 2. Para que serve (Por que aprendi)?
A integração de IA generativa em sistemas tradicionais eleva o software de uma ferramenta passiva de armazenamento de dados para um agente ativo de soluções. Aprender a consumir essas APIs prepara o desenvolvedor para o mercado atual, permitindo automatizar tarefas de alta complexidade cognitiva — como análise de contratos, geração de códigos, atendimento inteligente ou processamento de grandes volumes de texto não estruturado — reduzindo custos e tempo operacional na indústria.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   Python 3
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
