# ⚙️ Desenvolvimento Back-end

## 📝 Descrição do Projeto/Atividade
Desenvolvimento da **AgroCore API**, uma API RESTful robusta projetada para servir como o motor de segurança e integração do ecossistema *Eve's Bloom*. O serviço é responsável por gerenciar o cadastro e controle de acesso dos produtores rurais e administradores, utilizando criptografia avançada (bcrypt) para proteção de senhas e geração de tokens JWT para autenticar com segurança as requisições feitas pelo aplicativo mobile e pelo dashboard front-end.

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
[Substitua este texto por sua resposta. Explique em suas palavras os conceitos de back-end que você aprendeu com esta atividade, tais como: lógica de servidor, rotas HTTP (GET, POST, PUT, DELETE), tratamento de requisições e respostas, uso de middlewares, segurança/criptografia, e integração com banco de dados.]

### 2. Para que serve (Por que aprendi)?
[Substitua este texto por sua resposta. Explique qual o papel da lógica de servidor e das APIs em um ecossistema de software. Por que o desenvolvedor precisa garantir a integridade das regras de negócio e a segurança dos dados no back-end?]

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   Node.js
*   Express
*   TypeScript
*   JSON Web Token (JWT)
*   Bcryptjs (Criptografia de senhas)
*   Prisma ORM (Integração com Banco de Dados)

---

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
O trecho de código abaixo demonstra a implementação da rota de autenticação da API, garantindo o login seguro dos operadores do sistema agrícola:

```typescript
// Rota de login para autenticação de usuários no ecossistema AgroCore
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Busca o usuário/produtor cadastrado no banco de dados através do e-mail
  const produtor = await database.findUserByEmail(email);
  
  // Compara a senha digitada com o hash criptografado salvo no banco de dados
  if (!produtor || !(await bcrypt.compare(password, produtor.passwordHash))) {
    return res.status(401).json({ error: 'Credenciais inválidas' }); // Erro de autenticação seguro
  }
  
  // Gera um token JWT assinado contendo o ID do usuário, válido por 1 hora
  const token = jwt.sign({ produtorId: produtor.id }, SECRET_KEY, { expiresIn: '1h' });
  
  // Retorna o token para o cliente (App Mobile ou Dashboard) autorizar as próximas ações
  return res.json({ token }); 
});
```

### Instruções para Executar
1. Instale as dependências na pasta do projeto:
   ```bash
   npm install
   ```
2. Configure as variáveis de ambiente necessárias em um arquivo `.env` (se aplicável).
3. Execute o script de inicialização do servidor:
   ```bash
   npm start
   # ou para modo de desenvolvimento:
   npm run dev
   ```
4. Teste as rotas utilizando uma ferramenta de requisições HTTP (como Postman, Insomnia ou a extensão Thunder Client do VS Code).
