# Front-End Challenge

[Link para visualizar a aplicação](https://filmes-omdb.surge.sh/)

## Ferramentas e bibliotecas utilizadas

- [ReactJS](https://pt-br.reactjs.org/docs/getting-started.html)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Axios](https://axios-http.com/docs/intro)
- [Styled Components](https://styled-components.com/docs)
- [Enzyme](https://enzymejs.github.io/enzyme/)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)

## Pré-requisitos

- NodeJs
- Gerar uma chave de acesso para fazer as requisições [nesse link](http://www.omdbapi.com/apikey.aspx)

## Como rodar o projeto

- Instale as dependências com `yarn` ou `npm install`
- Faça uma cópia do arquivo `.env.example`, renomeie-a para `.env.local` e preencha os campos necessários
- Rode a aplicação usando o comando `yarn start` ou `npm start`

## Testes unitários

- Para rodar os testes, execute o comando `yarn test`
- Para obter o relatório de cobertura de código, execute o comando `yarn test --coverage`

## Teste e2e

- Rode o projeto e execute o comando `yarn e2e`

## Melhorias futuras

- Criar página para listar os filmes adicionados aos favoritos;
- Autocomplete na busca;
