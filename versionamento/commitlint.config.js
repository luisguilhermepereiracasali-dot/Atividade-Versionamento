// Configuração oficial do Commitlint para validar o histórico do Git
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Garante que o tipo de commit seja sempre em letras minúsculas
    'type-case': [2, 'always', 'lowercase'],
    // Define os tipos obrigatórios aceitos no repositório do portfólio
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Novas features (ex: novas telas do app mobile)
        'fix',      // Correções de bugs (ex: erros na rota da API)
        'docs',     // Atualizações de documentação (ex: os READMEs)
        'style',    // Formatações visuais de código (espaços, ponto e vírgula)
        'refactor', // Refatoração de código que não altera comportamento
        'test',     // Criação ou modificação de testes unitários
        'chore'     // Mudanças em build, ferramentas ou pacotes npm
      ],
    ],
    // Impede que o assunto principal do commit termine com um ponto final
    'subject-full-stop': [2, 'never', '.'],
    // Garante que a mensagem principal não seja vazia
    'subject-empty': [2, 'never'],
  },
};
