GymLog: A Sua Ficha de Treino Digital
Integrantes do Grupo

Leonardo Antonio da Silva

Gabriel Gaioti Pinto

Otavio Augusto

1. Sobre o Projeto


Problema a Ser Resolvido

Frequentadores de academia, especialmente iniciantes e intermediários, muitas vezes dependem de fichas de treino em papel ou anotações desorganizadas no telemóvel. Isto torna difícil acompanhar o progresso, lembrar as cargas corretas para cada exercício e visualizar a rotina do dia, o que pode levar à desmotivação e a treinos menos eficientes.

Solução Proposta

O GymLog funciona como uma ficha de treino digital e inteligente. Ele permite que o utilizador cadastre os seus treinos (ex: Treino A, B, C) e os exercícios correspondentes, incluindo informações como séries, repetições e a última carga utilizada. Ao chegar na academia, o utilizador pode simplesmente abrir a aplicação, selecionar o treino do dia e seguir a lista de exercícios, atualizando as cargas conforme progride e garantindo um acompanhamento preciso da sua evolução.

Justificativa Pessoal

Como praticantes de musculação, sentimos na pele a dificuldade de gerir a nossa evolução. Muitas vezes, chegamos para treinar sem lembrar exatamente qual foi a carga que usámos na semana anterior num determinado exercício. Ter uma aplicação simples para registar e consultar estas informações diretamente no telemóvel tornará os nossos treinos mais produtivos e ajudar-nos-á a visualizar claramente o nosso progresso, servindo como uma grande fonte de motivação.

2. Diagrama Entidade-Relacionamento (DER) da API

A estrutura de dados da API foi modelada para ser simples e eficiente, focada no relacionamento entre utilizadores e os seus respetivos exercícios.

Tabela: usuarios
| Coluna | Tipo | Descrição |
| :--- | :--- | :--- |
| id | INT (PRIMARY KEY) | Identificador único do utilizador |
| nome | VARCHAR | Nome do utilizador |
| email | VARCHAR | E-mail de login (único) |
| senha | VARCHAR | Senha (armazenada com hash) |

Tabela: exercicios
| Coluna | Tipo | Descrição |
| :--- | :--- | :--- |
| id | INT (PRIMARY KEY) | Identificador único do exercício |
| nome | VARCHAR | Nome do exercício (Ex: Supino Reto) |
| carga | DECIMAL | Carga utilizada em kg (Ex: 25.5) |
| series | INT | Número de séries (Ex: 4) |
| repeticoes | VARCHAR | Repetições (Ex: "10-12") |
| letra_treino | CHAR(1) | Agrupador do treino (Ex: 'A', 'B', 'C') |
| usuario_id | INT (FOREIGN KEY) | Liga o exercício ao id da tabela usuarios |

3. Estrutura de Pastas do Projeto
O projeto segue uma estrutura de monorepo, contendo a API e a aplicação front-end no mesmo repositório para facilitar o desenvolvimento e o versionamento.

/Projeto-gymlog
│
├── /api/           # Código da API em Node.js
│   └── /src
│       ├── /controllers
│       ├── /routes
│       └── /services
│   └── package.json
│
├── /app/           # Código do Aplicativo em React Native
│   └── /GymLogApp
│       ├── /src
│       │   └── /screens
│       ├── App.tsx
│       └── package.json
│
├── /.github/       # Workflows de CI/CD (GitHub Actions)
│
├── .gitignore
│
└── README.md       # Este ficheiro

<img width="485" height="1011" alt="image" src="https://github.com/user-attachments/assets/5222e1c7-f0e3-4232-bacb-7a7e5427d476" />

<img width="488" height="1006" alt="image" src="https://github.com/user-attachments/assets/15935bd8-28cb-4bd7-8318-291266ac6b2f" />

<img width="488" height="1016" alt="image" src="https://github.com/user-attachments/assets/b07e3542-4dbf-4415-91bd-32056bb87666" />



