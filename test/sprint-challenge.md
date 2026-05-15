# Sprint Challenge: Todo List com Docker e Postgres

**Baseado em**: `learning-spec.md` de `todo-list-setup`
**Criado em**: 2026-05-15
**Aluno**: Aluno
**Status do Sprint**: Em Andamento

> **Regra do Sprint**: O Mentor entrega UM desafio por vez. O aluno só recebe o próximo desafio
> após o código do desafio atual ser aprovado no `/mdd-review`. Não avance sozinho.

---

## Desafio 1 — Modelagem do Coração do Sistema (Domínio)

**Contexto para o aluno**: Antes de pensarmos em containers ou bancos de dados, precisamos definir as regras do que estamos construindo. Este é o "cérebro" da sua aplicação, onde as regras de negócio vivem isoladas de qualquer tecnologia externa.

**O que você deve construir**:

Implemente as entidades `Tarefa` e `Subtarefa`. Uma tarefa deve ter um título, um status (pendente/concluída), uma data de criação e um prazo. Ela também pode conter uma lista de subtarefas vinculadas.

**Perguntas que devem guiar seu raciocínio antes de escrever qualquer linha**:

1. Como você representaria o status (Pendente/Concluída) sem usar um tipo primitivo como `string` ou `boolean`?
2. Como a entidade `Tarefa` deve se comportar se tentarmos marcá-la como concluída mas ela ainda possuir subtarefas pendentes? Onde essa regra deve morar?
3. Como você garante, via código, que uma `Subtarefa` nunca tenha "netos" (mantendo apenas os dois níveis definidos na spec)?

**Critérios de Aceite** (o Mentor verificará cada item):

- [ ] CA-01: As classes `Tarefa` e `Subtarefa` não utilizam tipos primitivos diretamente para representar conceitos do domínio (ex: Status, Data, Título).
- [ ] CA-02: Existe uma regra de domínio que impede a conclusão de uma tarefa com filhos pendentes.
- [ ] CA-03: Não há uso de `else` em nenhum lugar da lógica.
- [ ] CA-04: Cada método possui apenas um nível de indentação.
- [ ] CA-05: Existe pelo menos um teste unitário para a regra de validação de conclusão.

**Referências de estudo**:

- Object Calisthenics: "Encapsulate all primitives and strings".
- Clean Architecture: "The Entities layer".

**Desbloqueio**: Rode `/mdd-review` quando acreditar que este desafio está completo.

---

## Desafio 2 — Orquestração de Fluxo (Use Cases)

> **BLOQUEADO** — Disponível apenas após aprovação do Desafio 1.

**Contexto para o aluno**: Agora que temos as entidades, precisamos de alguém para comandar as ações: "Crie uma tarefa", "Conclua uma tarefa". Esta camada orquestra as entidades e decide como os dados fluem.

**O que você deve construir**:

Crie os casos de uso para criar uma tarefa e concluir uma tarefa. Lembre-se da regra de que o sistema "deve perguntar" ao usuário o que fazer se houver pendências.

**Perguntas que devem guiar seu raciocínio**:

1. Se o Use Case precisar salvar a tarefa, ele deve conhecer o Postgres? Como ele pede para alguém salvar sem saber "quem" ou "como"?
2. Como o Use Case lida com a resposta do domínio se a validação de conclusão falhar?

**Critérios de Aceite**:

- [ ] CA-01: O Use Case não importa nada do Docker, Postgres ou bibliotecas externas.
- [ ] CA-02: A comunicação com o "salvamento" é feita via uma interface (Porta).
- [ ] CA-03: O fluxo de "perguntar ao usuário" é sinalizado corretamente pelo Use Case.

---

## Desafio 3 — Persistência e Infraestrutura (Docker & Postgres)

> **BLOQUEADO** — Disponível apenas após aprovação do Desafio 2.

**Contexto para o aluno**: Chegou a hora do que você pediu! Vamos configurar o Docker Compose, subir o Postgres e garantir que seus dados "voltem com facilidade" mesmo se o container for destruído.

**O que você deve construir**:

O arquivo `docker-compose.yml` configurado com Postgres e um volume de persistência. Além disso, implemente o adaptador que de fato conversa com o banco de dados.

**Perguntas que devem guiar seu raciocínio**:

1. O que acontece com os dados no seu computador quando o container do Postgres é parado? E quando ele é removido (`down`)?
2. Como você mapeia as entidades do seu domínio para as tabelas do Postgres no seu adaptador?

**Critérios de Aceite**:

- [ ] CA-01: O arquivo `docker-compose.yml` possui um `volume` configurado para o Postgres.
- [ ] CA-02: O sistema consegue salvar e recuperar uma tarefa do banco real.
- [ ] CA-03: Ao dar `docker-compose down` e `up`, as tarefas criadas anteriormente continuam lá.

---

## Desafio Final — Refatoração e Consolidação

> **BLOQUEADO** — Disponível apenas após aprovação de todos os desafios anteriores.

**O que você deve fazer**:

Revise todo o código. Verifique se respeitou as 9 regras do Object Calisthenics e se a separação de camadas está clara.

---

## Registro de Progresso

| Desafio | Status | Data de Aprovação | Observações do Mentor |
|---------|--------|-------------------|-----------------------|
| Desafio 1 | Pendente | — | — |
| Desafio 2 | Bloqueado | — | — |
| Desafio 3 | Bloqueado | — | — |
| Desafio Final | Bloqueado | — | — |
