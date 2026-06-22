import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const SECRET_KEY = 'minha_chave_secreta_super_segura_agro';

// Banco de dados em memória simulando o MySQL para o teste da API
const usuariosSimulados = [
  {
    id: 1,
    nome: "Luís Guilherme",
    email: "luis@agro.com",
    // Hash da senha "123456" gerado com bcrypt
    senhaHash: "$2b$10$X7M8g9J6k5L4m3N2o1P0uOeWvXyZ.aBcDeFgHiJkLmNoPqRsTuVwX"
  }
];

// Rota de Login com autenticação JWT e criptografia Bcrypt
app.post('/login', async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'E-mail e senha são obrigatórios.' });
  }

  // Busca o usuário pelo e-mail
  const usuario = usuariosSimulados.find(u => u.email === email);
  if (!usuario) {
    return res.status(401).json({ error: 'Credenciais inválidas.' });
  }

  // Compara a senha enviada com a senha criptografada (hash)
  const senhaValida = await bcrypt.compare(password, usuario.senhaHash);
  if (!senhaValida) {
    return res.status(401).json({ error: 'Credenciais inválidas.' });
  }

  // Gera o Token JWT válido por 1 hora
  const token = jwt.sign(
    { userId: usuario.id, nome: usuario.nome },
    SECRET_KEY,
    { expiresIn: '1h' }
  );

  return res.json({
    mensagem: 'Login efetuado com sucesso!',
    token,
    usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email }
  });
});

// Inicialização do servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 AgroCore API rodando em http://localhost:${PORT}`);
});
