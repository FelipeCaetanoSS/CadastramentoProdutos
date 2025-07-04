# Cadastro de Produtos

Este é um projeto simples de cadastro de produtos desenvolvido com HTML, CSS e JavaScript puro. Ele permite adicionar, listar, editar e excluir produtos de uma tabela dinâmica.

## Estrutura do Projeto

* `index.html`: O arquivo HTML principal que define a estrutura da interface do usuário.
* `main.css`: O arquivo CSS responsável pela estilização e layout da aplicação.
* `main.js`: O arquivo JavaScript que contém a lógica para manipulação dos produtos (adicionar, editar, excluir, listar).
* `editar.png`: Imagem utilizada para o botão de edição.
* `excluir.png`: Imagem utilizada para o botão de exclusão.

## Funcionalidades

* **Adicionar Produto**: Insira o nome e o valor do produto nos campos e clique em "SALVAR" para adicioná-lo à tabela.
* **Listar Produtos**: Todos os produtos cadastrados são exibidos em uma tabela com ID, Nome e Valor.
* **Editar Produto**: Clique no ícone de "lápis" ao lado de um produto para preencher os campos de entrada com seus dados e, em seguida, clique em "ATUALIZAR" para salvar as alterações.
* **Excluir Produto**: Clique no ícone de "lixeira" ao lado de um produto para removê-lo da tabela após uma confirmação.
* **Cancelar**: Limpa os campos de entrada e redefine o botão "SALVAR" para seu estado inicial.
* **Validação de Campos**: Alerta o usuário caso o nome ou o valor do produto não sejam preenchidos.

## Como Usar

1.  Clone ou faça o download deste repositório.
2.  Abra o arquivo `index.html` em seu navegador web.
3.  Preencha os campos "NOME DO PRODUTO" e "VALOR DO PRODUTO".
4.  Clique em "SALVAR" para adicionar um novo produto.
5.  Use os ícones de "lápis" e "lixeira" na coluna "AÇÕES" para editar ou excluir produtos, respectivamente.

## Estilização (main.css)

O arquivo `main.css` fornece estilos básicos para o layout, formulário, botões e tabela, incluindo efeitos de `hover` para os botões "SALVAR" e "CANCELAR".
