-- 1. Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS agrosphere;
USE agrosphere;

-- 2. Tabela de Produtores Rurais
CREATE TABLE IF NOT EXISTS produtores (
    id_produtor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Tabela de Robôs/Protótipos Agrícolas
CREATE TABLE IF NOT EXISTS robos (
    id_robo VARCHAR(50) PRIMARY KEY,
    id_produtor INT NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    data_ativacao DATE NOT NULL,
    FOREIGN KEY (id_produtor) REFERENCES produtores(id_produtor) ON DELETE CASCADE
);

-- 4. Tabela de Telemetria (Histórico)
CREATE TABLE IF NOT EXISTS logs_telemetria (
    id_log INT AUTO_INCREMENT PRIMARY KEY,
    id_robo VARCHAR(50) NOT NULL,
    nivel_bateria INT NOT NULL,
    umidade_solo DECIMAL(5,2) NOT NULL,
    danificado BOOLEAN DEFAULT FALSE,
    data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_robo) REFERENCES robos(id_robo) ON DELETE CASCADE
);

-- 5. Inserção de Dados de Teste (Seed)
INSERT INTO produtores (nome, email, senha_hash) VALUES 
('Luís Guilherme', 'luis@agro.com', '$2b$10$O3zW7wN2zR8yX8v7v7v7vOu7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u');

INSERT INTO robos (id_robo, id_produtor, modelo) VALUES 
('ROBO-EB01', 1, 'Eve\'s Bloom Alpha');

INSERT INTO logs_telemetria (id_robo, nivel_bateria, umidade_solo, danificado) VALUES 
('ROBO-EB01', 95, 42.5, FALSE),
('ROBO-EB01', 15, 38.0, TRUE); -- Registro crítico para o Dashboard pegar
