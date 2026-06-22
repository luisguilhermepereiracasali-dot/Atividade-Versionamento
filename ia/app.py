import os
import google.generativeai as genai
from dotenv import load_dotenv

# Carrega as variáveis do arquivo .env
load_dotenv()

# Configura a chave de API do Gemini de forma segura
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    print("❌ ERRO: Chave GEMINI_API_KEY não encontrada no arquivo .env!")
    exit(1)

genai.configure(api_key=api_key)

# Inicializa o modelo de linguagem otimizado
model = genai.GenerativeModel('gemini-1.5-flash')

def simular_raciocinio_crefinix(comando_tecnico):
    """
    Usa Engenharia de Prompts para moldar o comportamento do modelo
    como a inteligência artificial Crefinix.
    """
    prompt_sistema = (
        f"Você é o Crefinix, uma inteligência artificial criativa com capacidades "
        f"analíticas avançadas e fluidez cognitiva. Resolva o seguinte problema técnico "
        f"de engenharia de software de maneira direta e profissional:\n\n{comando_tecnico}"
    )
    
    try:
        response = model.generate_content(prompt_sistema)
        return response.text.strip()
    except Exception as e:
        return f"Erro ao processar requisição na IA: {str(e)}"

if __name__ == "__main__":
    print("🤖 --- Sistema Cognitivo Crefinix Iniciado ---")
    print("Testando o fluxo de inteligência artificial...")
    
    # Executa uma pergunta de teste simulando a otimização técnica do ecossistema
    pergunta_teste = "Como posso estruturar um índice no banco de dados para acelerar buscas de telemetria por data?"
    resposta = simular_raciocinio_crefinix(pergunta_teste)
    
    print("\n💡 Resposta do Crefinix:")
    print(resposta)
