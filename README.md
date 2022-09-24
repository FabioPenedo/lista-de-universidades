## 🖥️ Projeto

Lista de universidades, vai registrar de uma API externa no banco de dados lista de universidades de seus respectivos países, sistema de CRUD, listar em geral, pelo país e pelo ID.

## 🧱 Tecnologias

+ NodeJs(Express)
+ TypeScript
+ JavaScript
+ MongoDB

## 📜 Explicação

### **/insertapi**

- Método **POST**

- Essa rota vai buscar uma api externa para inserir dados ja existentes de universidades de seus respectivos países, ao mesmo tempo que ao inserir os dados completos na collection **universities**, na collection **nameuniversities** vai inserir somente o nome das universidade.

- É preciso enviar o nome do país através do body, exemplo **country: brazil**, a lista de países disponíveis são: 
**argentina**,
**brazil**,
**chile**,
**colombia**,
**paraguay**,
**peru**,
**suriname**,
**uruguay**

- Se tiver no DB dados da universidade do país ja cadastrado não irá inserir .
---

### **/universities**

- Método **GET**

- Vai listar todas as universidades cadastradas no banco de dados de todos os países, e permite o filtro pelo país específico.

- Para filtrar pelo país específico é preciso enviar pela requisição query **country** o país, caso não envie irá listar todos.

- Enviando pela requisição a query **page** com o valor **all** irá retornar todos os registros de dados daquele país, se o **page** for enviado com valor númerico vai limitar a 20 itens por página.
---

### **/universities/id**

- Método **GET**

- Vai filtrar dados completos da universidade pelo ID enviado.

- É preciso enviar o ID do item específico pela URL, se não existir não retornara nada.
---

### **/universities**

- Método **POST**

- Vai criar novos dados

- É preciso enviar pelo body os seguintes campos:

Campos   | Valores
--------- | ------
alpha_two_code | Sigla do país com 2 caracteres
web_pages | Lista com as URL’s da universidade
name | Nome da universidade
country | Nome do país por extenso
domains | Lista de domínios da universidade
stateprovince | Sigla do estado onde fica a universidade se houver

- Será impedido o cadastro de novas universidades com o mesmo **country** e **name** enviados.
---

### **/universities/id**

- Método **PUT**

- Método para atualizar dados ja existentes.

- É preciso enviar o ID específico pela URL.

- É possível enviar pelo body os seguintes campos para serem alterados: 

Campos   | Valores
--------- | ------
web_pages | Lista com as URL’s da universidade
name | Nome da universidade
domains | Lista de domínios da universidade
---

### **/universities/id**

- Método **DELETE**

- Método para deletar dado específico pelo ID enviado.

- É preciso enviar o ID específico pela URL.
---

## 🏠 Executar localmente

Clone o projeto

```bash
git clone https://github.com/FabioPenedo/lista-de-universidades
```

Entre na pasta do projeto

```bash
cd lista-de-universidades
```

Instale as dependências globais

```bash
npm install -g nodemon typescript ts-node
```

Instale as dependências

```bash
npm install
```

Inicie o servidor

```bash
npm run start-dev
```

Feito por Fábio Penedo: 👋 [Entre em contato](https://www.linkedin.com/in/fabiopenedo/)