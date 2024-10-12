/*CREATE DATABASE db;

USE db;

-- Création de la table products
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2)
);

-- Insertion des données
INSERT INTO products (name, price) VALUES
('Product A', 10.99),
('Product B', 15.49),
('Product C', 7.99);*/

-- Création de la base de données si elle n'existe pas déjà
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'db') THEN
        EXECUTE 'CREATE DATABASE db';
    END IF;
END $$;

-- Connexion à la base de données
\c db;

-- Création de la table products
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Insertion des données si la table est vide
INSERT INTO products (name, price) VALUES
('Product A', 10.99),
('Product B', 15.49),
('Product C', 7.99)
ON CONFLICT (id) DO NOTHING;  -- Évite les doublons si la table n'est pas vide

-- Vérification des permissions (optionnel)
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE products TO postgres;