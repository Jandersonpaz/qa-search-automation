@busca
Feature: Busca no QaSearch
  Como usuário do sistema
  Quero realizar uma busca por termos
  Para visualizar uma mensagem com o resultado pesquisado

  Background:
    Given que esteja na home

  Scenario: Scenario: Deve exibir mensagem com o termo pesquisado
    When preencho o campo de busca com "Qa Testando"
    And clico em pesquisar
    Then verifico o texto "Você pesquisou por: Qa Testando"

  Scenario: Limpar campo após busca realizada
    Given preencho o campo de busca com "Qa Testando"
    And clico em pesquisar
    When clico em limpar
    Then o campo de busca deve estar vazio
    And nao verifico o texto "Você pesquisou por: Qa Testando"

  Scenario: Exibir mensagem ao tentar buscar sem informar termo
    When clico em pesquisar
    Then verifico o texto "Digite algo para pesquisar"
