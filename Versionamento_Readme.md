# 🔧 Versionamento e Gestão de Código

## 📝 Descrição do Projeto/Atividade
Este projeto consiste na própria **gestão, organização e controle de versão deste Portfólio**. Nele, apliquei conceitos avançados de controle de versão exigidos no mercado de trabalho para garantir a rastreabilidade e legibilidade do histórico de desenvolvimento do software.

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
*   **Conventional Commits (Commits Convencionais):** Aprendi que é uma especificação de mensagens de commit que adiciona regras gramaticais legíveis tanto por humanos quanto por ferramentas automáticas. Segui a estrutura obrigatória utilizando tipos claros de alteração como `feat` para novas funcionalidades, `fix` para correções de bugs, `docs` para documentações e `chore` para manutenções rotineiras, além de incluir o escopo do projeto alterado entre parênteses para categorizar perfeitamente as mensagens.

### 2. Para que serve (Por que aprendi)?
Grandes empresas e projetos de código aberto usam essa convenção porque ela organiza o histórico de alterações do Git de forma cronológica e semântica. Isso elimina mensagens genéricas e inúteis (como "ajustes" ou "consertando erro"), facilitando a identificação imediata de onde um bug foi introduzido ou quando uma ferramenta foi lançada. Além disso, permite automatizar a geração de relatórios de mudanças (Changelogs) e o controle de versões do software (Semantic Versioning).

---

## 💻 Demonstração das Práticas de Versionamento

### Histórico de Commits Semânticos
Abaixo estão exemplos práticos de mensagens de commit efetuadas durante a construção deste portfólio, demonstrando a aplicação real da especificação para cada módulo do ecossistema:

*   `feat(mobile): add real-time telemetry tracking for Eve's Bloom app` (Adição da lógica de monitoramento de sensores em campo)
*   `docs(readme): structure main dashboard and front-end requirements` (Atualização da documentação da interface web AgroStream)
*   `fix(backend): correct jwt expiration middleware token validation` (Correção de bug de autenticação na API AgroCore)
*   `chore: configure initial repository structure and licenses` (Tarefas de manutenção de arquivos sem alteração de código)

---

## 🛠️ Comandos Git Utilizados
Abaixo estão os comandos Git executados para manter e estruturar este repositório:

*   **Para criar e comitar no padrão convencional:**
    ```bash
    # Registrar alterações
    git add .
    
    # Commitar seguindo o padrão convencional
    git commit -m "docs(readme): update mobile documentation details"
    ```
*   **Para enviar as alterações ao repositório remoto (GitHub):**
    ```bash
    git push origin main
    ```
