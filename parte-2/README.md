# DC PLATFORM Parte 1/2

Projeto criado para resolução do seguinte problema:

"Recebemos um dump com lista de URLs de imagens de produtos que vamos utilizar para manter nossa base de dados atualizada.As URLs pertencem a uma empresa terceirizada que hospeda a maioria destas imagens, e ela nos cobra um valor fixo por cada request.
Já sabemos que o dump de origem não tem uma boa confiabilidade, pois encontramos várias imagens repetidas e boa parte delas também retornam status 404.
Como não é interessante atualizar nossa base com dados ruins, filtramos apenas as URLs que retornam status 200.Para diminuir a quantidade de requests necessárias para validar as URLs, decidimos limitar a quantidade de imagens por produto em até 3.
O seu objetivo é criar um programa que gera o dump final no menor tempo possível e com o mínimo de requests desnecessárias (já que existe um custo fixo por requisição)".

Para solução do problema foi cria uma aplicação em python que recebe um dump e filtra se resultado em um novo dump.

## Pré-instalação

- [Python 3]{https://www.python.org/downloads/release/python-367/}

## Instalação

- Garanta que você esteja no caminho ../dc-platform/parte-2;
- Execute o comando para instalar as dependências do projeto:
  ```
  $ pip3 install -r requirements.txt
  ```
- Tenha um arquivo 'input_dump.tar.gz no caminho ../dc-platform/parte-2;
- Execute o comando para iniciar a aplicação:
  ```
  $ python3 init.py input_dump.tar.gz
  ```

## Testes

- Para execução dos testes execute o seguinte comando:
```
$ python3 test.py
```
