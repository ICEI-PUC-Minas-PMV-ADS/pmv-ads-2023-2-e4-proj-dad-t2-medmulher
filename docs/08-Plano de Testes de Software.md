# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

| **Caso de Teste** 	| **CT-02 – Cadastro* 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 – Permitir que o usuário faça seu cadastro no sistema </br> RF-003 - Permitir que o usuário gerencie o seu perfil cadastrado | 
| Objetivo do Teste 	| Verificar se o usuário consegue se cadastrar na aplicação, alterar os dados e excluir a conta. |
| Passos 	| 1) Acessar o aplicativo “Med Mulher” pela versão Web ou mobile 2) Visualizar a página de Login, clicando em Cadastre-se na página inicial 3) Cadastrar um novo usuário 4) Preencher os campos solicitados (nome, e-mail, senha, endereço e CPF) 5) Clique no botão cadastrar. |
|Critério de Êxito | - O cadastro foi realizado com sucesso, caso não seja bem-sucedido deverá obedecer aos critérios de senha: - Crie uma senha com no mínimo 8 caracteres, - Adicione letras minúsculas, -Adicione pelo menos uma letra maiúscula. |
|  	|  	|


| **Caso de Teste** 	| **CT-0X – Cadastro de médicos e agenda* 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-008	Permitir que o administrador do sistema cadastre datas, horários de consultas e médicos | 
| Objetivo do Teste 	| Verificar se o administrador conseguirá cadastrar e salvar na aplicação, as informações do médico e de sua agenda (data e horários de atendendo).  |
| Passos 	| 1) Acessar a área de administrador da aplicação “Med Mulher”; </br> 2) Clicar em "Cadastrar médico"; </br> 3) Preencher as informações pessoais do médico e sua especialidade médica; </br> 4) Preencher os dias e horários em que o médico estará atendendo; </br> 5) Confirmar que os dados foram devidamente salvos no banco de dados. |
|Critério de Êxito | - O cadastro terá sido realizado com sucesso, se os dados do médico e de sua agenda estiverem salvos no banco de dados. |
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
