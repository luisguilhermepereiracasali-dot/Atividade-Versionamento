# 🗄️ Banco de Dados

## 📝 Descrição do Projeto/Atividade
Criação do esquema de banco de dados relacional **AgroSphere**, desenvolvido para persistir e gerenciar as informações do projeto *Eve's Bloom*. A atividade engloba a modelagem entidade-relacionamento (DER) para conectar produtores rurais, mapear os protótipos automatizados em campo e estruturar uma tabela de logs históricos que registra as telemetrias de umidade, bateria e diagnósticos de danos enviados pelos sensores.

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
[Substitua este texto por sua resposta. Explique em suas palavras os conceitos de banco de dados que você aprendeu com esta atividade, tais como: modelagem relacional, chaves primárias (PK) e estrangeiras (FK), integridade referencial, comandos DDL (CREATE, ALTER) e DML (SELECT, INSERT, UPDATE, DELETE), agrupamentos e junções (JOINs).]

### 2. Para que serve (Por que aprendi)?
[Substitua este texto por sua resposta. Explique por que a persistência e a estruturação de dados são essenciais para aplicações de software. Qual o valor de saber projetar um banco de dados otimizado e realizar consultas eficientes?]

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   MySQL (ou MariaDB / SQL Server)
*   dbdiagram.io (ou brModelo / Workbench)
*   DBeaver ou cliente SQL similar

---

## 💻 Demonstração e Como Rodar

### Código/Script SQL Relevante Comentado
O script abaixo demonstra uma consulta avançada utilizando junções (`INNER JOIN`), projetada para extrair um relatório gerencial que o dashboard Front-end utiliza para alertar o produtor sobre robôs que precisam de manutenção imediata:

```sql
-- Consulta para consolidar a telemetria crítica dos robôs com os dados do produtor responsável
SELECT 
    produtores.nome AS nome_produtor,
    robos.modelo AS modelo_robo,
    logs_telemetria.nivel_bateria,
    logs_telemetria.umidade_solo,
    logs_telemetria.data_registro
FROM logs_telemetria
-- Junta a tabela de logs com a de robôs para identificar a máquina
INNER JOIN robos ON logs_telemetria.id_robo = robos.id_robo
-- Junta a tabela de robôs com a de produtores para saber quem gerencia
INNER JOIN produtores ON robos.id_produtor = produtores.id
-- Filtra apenas registros onde o robô notificou avaria física ou bateria crítica
WHERE logs_telemetria.danificado = TRUE OR logs_telemetria.nivel_bateria < 20
-- Ordena pelos registros de telemetria mais recentes do campo
ORDER BY logs_telemetria.data_registro DESC;
```

### Instruções para Executar
1. Copie o script DDL (como `schema.sql`) e execute em seu SGBD de preferência para gerar a estrutura de tabelas.
2. Execute o script de população de dados (como `seed.sql`) para inserir os registros de teste.
3. Utilize as queries documentadas no arquivo para realizar as consultas e verificar os resultados.
