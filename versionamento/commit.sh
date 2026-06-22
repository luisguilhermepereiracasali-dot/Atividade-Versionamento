#!/bin/bash

# Exibe o menu interativo de tipos de commits convencionais
echo "============================================="
echo "  🚀 SELECIONE O TIPO DE COMMIT CONVENCIONAL "
echo "============================================="
echo "1) feat  - Nova funcionalidade"
echo "2) fix   - Correção de bug"
echo "3) docs  - Alteração em documentação"
echo "4) chore - Manutenção ou ajuste de configuração"
echo "============================================="
read -p "Digite o número correspondente: " opcao

case $opcao in
    1) tipo="feat" ;;
    2) tipo="fix" ;;
    3) tipo="docs" ;;
    4) chore="chore" ;;
    *) echo "❌ Opção inválida!"; exit 1 ;;
esac

# Define o escopo do projeto trabalhado
read -p "Digite o escopo (ex: mobile, backend, ia, readme): " escopo

# Se o usuário não digitar nada, remove os parênteses do escopo
if [ -z "$escopo" ]; then
    prefixo="$tipo"
else
    prefixo="$tipo($escopo)"
fi

# Define a mensagem principal da alteração
read -p "Digite a mensagem do commit (em inglês/padrão): " mensagem

if [ -z "$mensagem" ]; then
    echo "❌ Mensagem não pode ser vazia!"
    exit 1
fi

# Executa os comandos do Git sequencialmente
echo "📦 Adicionando arquivos..."
git add .

echo "💾 Executando commit convencional..."
git commit -m "$prefixo: $mensagem"

echo "✨ Concluído com sucesso!"
