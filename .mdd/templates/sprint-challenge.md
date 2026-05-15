---
description: "Sprint Challenge — desafios sequenciais para o aluno no MDD"
---

# Sprint Challenge: [NOME DA FEATURE]

**Baseado em**: `learning-spec.md` de `[###-feature-name]`
**Criado em**: [DATE]
**Aluno**: [NOME]
**Status do Sprint**: Em Andamento

> **Regra do Sprint**: O Mentor entrega UM desafio por vez. O aluno só recebe o próximo desafio
> após o código do desafio atual ser aprovado no `/mdd-review`. Não avance sozinho.

---

## Desafio 1 — [Título do Desafio] (Fundação do Domínio)

**Contexto para o aluno**: [Explique brevemente o que o aluno vai construir e por que esta é a primeira peça]

**O que você deve construir**:

> [Descrição em linguagem natural do que o aluno deve implementar — SEM código, SEM pseudocódigo, SEM exemplos de solução]

**Perguntas que devem guiar seu raciocínio antes de escrever qualquer linha**:

1. [ex: "Quais conceitos precisam ser representados como entidades do domínio?"]
2. [ex: "Quais destes conceitos são Value Objects versus Entities?"]
3. [ex: "Como você testaria este comportamento sem instanciar nada de infraestrutura?"]

**Critérios de Aceite** (o Mentor verificará cada item):

- [ ] CA-01: [ex: "A classe `[Nome]` não expõe nenhum tipo primitivo diretamente"]
- [ ] CA-02: [ex: "Existe pelo menos um teste unitário para cada regra de negócio"]
- [ ] CA-03: [ex: "Nenhum método possui mais de 5 linhas"]
- [ ] CA-04: [ex: "Nenhuma violação das 9 regras do Object Calisthenics"]
- [ ] CA-05: [ex: "O aluno consegue explicar cada decisão de design sem consultar o Mentor"]

**Referências de estudo** (sem olhar a resposta — foque nos conceitos):

- [ex: "Capítulo X de 'Domain-Driven Design' — Eric Evans"]
- [ex: "Object Calisthenics — Jeff Bay (The ThoughtWorks Anthology)"]

**Desbloqueio**: Rode `/mdd-review` quando acreditar que este desafio está completo.

---

## Desafio 2 — [Título do Desafio] (Use Case / Lógica de Aplicação)

> **BLOQUEADO** — Disponível apenas após aprovação do Desafio 1.

**Contexto para o aluno**: [Explique o que será construído neste desafio e como conecta ao anterior]

**O que você deve construir**:

> [Descrição em linguagem natural]

**Perguntas que devem guiar seu raciocínio**:

1. [ex: "Quem é responsável por orquestrar esta operação — a entidade ou um Use Case?"]
2. [ex: "Que porta (interface) este Use Case precisa para acessar dados sem depender de infraestrutura?"]
3. [ex: "Como você garantiria que esta lógica está correta sem um banco de dados rodando?"]

**Critérios de Aceite**:

- [ ] CA-01: [ex: "O Use Case não importa nenhuma classe de framework ou biblioteca externa"]
- [ ] CA-02: [ex: "A dependência com o repositório é feita via interface (porta), não implementação concreta"]
- [ ] CA-03: [ex: "Existe teste de unidade para o fluxo principal e ao menos um edge case"]
- [ ] CA-04: [ex: "Nenhuma violação das 9 regras do Object Calisthenics"]

**Referências de estudo**:

- [ex: "'Clean Architecture' — Robert C. Martin, Capítulo sobre Use Cases"]

**Desbloqueio**: Rode `/mdd-review` quando acreditar que este desafio está completo.

---

## Desafio 3 — [Título do Desafio] (Interface / Adaptador)

> **BLOQUEADO** — Disponível apenas após aprovação do Desafio 2.

**Contexto para o aluno**: [Explique o adaptador que será construído e sua posição na arquitetura]

**O que você deve construir**:

> [Descrição em linguagem natural]

**Perguntas que devem guiar seu raciocínio**:

1. [ex: "Este adaptador deve conhecer as regras de negócio? Por quê?"]
2. [ex: "Que transformações de dados são necessárias entre a camada de interface e o Use Case?"]
3. [ex: "Como você testaria este adaptador com um Use Case falso (test double)?"]

**Critérios de Aceite**:

- [ ] CA-01: [ex: "O adaptador não contém lógica de negócio — apenas tradução de dados e orquestração"]
- [ ] CA-02: [ex: "O Use Case é injetado via construtor (injeção de dependência)"]
- [ ] CA-03: [ex: "Existe teste de integração cobrindo o fluxo ponta a ponta deste adaptador"]
- [ ] CA-04: [ex: "Nenhuma violação das 9 regras do Object Calisthenics"]

**Referências de estudo**:

- [ex: "'Clean Architecture' — Robert C. Martin, Capítulo sobre Adapters"]

**Desbloqueio**: Rode `/mdd-review` quando acreditar que este desafio está completo.

---

[Adicione mais desafios conforme a complexidade da feature — cada um focando em uma camada ou responsabilidade diferente]

---

## Desafio Final — Refatoração e Consolidação

> **BLOQUEADO** — Disponível apenas após aprovação de todos os desafios anteriores.

**O que você deve fazer**:

Revise todo o código produzido durante o sprint. Sem adicionar novas funcionalidades, refatore para:

1. Eliminar qualquer duplicação de lógica identificada.
2. Garantir que os nomes expressam claramente a intenção (sem abreviações).
3. Verificar que cada classe tem uma única responsabilidade bem definida.
4. Confirmar que a cobertura de testes atinge todos os critérios de aceite da `learning-spec.md`.

**Critérios de Aceite Finais**:

- [ ] Todos os testes passam sem modificação.
- [ ] Nenhuma violação remanescente de Object Calisthenics.
- [ ] Todas as camadas do Clean Architecture estão corretamente separadas.
- [ ] O aluno consegue apresentar o design completo ao Mentor e responder as perguntas da `learning-spec.md`.

---

## Registro de Progresso

| Desafio | Status | Data de Aprovação | Observações do Mentor |
|---------|--------|-------------------|-----------------------|
| Desafio 1 | Pendente | — | — |
| Desafio 2 | Bloqueado | — | — |
| Desafio 3 | Bloqueado | — | — |
| Desafio Final | Bloqueado | — | — |
