# Learning Spec: [NOME DA FEATURE]

**Feature Branch**: `[###-feature-name]`
**Criado em**: [DATE]
**Status**: Rascunho
**Aluno**: [NOME]
**Mentor**: MDD Mentor (Claude)

---

## Learning Goals (Objetivos de Aprendizado) *(obrigatório)*

<!--
  Esta seção é exclusiva do MDD. Antes de qualquer requisito técnico,
  o aluno e o mentor alinham o que será aprendido com esta feature.
  Responda: o que o aluno deve ser capaz de explicar e demonstrar ao final?
-->

### Conceitos que serão praticados

- **Conceito 1**: [ex: "Criar Value Objects imutáveis para encapsular primitivos"]
- **Conceito 2**: [ex: "Aplicar a Regra da Dependência do Clean Architecture"]
- **Conceito 3**: [ex: "Escrever testes unitários sem dependências externas"]

### Habilidades que serão desenvolvidas

- [ex: "Modelar domínio sem vazar detalhes de infraestrutura"]
- [ex: "Decompor um use case em responsabilidades coesas"]
- [ex: "Identificar e eliminar violações de Object Calisthenics"]

### Perguntas que o aluno deve conseguir responder ao final

1. [ex: "Por que esta entidade não pode depender diretamente do repositório?"]
2. [ex: "Que regra do Object Calisthenics seria violada se usássemos um getter aqui?"]
3. [ex: "Como você testaria esta lógica de negócio sem subir o banco de dados?"]

---

## Cenários do Usuário *(obrigatório)*

<!--
  Descreva as jornadas do usuário em linguagem natural, priorizadas por impacto.
  Cada cenário deve ser testável de forma independente.
-->

### Cenário 1 — [Título Breve] (Prioridade: P1)

[Descreva esta jornada do usuário em linguagem natural]

**Por que esta prioridade**: [Explique o valor e a razão desta prioridade]

**Teste independente**: [Como este cenário pode ser verificado isoladamente]

**Critérios de aceite**:

1. **Dado** [estado inicial], **Quando** [ação], **Então** [resultado esperado]
2. **Dado** [estado inicial], **Quando** [ação], **Então** [resultado esperado]

---

### Cenário 2 — [Título Breve] (Prioridade: P2)

[Descreva esta jornada do usuário em linguagem natural]

**Por que esta prioridade**: [Explique o valor e a razão desta prioridade]

**Teste independente**: [Como este cenário pode ser verificado isoladamente]

**Critérios de aceite**:

1. **Dado** [estado inicial], **Quando** [ação], **Então** [resultado esperado]

---

[Adicione mais cenários conforme necessário]

### Edge Cases

- O que acontece quando [condição de borda]?
- Como o sistema deve se comportar em [cenário de erro]?

---

## Requisitos Técnicos *(obrigatório)*

<!--
  Requisitos funcionais derivados dos cenários acima.
  Devem ser agnósticos de tecnologia — sem mencionar frameworks ou bibliotecas.
-->

### Requisitos Funcionais

- **RF-001**: O sistema DEVE [capacidade específica]
- **RF-002**: O sistema DEVE [capacidade específica]
- **RF-003**: O usuário DEVE ser capaz de [interação principal]
- **RF-004**: O sistema DEVE [requisito de dados]
- **RF-005**: O sistema DEVE [comportamento esperado]

### Entidades do Domínio *(incluir se a feature envolve dados)*

- **[Entidade 1]**: [O que representa, atributos principais sem detalhes de implementação]
- **[Entidade 2]**: [O que representa, relacionamentos com outras entidades]

---

## Critérios de Sucesso *(obrigatório)*

### Resultados Mensuráveis

- **CS-001**: [Métrica mensurável, ex: "O aluno cria a entidade sem usar tipos primitivos expostos"]
- **CS-002**: [Métrica mensurável, ex: "Os testes passam sem dependências de banco de dados"]
- **CS-003**: [Métrica de design, ex: "Nenhuma classe possui mais de 2 variáveis de instância"]

### Critérios de Design (Object Calisthenics & Clean Architecture)

- [ ] Nenhuma classe possui mais de 50 linhas
- [ ] Nenhum método possui mais de 5 linhas
- [ ] Não há uso de `else` (substituir por Early Return ou polimorfismo)
- [ ] Primitivos encapsulados em Value Objects
- [ ] Camadas do Clean Architecture respeitadas (sem dependências de fora para dentro)

---

## Premissas e Restrições

- [ex: "A persistência de dados está fora do escopo deste desafio"]
- [ex: "O aluno deve usar a linguagem X, mas sem frameworks de terceiros"]
- [ex: "A solução deve ser testável com testes unitários puros"]
