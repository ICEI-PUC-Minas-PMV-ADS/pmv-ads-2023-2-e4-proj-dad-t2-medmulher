# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

| CT-01 | Realizar Cadastro |
| --- | --- |
| Requisito Associado | RF-001 e RF-003 |
| Descrição | O teste consiste em verificar se é possível realizar o cadastro de um usuário na aplicação. |
| Passos |  1) Abrir a página de cadastro de usuário </br> 2) Preencher os campos obrigatórios: nome, e-mail, senha, endereço e CPF </br>  3) Clicar no botão "Cadastrar" </br>  4) Verificar se o usuário é redirecionado para a página de login |
| Resultado Esperado | O usuário deve ser capaz de se cadastrar na aplicação com sucesso e ser redirecionado para a página de login. |

#

| CT-02 | Login |
| --- | --- |
| Requisito Associado | RF-002 |
| Descrição | O teste consiste em verificar se é possível fazer o Login e o Logout na aplicação |
| Passos |  1) Acessar a aplicação “Med Mulher” </br> 2) Visualizar a área de login </br> 3) Preencher as informações de Login e senha cadastrados previamente </br> 4) Fazer login no sistema </br> 5) Ser redirecionado para a home do paciente </br> |
| Resultado | O usuário deverá conseguir realizar login e logout no sistema |

#

| CT-03	| Cadastro de médicos e agenda |
| ---	| ---	|
|	Requisito Associado	| RF-008 | 
| Objetivo do Teste	| Verificar se o administrador conseguirá cadastrar e salvar na aplicação, as informações do médico e de sua agenda (data e horários de atendendo). |
| Passos | 1) Acessar a área de administrador da aplicação “Med Mulher”; </br> 2) Clicar em "Cadastrar médico"; </br> 3) Preencher as informações pessoais do médico e sua especialidade médica; </br> 4) Preencher os dias e horários em que o médico estará atendendo; </br> 5) Confirmar que os dados foram devidamente salvos no banco de dados. |
| Resultado Obtido |  |

#

| CT-04 | Agendamento de consultas |
| --- | --- |
| Requisito Associado | RF-004 |
| Descrição | O teste consiste em verificar se é possível fazer o agendamento de uma consulta |
| Passos |  1) Acessar o aplicativo “Med Mulher” </br> 2) Visualizar a área de login </br> 3) Fazer cadastro caso ainda não tenha se cadastrado </br> 4) Fazer login no sistema </br> 5) Ir para a página de agendamento de consultas </br> 6) Agendar consulta |
| Resultado | x |



### Evidências do teste realizado
(vídeo ou imagem do teste)

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
