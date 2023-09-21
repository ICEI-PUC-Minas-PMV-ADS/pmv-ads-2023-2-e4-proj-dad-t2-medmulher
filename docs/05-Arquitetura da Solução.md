# Arquitetura da Solução

A arquitetura da nossa aplicação seguirá o estilo arquitetural baseado em serviços, onde teremos três componentes básicos: a interface do usuário, os serviços e o banco de dados.

O front-end da aplicação web será desenvolvido com CSS, React e JavaScript, enquanto a aplicação mobile será desenvolvida usando React Native. Ambas compartilharão um único back-end, que será desenvolvido em Node.js, e utilizarão três bancos de dados construídos no MongoDB.


![Diagrama de blocos - v2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/89920953/838074e7-697d-4500-b9ea-1278879c072e)


## Diagrama de Classes

No diagrama de classes do projeto MedMulher, este seguirá a estrutura da arquitetura cliente-servidor, na qual o servidor fornece serviços aos clientes por meio da marcação de consultas. Essas consultas podem ser realizadas tanto pelo aplicativo móvel quanto pelo aplicativo desktop, contanto que estejam conectados à Internet. A seguir, encontram-se os diagramas Web e Mobile, respectivamente.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t2-medmulher/assets/103009155/788fee4c-4b2d-404c-8b8b-ed6afd257aa9)


## Documentação do Banco de Dados Não Relacional

### Esquema Chave-Valor
```
{
    "_id": UsuarioId("012980123324312"),
    "name": "Helena Rodrigues",
    "cpf": "01234567891",
    "address": "Rua Conde de Linhares, 2023, Bairro Cidade Jardim, Belo Horizonte, Minas Gerais",
    "email": "helenarodrigues07@gmail.com",
    "password": "pucminasvirtual"
    "created_date": "2023-09-21T01:19:50.701Z"
    "update_user_date": "2023-09-21T01:20:22.34IZ"
}

{
    "_id" : MedicoId("012980123322134"),
    "nomeMedico" : "Cristina Mourão de Assis",
    "especialidade" : "Ginecologista",
    "dataConsulta" : "10/12/2023"
}

{
    "_id" : ConsultaId("012980123320129"),
    "nomeMedico" : "Cristina Mourão de Assis",
    "especialidade" : "Ginecologista",
    "estadoSaude" : "mediano",
    "sintomas" : "Cólica menstrual",
    "observacao" : "Menstruação intensa",
    "dataConsulta": "10/12/2023"
}

{
    "_id" : AdministradorId("012980123321233"),
    "nomeAdministrador" : "Marta Koffman Hills"
}
```

## Tecnologias Utilizadas

A linguagem de programação JavaScript, atrelado a biblioteca React Native e React JS, juntamente com o framework e Node.js foram escolhidas para a aplicação porque a combinação dessas ferramentas e tecnologias permitem criar uma aplicação robusta e escalável, permitindo assim, lidar com um número crescente de clientes ou usuários

|  Linguagem  |      Aplicação      | 
|--------------|---------------------|
| Node.js	   |  WebAPI Rest        | 
| Mongo DB     |  Banco de Dados     | 
| VSCode       |  Software de Código | 
| Node.js	   |  BackEnd            | 
| React JS     |  FrontEnd WEB       | 
| React Native |  FrontEnd Mobile    | 

![image](img/Tecnologias1.png)

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
