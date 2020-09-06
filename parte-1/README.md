# DC PLATFORM Parte 1/2

Projeto criado para resolução do seguinte problema:

"Precisamos de uma API para receber a atualização de dados cadastrais de produtos. Ela deve receber um corpo no formato JSON, onde o tamanho varia desde alguns poucos Kb até alguns Gb. Experiências anteriores mostram que alguns clientes costumam enviar o mesmo corpo repetidas vezes ao longo de um curto espaço de tempo. Isso nos causou alguns problemas, como o fato de ter que escalar nossos bancos de dados muito além do necessário afim de aguentar a carga extra desnecessária. Para evitar que isto ocorra, precisamos que esta API negue requisições que tem o mesmo corpo num intervalo de 10 minutos. Como esta API atenderá milhares de requisições simultâneas, ela precisa funcionar em um cluster. É esperado que o comportamento descrito acima se mantenha, independente do nó que receber a requisição.".

Para solução do problema foi criado uma api no estilo REST com a tecnologia Node.js, executada em um formato de cluster, utilizando a lib nativa do Node.js chamada Cluster. A api recebe uma requisição no formado JSON de tamanho variado e a rejeita caso seu corpo seja o mesmo de alguma outra requisição executada em um determinado espaço de tempo.
Para tornar a implemetação da aplicação mais simples foi utilizado Express.js para gerenciamento do app, Sequelize para interações com o banco de dados e a lib Jest para realização de testes.

## Pré-instalação

- [Docker]{https://docs.docker.com/install/}

## Instalação

- Garanta que você esteja no caminho ../dc-platform/parte-1;
- Execute npm install para instalar as dependências do projeto:
  ```
  $ npm install
  ```
- Crie e configure um arquivo .env como o arquivo .env.example;
- Instale e execute um container postgres:
  ```
  $ docker run --name nome --network=postgres-network -e "POSTGRES_PASSWORD=senha" -p 5432:5432 -d postgres
  $ docker start nome
  ```
- Crie o banco de dados com o nome definido no arquivo .env e execute as migrations:
  ```
  $ sequelize-cli db:migrate
  ou
  $ npm install -g sequelize-cli
  $ sequelize-cli db:migrate
  ```

## Testes

- Verifique se o container de banco de dados está sendo executado;
- Para execução dos testes execute o seguinte comando:
```
$ npm test
```
