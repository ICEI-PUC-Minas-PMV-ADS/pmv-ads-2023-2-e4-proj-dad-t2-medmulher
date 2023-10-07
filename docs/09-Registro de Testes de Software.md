# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

| CT-01 | Realizar Cadastro |
| --- | --- |
| Requisito Associado | RF-001 e RF-003 |
| Descrição | O teste consiste em verificar se é possível realizar o cadastro de um usuário na aplicação. |
| Passos |  1) Abrir a página de cadastro de usuário </br> 2) Preencher os campos obrigatórios: nome, e-mail, senha, endereço e CPF </br>  3) Clicar no botão "Cadastrar" </br>  4) Verificar se o usuário é redirecionado para a página de login |
| Resultado Obtido | O usuário deve ser capaz de se cadastrar na aplicação com sucesso e ser redirecionado para a página de login. |

#

| CT-02 | Login |
| --- | --- |
| Requisito Associado | RF-002 |
| Descrição | O teste consiste em verificar se é possível fazer o Login e o Logout na aplicação |
| Passos |  1) Acessar a aplicação “Med Mulher” </br> 2) Visualizar a área de login </br> 3) Preencher as informações de Login e senha cadastrados previamente </br> 4) Fazer login no sistema </br> 5) Ser redirecionado para a home do paciente </br> |
| Resultado Obtido | 1) O usuário conseguiu efetuar login no sistema </br> 2) Ao inserir os dados de login de forma incorreta, apareceu uma mensagem de erro, informando que o usuário ou senha estão incorretos </br> 3) Ao inserir um endereço de e-mail não cadastrado, apareceu a mensagem de que aquele usuário não está cadastrado </br> 4) O usuário conseguiu realizar o Logout com sucesso |

#

| CT-03	| Cadastro de médicos e agenda |
| ---	| ---	|
|	Requisito Associado	| RF-008 | 
| Objetivo do Teste	| Verificar se o administrador conseguirá cadastrar e salvar na aplicação, as informações do médico e de sua agenda (data e horários de atendendo). |
| Passos | 1) Acessar a área de administrador da aplicação “Med Mulher”; </br> 2) Clicar em "Cadastrar médico"; </br> 3) Preencher as informações pessoais do médico e sua especialidade médica; </br> 4) Preencher os dias e horários em que o médico estará atendendo; </br> 5) Confirmar que os dados foram devidamente salvos no banco de dados. |
| Resultado Obtido | x |

#

| CT-04 | Agendamento de consultas |
| --- | --- |
| Requisito Associado | RF-004 |
| Descrição | O teste consiste em verificar se é possível fazer o agendamento de uma consulta |
| Passos |  1) Acessar o aplicativo “Med Mulher” </br> 2) Visualizar a área de login </br> 3) Fazer cadastro caso ainda não tenha se cadastrado </br> 4) Fazer login no sistema </br> 5) Ir para a página de agendamento de consultas </br> 6) Agendar consulta |
| Resultado Obtido | x |



### Evidências do teste realizado

- **Tests no JEST "Users / Doctor e Consultation"**: 
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/e5116873-8f26-4779-ad1a-56407fdabc28)


- **UsersControllers.spec.js**:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/76a48985-f459-4ff3-b917-c4995555e135)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/90adc0e3-89d0-4cc4-94b0-b1de8c3c6a1c)


- **DoctorControllers.spec.js**:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/7e69ee79-a2bc-401d-8b7b-5926f240fea1)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/428701b4-b1f8-4aae-b0ca-24fa8a11ba1e)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/b1f641ec-7861-489a-9d11-2f9b4633f729)


- **ConsultationControllers.spec.js**:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/536b41f7-b993-4860-9551-e86d80bdc7b9)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/da949037-9150-4c77-bf40-3f7d61717fd8)

## Avaliação

Os resultados obtidos no Prompt de Comando indicam que os testes de integração foram bem-sucedidos, seguindo o plano de testes de software proposto. Obedecendo os comandos de "POST, GET, GET ID, PATCH e DELETE", em todas as funcionalidades do banco de dados MongoDB aplicados no projeto MedMulher.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/dec8d5c4-9180-4421-a3c2-0fc29def69f0)




