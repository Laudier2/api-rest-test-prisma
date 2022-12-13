# api-rest-test-prisma# api-users-products-TSC

<h1 align="center">
  <center>Prisma: o ORM Node.js que você precisa em 2022
</center>
</h1>

<p align="center">Nessa live vimos o poder do <a href="https://www.prisma.io">PrismaIO</a> e os motivos para usarmos ele em nossas aplicações</p>

## 👨🏼‍💻 Instrutor

- [José Santana](https://laudierstdev.ga/)

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [npm](classic.yarnpkg.com/en/docs/install)
- [prisma](https://www.prisma.io/docs/getting-started/quickstart)
- [typscript](https://www.typescriptlang.org/)
- [elefantsql](https://www.elephantsql.com/)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd prisma_decode`;
3. Rode `npm` ;
4. Rode `npm prisma generate` para instalar os models do prisma no projeto
5. Rode `npm dev` ou `npm run dev` para rodar a aplicação;
6. Acesse a URL `http://localhost:3000`;

## Como mostrar log da aplicação?

```Criando uma conexao com o @prisma/client
const prisma = new PrismaClient();
```

## Como incluir informações em um select com relacionamento

```ts
const product = await prisma.product.findMany({});
```

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com 💖 José Santana de Jesus 👋 [Entre na nossa comunidade!](laudierst.tk)
