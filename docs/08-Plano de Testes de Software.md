# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

| **Caso de Teste** 	| **CT-01 – Cadastro* 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 – Permitir que o usuário faça seu cadastro no sistema </br> RF-003 - Permitir que o usuário gerencie o seu perfil cadastrado | 
| Objetivo do Teste 	| Verificar se o usuário consegue se cadastrar na aplicação, alterar os dados e excluir a conta. |
| Passos 	| 1) Acessar o aplicativo “Med Mulher” pela versão Web ou mobile </br> 2) Visualizar a página de Login, clicando em Cadastre-se na página inicial </br> 3) Cadastrar um novo usuário </br> 4) Preencher os campos solicitados (nome, e-mail, senha, endereço e CPF) </br> 5) Clique no botão cadastrar. |
|Critério de Êxito | - O cadastro foi realizado com sucesso, caso não seja bem-sucedido deverá obedecer aos critérios de senha: - Crie uma senha com no mínimo 8 caracteres, - Adicione letras minúsculas, -Adicione pelo menos uma letra maiúscula. |
|  	|  	|

| **Caso de Teste** 	| **CT-02 – Login* 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-002 -	Permitir que o usuário faça login e logout no sistema | 
| Objetivo do Teste 	| Verificar se o usuário consegue fazer o Login e o Logout corretamente |
| Passos 	| 1) Acessar o aplicativo “Med Mulher” pela versão Web ou mobile </br> 2) Visualizar a área de login </br> 3) Preencher as informações de Login e senha previamente cadastradas </br> 4) Fazer login no sistema </br> 5) Fazer Logout quando quiser sair da aplicação |
|Critério de Êxito | - A tela de login deve abrir corretamente - O login e senha cadastrados devem direcionar o usuário para a tela de home do paciante - Login e senha incorretos devem exibir uma mensagem de login ou senha incorretos - O usuário deverar conseguir realizar o logout do sistema |
|  	|  	|

| **Caso de Teste** 	| **CT-03 – Cadastro de médicos e agenda* 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-008	- Permitir que o administrador do sistema cadastre datas, horários de consultas e médicos | 
| Objetivo do Teste 	| Verificar se o administrador conseguirá cadastrar e salvar na aplicação, as informações do médico e de sua agenda (data e horários de atendendo).  |
| Passos 	| 1) Acessar a área de administrador da aplicação “Med Mulher”; </br> 2) Clicar em "Cadastrar médico"; </br> 3) Preencher as informações pessoais do médico e sua especialidade médica; </br> 4) Preencher os dias e horários em que o médico estará atendendo; </br> 5) Confirmar que os dados foram devidamente salvos no banco de dados. |
|Critério de Êxito | - O cadastro terá sido realizado com sucesso, se os dados do médico e de sua agenda estiverem salvos no banco de dados. |

| **Caso de Teste** 	| **CT-04 - Agendamento* 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-004	Permitir que o usuário marque consultas com o médico especialista de sua necessidade | 
| Objetivo do Teste 	| Verificar se o usuário consegue fazer o agendamento da consulta, selecionando o médico e sua especialidade |
| Passos 	| 1) Acessar o aplicativo “Med Mulher” pela versão Web ou mobile </br> 2) Visualizar a área de login </br> 3) Fazer cadastro caso ainda não tenha se cadastrado </br> 4) Fazer login no sistema </br> 5) Ir para a página de agendamento de consultas </br> 6) Agendar consulta |
|Critério de Êxito | - A consulta deve ser agendada com sucesso e aparecer na área "Minhas Consultas" |
|  	|  	|


# Ferramentas de Testes

## Utilização do Jest para Testes de Aplicação Node.js
Os testes desempenham um papel crucial na garantia da qualidade do código e na confiabilidade de nossas aplicações, e a decisão de adotar o Jest foi tomada após uma análise cuidadosa das opções disponíveis.

## Razões para a Escolha do Jest
- Simplicidade e Facilidade de Uso: O Jest é amplamente reconhecido pela sua simplicidade e facilidade de uso. Isso permite que nossa equipe de desenvolvimento se concentre na criação de testes eficazes em vez de lidar com complexas configurações.
- Rapidez na Execução: A velocidade de execução dos testes é uma consideração crítica para o fluxo de trabalho de desenvolvimento. O Jest é otimizado para ser rápido, permitindo que os testes sejam executados rapidamente, o que é essencial para um desenvolvimento ágil.
- Bateria de Recursos Abrangente: O Jest oferece uma ampla gama de funcionalidades, como suporte para testes síncronos e assíncronos, asserções, mocks e spies, que atendem às nossas necessidades de teste.
- Ampla Comunidade e Documentação: O Jest possui uma comunidade ativa de desenvolvedores e uma documentação abrangente. Isso significa que podemos encontrar suporte e soluções para problemas comuns de forma eficaz.
- Integração com o Ecossistema Node.js: Como uma ferramenta desenvolvida para JavaScript e Node.js, o Jest se integra perfeitamente com nosso ambiente de desenvolvimento atual.
- Boas Práticas de Teste: O Jest promove boas práticas de teste, como testes isolados e independentes. Isso nos ajuda a escrever testes mais confiáveis e eficazes.
- Snapshot Testing: O recurso de "snapshot testing" do Jest permite que capturemos automaticamente o estado da saída de nossos componentes e a comparemos com versões anteriores. Isso é valioso para a detecção rápida de regressões visuais.

## Processo de Adoção do Jest
A transição para o uso do Jest em nossa aplicação Node.js envolveu as seguintes etapas:
- Avaliação de Necessidades: Avaliamos nossos requisitos de teste e consideramos as opções disponíveis para determinar qual framework melhor atenderia às nossas necessidades.
- Instalação e Configuração: Instalamos o Jest como dependência de desenvolvimento em nosso projeto e configuramos os ambientes de teste conforme necessário.
- Criação de Testes: Adaptamos nossos testes existentes e escrevemos novos testes usando as funcionalidades do Jest.
- Execução de Testes Automatizados: Configuramos a execução de testes automatizados em nosso ambiente de integração contínua (CI/CD) para garantir que os testes sejam executados sempre que houver alterações no código.

## Conclusão
A decisão de adotar o Jest para nossos testes de aplicação Node.js foi baseada em sua simplicidade, desempenho e robustez. Acreditamos que essa escolha contribuirá significativamente para a qualidade e a confiabilidade de nossos produtos, permitindo-nos entregar software de alto nível aos nossos usuários.
