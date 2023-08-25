# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

| Isabela Gomes                                                                                                                |                                       |                                  |
|------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|----------------------------------|
|![imagePersona1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-sebo-e3/assets/89920953/58f0848b-9e09-44c9-ba80-cd98e80edd4f)|**Idade:** 25 anos </br> **Ocupação:** Estudante e estagiário de psicologia </br>  **Faixa salarial:** 0,5 salários mínimos |                                   |
|**Motivações:** </br> Se esforça muito nos estudo pois sonha em dar uma vida melhor para sua família. Quer ter uma velhice saudável e por isso já pensa no futuro.    | **Frustrações e Pontos de dor:** </br> -Tem pouco tempo para cuidar da saúde porque está com uma rotina muito cheia; </br> -Não consegue marcar consultas com médicos especialistas com tanta facilidade no SUS; </br> - Já marcou consultas online quando tinha convênio, e por isso busca por uma solução prática para marcar consultas pelo SUS; </br> -Não tem dinheiro para frequentar clínicas particulares.   | **Necessidades:** </br> Tem a necessidade de tirar um tempo para cuidar da saúde e por isso está em busca de meios práticos para marcar consultas e exames. | 

| Helena Rodrigues                                                                                                             |                                       |                                  |
|------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|----------------------------------|
|![imagePersona2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-sebo-e3/assets/89920953/6281ee33-9c3b-4e36-8a44-8d61255652e2)      |**Idade:** 47 anos </br> **Ocupação:** Auxiliar administrativo </br>  **Faixa salarial:** 1,5 salários mínimos |                                   |
|**Motivações:** </br> Apesar da rotina corrida Helena, ela precisa tirar um tempo para cuidar de sua saúde, para conseguir dar suporte aos seus pais idosos e para seus filhos.  | **Frustrações e Pontos de dor:** </br> -Precisa se deslocar várias vezes para marcar apenas uma consulta com um médico especialista; </br> -Tem uma rotina muito corrida, e isso acaba dificultado Helena a marcar consultas presencialmente; </br> -Não consegue marcar consultas por telefone ou online.   | **Necessidades:** </br> Precisa de meios mais práticos e rápidos para marcar suas consultas com médicos especialistas, de preferencia que não demande nenhum tipo de deslocamento.|




## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

A tabela a seguir apresenta os requisitos funcionais do projeto, identificando suas respectivas prioridades de entrega.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário faça seu cadastro no sistema | ALTA | 
|RF-002| Permitir que o usuário faça login e logout no sistema | ALTA |
|RF-003| Permitir que o usuário gerencie o seu perfil cadastrado | MÉDIA |
|RF-004| Permitir que o usuário marque consultas com o médico especialista de sua necessidade | ALTA | 
|RF-005| Permitir que o usuário consulte datas e horários disponíveis para consultas | ALTA |
|RF-006| Permitir que o usuário cadastrado visualize, altere e/ou cancele a data e a hora da consulta marcada | MÉDIA | 
|RF-007| Alertar ao usuário quando a data da consulta estiver próxima | BAIXA |
|RF-008| Permitir que o administrador do sistema cadastre datas, horários de consultas e médicos | ALTA | 
|RF-009| Permitir que o administrador do sistema visualize o relatório de consultas marcadas | ALTA | 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo do lado móvel e web | MÉDIA | 
|RNF-002| O sistema deve garantir a segurança dos dados dos usuários cadastrados |  ALTA | 
|RNF-003| O sistema deve ser intuitivo e de fácil utilização para os usuários |  BAIXA | 
|RNF-004| O sistema deve ser capaz de suportar um grande número de acessos simultâneos | MÉDIA | 
|RNF-005| O sistema deve estar disponível 24 horas por dia, 7 dias por semana, para que o sebo possa marcar consultas a qualquer momento |  ALTA | 
|RNF-006| O sistema deve ser confiável, sem apresentar falhas ou erros frequentes |  ALTA | 
|RNF-007| A aplicação deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) e sistemas operacionais para smarthphones e tablets (Android e iOS. |  ALTA | 
|RNF-008| A aplicação deve ser publicada em um ambiente acessível publicamente na Internet |  BAIXA | 

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID|	Descrição|
|-------|----------------------------------------------------------------------------------------------|
|RE-01|	O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 10/12/2023.| 
|RE-02|	A aplicação deve conter uma WEB API que faça a aplicação web e mobile interagirem simultaneamente |
|RE-03|	A equipe não pode subcontratar o desenvolvimento do trabalho.|

## Diagrama de Casos de Uso

![UseCaseDiagram.png](img/UseCaseDiagram.png)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Já o manifesto ágil é baseado nos seguintes valores indivíduos e interações mais que processos e ferramentas, software em funcionamento mais que documentação abrangente, colaboração com o cliente mais que negociação de contratos e responder a mudanças mais que seguir um plano. O nosso projeto de desenvolvimento de software tem o objetivo de atender aos requisitos tradicionais de projetos, não obstante dos valores do manifesto ágil e sua metodologias, para esse projeto propomos uma visão híbrida do uso dos casos.

## Gerenciamento de Tempo

Para realização do acompanhamento do gerenciamento de tempo, utilizaremos a visão de Roadmap do Github. Essa visão apresenta o projeto como em um gráfico de Gantt considerando as datas de início e fim planejadas do projeto. Através dessa visão é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.
![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
