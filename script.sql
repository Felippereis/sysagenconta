-- Crie um banco de dados
CREATE DATABASE IF NOT EXISTS gerenciamento_contas;

-- Use o banco de dados
USE gerenciamento_contas;

-- Crie uma tabela para armazenar as contas
CREATE TABLE IF NOT EXISTS contas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    vencimento DATE NOT NULL
);
