# Arquitetura da Solução

A arquitetura da nossa aplicação seguirá o estilo arquitetural baseado em serviços, onde teremos três componentes básicos: a interface do usuário, os serviços e o banco de dados.

O front-end da aplicação web será desenvolvido com CSS, React e JavaScript, enquanto a aplicação mobile será desenvolvida usando React Native. Ambas compartilharão um único back-end, que será desenvolvido em Node.js, e utilizarão três bancos de dados construídos no MongoDB.


![Diagrama de blocos - v2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/89920953/838074e7-697d-4500-b9ea-1278879c072e)


## Diagrama de Classes

No diagrama de classes do projeto MedMulher, este seguirá a estrutura da arquitetura cliente-servidor, na qual o servidor fornece serviços aos clientes por meio da marcação de consultas. Essas consultas podem ser realizadas tanto pelo aplicativo móvel quanto pelo aplicativo desktop, contanto que estejam conectados à Internet. A seguir, encontram-se os diagramas Web e Mobile, respectivamente.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/7db32f21-3e9f-4eb3-a639-2c6a98fc3ace)



## Documentação do Banco de Dados Não Relacional

### Esquema Chave-Valor

Segue abaixo o arquivo JSON de criação da tabela "Usuários" no banco de dados. Neste modelo é definido os campos que farão parte da tabela: a chave e seu respectivo valor.

```
{
    "address": {
        "street": "Rua Sapucaí",
        "district": "MG",
        "city": "Belo Horizonte",
        "complement": "lado A",
        "number": 2023,
        "postal_code": "30380-30"
    },
    "_id": "650b9a36099fd9f53e17fc6e",
    "name": "Helena Rodrigues",
    "password": "puc@minasvirtual",
    "email": "helenarodrigues07@gmail.com",
    "cpf": "022.123.412-55",
    "created_date": "2023-09-21T01:19:50.701Z",
    "update_user_date": "2023-09-21T01:20:22.34IZ"
}
```

Segue abaixo o arquivo JSON de criação da tabela "Médico" no banco de dados. Neste modelo é definido os campos que farão parte da tabela: a chave e seu respectivo valor.

```
{
    "_id": "980a9b36099jd9j53e17fc7f",
    "name": "Cristina Mourão de Assis",
    "specialty": "Ginecologista",
    "consultation_date": "10/12/2023"
    "created_date": "2023-09-21T01:19:51.701Z",
    "update_user_date": "2023-09-21T01:20:22.34IZ"
}
```

Segue abaixo o arquivo JSON de criação da tabela "Consulta" no banco de dados. Neste modelo é definido os campos que farão parte da tabela: a chave e seu respectivo valor.

```
{
    "_id": "210c9d36099gd9g53e17fc8g",
    "name": "Cristina Mourão de Assis",
    "specialty": "Ginecologista",
    "health_status": "Mediano",
    "symptoms": "Cólica menstrual",
    "observation": "Menstruação intensa",
    "consultation_date": "10/12/2023"
}
```

Segue abaixo o arquivo JSON de criação da tabela "Administrador do Sistema" no banco de dados. Neste modelo é definido os campos que farão parte da tabela: a chave e seu respectivo valor.

```
{
    "_id": "430e9f36099fh9f53h17fc4h",
    "name": "Marta Koffman Hills"
}
```

## Processos e suas Respectivas Atividades

Para gerenciamento do projeto o grupo irá utilizar a metodologia ScrumBan, e o processo será notado através do BPMN. O modelo Scrumban é considerado como um arcabouço para os projetos, com o objetivo padronizar o processo para que a equipe possa contar com uma estrutura facilmente reprodutível a cada mudança entre projetos. De acordo com (Asana,2023) o fluxo de trabalho básico conta com três estágios principais: 

- backlog de tarefas, tarefas em andamento e concluídas. Os membros da equipe transferem os cartões do backlog de tarefas para a coluna de tarefas em andamento à medida que trabalham nelas e, em seguida, movem-nos para a coluna de tarefas concluídas conforme os critérios de conclusão definidos pela equipe.
- Por prioridade das tarefas: as tarefas são organizadas por prioridade. Este quadro inteiro é considerado como o backlog. Deste quadro, os cartões são movidos para um segundo quadro Kanban, onde são alinhados ao estágio correspondente da tarefa, com base no fluxo de trabalho da equipe.
- Por story points: de modo semelhante ao método baseado na prioridade das tarefas, os cartões podem ser organizados por story points. Os story points são usados na metodologia Agile para fazer uma estimativa do esforço ou do tempo exigidos pela tarefa. As tarefas marcadas com mais story points são priorizadas em relação àquelas com menos pontos. 

Para o gerenciamento, organização e distribuição das tarefas, utiliza-se a ferramenta do Github. As Sprints estão estruturadas no formato de marcos, conforme demonstrado abaixo:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/blob/main/docs/img/sprint.png)


Além disso, temos o Backlog do Produto elaborado pelo grupo no GitHub, cujo acesso é possível através da URL: [https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/510]

Os entregáveis estão dispostos no “Product Backlog” e apresentados em método Kanban conforme andamento da atividade:
- Backlog: recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto também devem ser incorporadas a esta lista.
- To Do: Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando.
- In Progress: Quando uma tarefa tiver sido iniciada, ela é movida para cá.
- Test: Checagem de Qualidade. Quando as tarefas são concluídas, eles são movidas para o “CQ”. No final da semana, eu revejo essa lista para garantir que tudo saiu perfeito.
- Locked: Quando alguma coisa impede a conclusão da tarefa, ela é movida para esta lista juntamente com um comentário sobre o que está travando a tarefa.
- Done: nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para ser entregues ao usuário. Não há mais edições ou revisões necessárias, ele está agendado e pronto para a ação.

Abaixo, figura demonstrando a disposição dos entregáveis:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/blob/main/docs/img/kanban.png)

## Modelo e Notação de Processos de Negócio

O modelo Business Process Model and Notation (BPMN ou em português Modelo e Notação de Processos de Negócio), foi utilizado para descrever o processo de metodologia adotado para o processo de desenvolvimento e para o processo de negócios. Por ser padronizada, a notação BPMN facilitará o entendimento das pessoas envolvidas no projeto. Neste sentido, com o modelo BPMN, utilizaremos o seu conjunto de elementos gráficos para representar aquelas atividades de trabalho, agrupadas em processos, para indicar como eles serão executados.

Abaixo está o modelo do fluxo de mensagens entre os usuarios A e B e suas determinadas interações com a Aplicação durante uma conversa:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/blob/main/docs/img/Diagrama_aplicativo_2.png)

## Metas e Indicadores

Para o processo apresentado na notação BPMN o grupo estabeleceu as seguintes metas e indicadores para processo de desenvolvimento:

1.	Separar regras de negócio das aplicações - visibilidade e processos mais inteligentes.
2.	Expressar regras de negócio em termos que as pessoas de negócio compreendam - Visibilidade dos modelos de decisão
3.	Estimular a colaboração entre pessoas de negócio e TI - Agilidade
   
Como meta de negócio, sabe-se que o cliente utilizará o produto com o objetivo de realizar marcações de consultas e exames em clínicas da mulher. Sendo assim, é importante que ele consiga fazer o agendamento ou gerenciamento de suas marcações no máximo em 10 minutos. Outro ponto relevante, é que o médico precisar acessar sua agenda com as marcações confirmadas com 24 horas de antecedência.
O objetivo é criar um produto que otimize o processo de agendamento e gerenciamento de consultas, onde o tempo de instalação e configurações de uso fiquem dentro da margem de aceite (MA) estabelecida pela meta.


|  Classificação de indicadores  |      Métrica      | 
|--------------|---------------------|
| Viável       |  Dentro da Meta     | 
| Aceitável    |  Meta + (MA)        | 
| Inviável     |  Acima da meta+(MA) | 


|  Evento   |      Descrição      | Meta | Margem de Aceite (MA)  |
|--------------|---------------------|---------------------|---------------------|
| Agendamento  |  Avaliar o tempo de  agendamento dos clientes | 8 minutos  | 5 minutos  |
| Cancelamento |  Acesso ao app, gerenciamento de conta e cancelar marcação | 5 minutos | 3 minutos |
| Cadastro de Médico |  Cadastrar médicos no app para agendamento de consultas | 8 minutos  | 5 minutos  |

|  Metas de Negócio  |      Méta      |       MA      | 
|--------------|---------------------|---------------------|
| downloads    | aumento de 35% em downloads no app   | 3.0 |
| agendamento  | aumento de 25% no uso do app para agendamento| 3.0 |
| retenção     |  nenhuma redução na retenção | 3.0 |


Para alcançar as metas, o grupo utilizará o método SMART, estabelecendo-se 5 indicadores de desempenho:
1.	Specific/Específico = Projeto completo até a data 01/12/2022. Utilização do aplicativo pra agendamento do usuário em 10 minutos.
2.	Measurable/Mensurável = em quanto tempo o resultado deve ser alcançado alcançado? Em 2 meses
3.	Attainable/Atingível = considerando a capacidade produtiva dos membros do grupo, é viável a construção de um pomodoro cuja utilização e configuração para uso, não ultrapasse 10 minutos até a data final da conclusão do projeto.
4.	Relevante/Relevant = a meta é importante pois o serviço está relacionado à administração de tempo e produtividade. Caso o produto atrase o usuário em seus estudos ou tarefas, o produto torna-se completamente inútil. A relevãncia é apresentada por label de prioridade como apresentado abaixo, diposta em 3 cores: vermelha, amarela e verde.
5.	Time Base = Os membros do grupo deverão ser consultados sobre os prazos de cada etapa do processo, de modo que o cronograma seja definido de forma conjunta entre todos os envolvidos. Cada atividade deverá constar o nome do responsável e data de conclusão.

          - Vermelha: prioridade alta 
          - Amarela: prioridade média 
          - Verde: prioridade baixa 
          
As tarefas serão livres para qualquer membro do time poder executá-las ou direcionadas a determinado membro do time, que tenha mais experiência em determinada área de conhecimento. Com relação a livre escolha de tarefas, obrigatoriamente, deve ser respeitada a hierarquia de prioridades. Enquanto tiverem tarefas de maiores prioridades disponíveis, não poderão ser iniciadas as tarefas de menor prioridade, a prioridade padrão é a amarela, devendo ser vermelhas as prioridades urgentes que surgirem ao longo do projeto.  

Abaixo, figura demonstrando a disposição das etiquetas:


![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/blob/main/docs/img/Etiquetas_projeto.png)

## Quadro Visual Atual e Gestão de Trabalho

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/blob/main/docs/img/gerenciamento_atualizado1.png)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/blob/main/docs/img/gerenciamento_atualizado2.png)


## Tecnologias Utilizadas

A linguagem de programação JavaScript, atrelado a biblioteca React Native e React JS, juntamente com o framework e Node.js foram escolhidas para a aplicação porque a combinação dessas ferramentas e tecnologias permitem criar uma aplicação robusta e escalável, permitindo assim, lidar com um número crescente de clientes ou usuários

|  Linguagem   |      Aplicação      | 
|--------------|---------------------|
| Node.js	   |  WebAPI Rest        | 
| Mongo DB     |  Banco de Dados     | 
| VSCode       |  Software de Código | 
| Node.js	   |  BackEnd            | 
| React JS     |  FrontEnd WEB       | 
| React Native |  FrontEnd Mobile    | 

## Documentação da Implementação da WEB API Rest

Na tabela abaixo, identificamos as rotas (ROUTES) criadas na API Node.JS para interagir com o banco de dados do MongoDB, com o objetivo de realizar as operações de CRUD.

|  OPERAÇÃO    |      ROUTES     | 
|--------------|-----------------|
| CREATE	   |  POST           | 
| READ         |  GET            | 
| UPDATE       |  PATCH          | 
| DELETE	   |  DELETE         | 

- **CREATE**: Criar Usuário
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/ed21bacc-8932-41dd-8944-2afffcc5fc03)
  
- **READ**: Visualizar Usuário
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/0d4fc80b-a976-4195-b528-edc05d3f0648)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/f698794a-b03f-4c3c-a738-cd76e8df73ac)
  
- **UPDATE**: Alterar Usuário
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/3456ccd4-db2f-45ab-bb2a-4c08188edc13)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/5cb9f51a-899f-4f71-a13b-5f4145c5fdaf)
  
- **DELETE**: Deletar Usuário
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/36c3ccfa-03e6-45b6-b9ca-2b7249fd86be)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/05345336-f550-4b56-8a20-f1db2875c8e4)



![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/28a7ab92-7faf-4985-b291-2604223f2a0d)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/75907302-bd83-4977-b246-6aa3bd3f8441)


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

A qualidade em diversas áreas é considerada fundamental para que possamos entregar melhor para nossos clientes e buscar menores custos. O conceito de qualidade pode ser desenvolvido através de diversas interpretações e com diferentes gerações de valores. Um conceito mais atual de qualidade é apresentado por (Maxim et Kessentini, 2016), onde a discussão proposta sobre qualidade está baseada em entrega de satisfação do cliente como também atender os requisitos dos produtos em conformidade.

No contexto de desenvolvimento de software, qualidade pode ser entendida como uma gestão de qualidade efetiva aplicada de modo a criar um produto útil que forneça valor mensurável para aqueles que o produzem e para aqueles que o utilizam, através da avaliação de qualidade dos requisitos funcionais e não funcionais d produto. (Pressman et Maxim,2020). Os autores propõe três pontos relevantes para a qualidade de software que são: gestão da qualidade efetiva, produto útil e agregar valor para fabricante e usuário.

Para avaliação da qualidade de software de nosso trabalho utilizaremos o modelo de qualidade ISO/IEC 25010, que é uma norma atualizada que define as características principais dos modelos de qualidade em uso e da qualidade de produtos. O primeiro modelo foca em modelos para utilizar o produto em um determinado contexto, e o segundo tem foco na natureza dinâmica e a estática dos sistemas de computador. Segundo (Pressman et Maxim,2020), as principais características dos modelos são:

**Modelo de Qualidade de uso**:
- Eficácia: Precisão e completude com as quais os usuários atingem suas metas;
- Eficiência: Recursos despendidos para atingir completamente os objetivos dos usuários com precisão;
- Satisfação: Utilidade, confiança, prazer e conforto;
- Ausência de Risco: Mitigação dos riscos econômicos, de saúde, de segurança e ambientais;
- Cobertura e contexto: Completude e flexibilidade.

**Qualidade de Produto**:
- Adequação funcional: Completo, correto e apropriado;
- Eficiência e desempenho: Tempestividade, utilização de recursos e capacidade;
- Compatibilidade: Coexistência, interoperabilidade;
- Usabilidade: Adequabilidade, facilidade de aprendizagem, operabilidade, proteção contra erros, estética e acessibilidade;
- Confiabilidade: Maturidade, disponibilidade, tolerância a falhas, facilidade de recuperação;
- Segurança: Confidencialidade, integridade, responsabilidade e autenticidade;
- Facilidade de manutenção: Modularidade, reusabilidade e modificabilidade e e testabilidade;
- Portabilidade: Adaptabilidade, instalabilidade e facilidade de substituição.
