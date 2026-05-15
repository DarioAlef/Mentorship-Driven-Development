# Learning Spec: Todo List com Docker e Postgres

**Feature Branch**: `001-todo-list-setup`
**Criado em**: 2026-05-15
**Status**: Rascunho
**Aluno**: Aluno
**Mentor**: Mentor Sênior MDD (Antigravity)

---

## Learning Goals (Objetivos de Aprendizado) *(obrigatório)*

### Conceitos que serão praticados

- **Conceito 1**: Persistência de dados com **Docker Volumes** (para que as tarefas "não se percam" ao reiniciar).
- **Conceito 2**: Relacionamentos SQL com **Foreign Keys** (para ligar "Subtarefas" às "Tarefas").
- **Conceito 3**: Validação de regras de negócio no domínio (impedir conclusão de tarefa com subtarefas pendentes).

### Habilidades que serão desenvolvidas

- Configurar um ambiente multi-container com Docker Compose (Postgres + App).
- Modelar um banco de dados relacional com dois níveis de hierarquia.
- Implementar fluxos de confirmação baseados no estado das entidades filhas.

### Perguntas que o aluno deve conseguir responder ao final

1. O que acontece com os dados do Postgres se o container for removido e não houver um volume configurado?
2. Como o banco de dados garante que uma subtarefa não fique "órfã" (sem uma tarefa pai)?
3. Por que a regra de "perguntar antes de concluir" deve estar no código e não apenas no banco de dados?

---

## Cenários do Usuário *(obrigatório)*

### Cenário 1 — Criar Tarefa e Subtarefa (Prioridade: P1)

O usuário deve conseguir criar uma tarefa com data e prazo, e vincular subtarefas a ela (apenas um nível de profundidade).

**Por que esta prioridade**: É a base do sistema; sem dados, não há o que persistir ou validar.

**Teste independente**: Criar uma tarefa via CLI/App e verificar se ela aparece na listagem do Postgres.

**Critérios de aceite**:

1. **Dado** que o sistema está iniciado, **Quando** eu crio uma tarefa com título e prazo, **Então** ela deve ser salva no banco.
2. **Dado** uma tarefa existente, **Quando** eu adiciono uma subtarefa, **Então** ela deve estar vinculada a essa tarefa pai.

---

## Cenário 2 — Conclusão com Validação (Prioridade: P1)

O usuário altera o status de uma tarefa entre "pendente" e "pronta". Se houver subtarefas pendentes, o sistema deve intervir.

**Por que esta prioridade**: Garante a integridade do fluxo de trabalho definido pelo aluno.

**Teste independente**: Tentar concluir uma tarefa que possui subtarefas em aberto e verificar se o sistema "pergunta" ou impede.

**Critérios de aceite**:

1. **Dado** uma tarefa com subtarefas pendentes, **Quando** eu tento marcá-la como "pronta", **Então** o sistema **deve perguntar** o que fazer.
2. **Dado** uma tarefa marcada como "pronta", **Quando** eu a marco como "pendente", **Então** ela deve voltar ao estado inicial com facilidade.

---

## Edge Cases

- **Reinício de Infraestrutura**: O que acontece quando o container do Postgres é parado e iniciado novamente? (Os dados devem "voltar com facilidade").
- **Indisponibilidade**: Como o sistema se comporta se o banco estiver fora do ar no momento do salvamento? `[PRECISA REVISÃO]`

---

## Requisitos Técnicos *(obrigatório)*

### Requisitos Funcionais

- **RF-001**: O sistema DEVE persistir tarefas e subtarefas no Postgres.
- **RF-002**: O sistema DEVE permitir apenas dois níveis de hierarquia (Tarefa -> Subtarefa).
- **RF-003**: O sistema DEVE validar se existem subtarefas pendentes antes de concluir uma tarefa.
- **RF-004**: O sistema DEVE garantir que os dados sobrevivam ao reinício dos containers.

### Entidades do Domínio

- **Tarefa**: Representa a unidade principal de trabalho. Atributos: título, status (pronta/pendente), data, prazo.
- **Subtarefa**: Unidade vinculada a uma Tarefa. Possui os mesmos estados, mas depende de um pai.

---

## Critérios de Sucesso *(obrigatório)*

### Resultados Mensuráveis

- **CS-001**: O aluno demonstra o `docker-compose.yml` com um volume configurado e funcional.
- **CS-002**: O aluno explica a query SQL que cria o relacionamento entre Tarefa e Subtarefa.
- **CS-003**: O código do domínio impede a conclusão de tarefas com filhos pendentes sem passar pela camada de aplicação.

### Critérios de Design (Object Calisthenics & Clean Architecture)

- [ ] Nenhuma classe possui mais de 50 linhas
- [ ] Nenhum método possui mais de 5 linhas
- [ ] Não há uso de `else`
- [ ] Primitivos encapsulados em Value Objects
- [ ] Camadas do Clean Architecture respeitadas

---

## Premissas e Restrições

- O ambiente deve ser obrigatoriamente orquestrado via Docker Compose.
- A persistência deve ser validada manualmente através da remoção/recriação dos containers.
