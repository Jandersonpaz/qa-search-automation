@Login
Feature: Login
    Como usuário do sistema
    Quero realizar login
    Para acessar minha conta

    Background:
        Given que esteja na home
        When clico no botao Login

    Scenario Outline: Login
        And preencher formulario de login "<usuario>", "<senha>"
        And clicar em entrar
        Then verifico o texto "<mensagem>"

        Examples:
            | usuario                   | senha      | mensagem                 |
            | janderson.teste@email.com | 1234.teste | Bem-vindo                |
            | janderson.teste.email.com | 123456     | Email ou senha inválidos |