# My Contacts Back-End

Este projeto é da JStack, da Hotmart, o Front vai ser desenvolvido agora que eu terminei o meu módulo de React.

Neste projeto tem API integrado com database, que usei o PostgreSQL como imagem no Docker.

Para ser necessário usar a API da forma correta, é necessário você ter o Docker instalado
Após isso, basta abrir o Docker na sua máquina e inserir no terminar do VS Code alguns comandos do Docker.

Vou listar a sequência dos comandos necessários para que funcione a imagem do Docker e a conexão do database com a API:
--> docker pull postgres (esse comando irá instalar a imagem na sua máquina)
--> docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
--> docker exec -it pg bash
--> psql -U root
--> CREATE DATABASE mycontacts;
--> \c mycontacts
--> CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
--> CREATE TABLE IF NOT EXISTS categories (
      id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
      name VARCHAR NOT NULL
    );
--> CREATE TABLE IF NOT EXISTS contacts (
      id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
      name VARCHAR NOT NULL,
      email VARCHAR UNIQUE,
      phone VARCHAR,
      category_id UUID,
      FOREIGN KEY(category_id) REFERENCES categories(id)
    );
