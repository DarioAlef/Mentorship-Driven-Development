# Mentorship-Driven Development (MDD)

Um framework experimental que inverte a lógica do desenvolvimento assistido por IA: em vez de a IA escrever o código, ela atua como **Mentor Sênior** — guiando o aluno pelo Método Socrático para que ele mesmo construa, raciocine e aprenda.

---

## O problema que o MDD resolve

Ferramentas de IA generativa acceleram a entrega de código, mas podem comprometer o aprendizado profundo. O desenvolvedor que aceita código pronto sem entender cada decisão de design torna-se dependente da ferramenta e não internaliza os princípios que tornam o software sustentável.

O MDD existe para inverter esse fluxo: **a IA nunca escreve o código**. Ela pergunta, questiona, provoca e valida — e o aluno é quem pensa, decide e implementa.

---

## Como funciona

O MDD é estruturado em 4 skills encadeadas, cada uma com um papel preciso no ciclo de aprendizado:

```
/mdd-ideate → /mdd-challenge → [aluno implementa] → /mdd-hint (se travar) → /mdd-review
                                                                              ↓
                                                              Aprovado: próximo desafio
                                                              Reprovado: refatorar e revisar
```

### As 4 Skills

#### `/mdd-ideate` — Idealização Socrática

Antes de escrever qualquer linha, o Mentor guia o aluno na criação da `learning-spec.md` por meio de perguntas sobre regras de negócio, modelagem de domínio e edge cases. A spec só é consolidada quando o aluno tiver respondido todas as questões conceituais.

**O que o Mentor NUNCA faz aqui**: preencher a spec com suposições próprias ou sugerir requisitos que o aluno não mencionou.

#### `/mdd-challenge` — Quebra em Desafios Sequenciais

Com a spec em mãos, o Mentor gera o `sprint-challenge.md` — uma sequência de desafios que segue a ordem das camadas do Clean Architecture (domínio → use cases → adaptadores → refinamento). **Apenas um desafio é entregue por vez**, para não sobrecarregar o contexto cognitivo do aluno.

#### `/mdd-hint` — Desbloqueio Conceitual

Quando o aluno trava, ele chama `/mdd-hint` descrevendo onde está com dificuldade. O Mentor identifica o tipo de bloqueio (conceitual, técnico, de design ou de testes), fornece contexto teórico e uma pergunta análoga — mas **nunca a solução**.

#### `/mdd-review` — Code Review Implacável

Quando o aluno acredita que completou um desafio, o Mentor avalia o código contra:

- Os critérios de aceite do `sprint-challenge.md`
- As **9 regras do Object Calisthenics**
- Os princípios do **Clean Architecture**

O veredicto é binário: **APROVADO** (avança para o próximo desafio) ou **REVISÃO NECESSÁRIA** (refatorar e submeter novamente). Não há aprovação parcial.

---

## Padrões de qualidade exigidos

### Object Calisthenics (9 Regras)

| # | Regra |
|---|-------|
| 1 | Um nível de indentação por método |
| 2 | Não usar `else` |
| 3 | Encapsular todos os primitivos em Value Objects |
| 4 | Coleções de primeira classe |
| 5 | Um ponto por linha (Lei de Demeter) |
| 6 | Não abreviar nomes |
| 7 | Classes < 50 linhas, arquivos < 10 métodos |
| 8 | Máximo 2 variáveis de instância por classe |
| 9 | Sem getters/setters públicos |

### Clean Architecture

- **Regra da Dependência**: dependências sempre apontam para dentro (framework → adapter → use case → entity).
- **Separação de camadas**: Domain, Application, Interface Adapters e Infrastructure claramente delimitados.
- **Independência de framework**: lógica de negócio sem importações de bibliotecas de infraestrutura.

---

## Estrutura do repositório

```
.mdd/
├── init-options.json          # Configuração do framework MDD
├── integration.json           # Integração com o agente (Claude)
├── memory/
│   └── mentor-persona.md      # Regras absolutas do Mentor — lidas antes de cada resposta
├── templates/
│   ├── learning-spec.md       # Template de spec com seção obrigatória de Learning Goals
│   └── sprint-challenge.md    # Template de desafios sequenciais com critérios de aceite
├── integrations/              # Scripts de integração com diferentes agentes (Claude, Copilot, Agy)
└── scripts/                   # Scripts de infraestrutura do framework

.agent/
└── skills/
    ├── mdd-ideate/SKILL.md    # Skill de idealização socrática
    ├── mdd-challenge/SKILL.md # Skill de geração de desafios
    ├── mdd-hint/SKILL.md      # Skill de desbloqueio conceitual
    └── mdd-review/SKILL.md    # Skill de code review
```

---

## Fluxo de uso passo a passo

### 1. Inicie com a idealização

```
/mdd-ideate <descrição da feature que você quer construir>
```

O Mentor fará perguntas sobre regras de negócio, domínio e edge cases. Responda com suas próprias palavras. Ao final, o arquivo `learning-spec.md` será criado com base nas suas respostas.

### 2. Gere os desafios

```
/mdd-challenge
```

O Mentor lê sua spec e cria o `sprint-challenge.md`. Você recebe apenas o **Desafio 1**. Leia o contexto, reflita sobre as perguntas de raciocínio e comece a implementar.

### 3. Implemente — você, sem a IA escrevendo por você

Escreva o código. Cometa erros. Refatore. Este é o processo de aprendizado. O Mentor não escreverá uma linha sequer.

### 4. Se travar, peça uma dica

```
/mdd-hint <descreva onde está travado e o que já tentou>
```

Você receberá contexto teórico e uma pergunta que aponta para a direção certa — sem revelar a solução.

### 5. Submeta para revisão

```
/mdd-review
```

O Mentor analisa seu código contra todos os critérios. Se aprovado, recebe o próximo desafio. Se reprovado, recebe perguntas socráticas sobre cada violação encontrada — refatore e submeta novamente.

### 6. Repita até o sprint estar completo

Ao concluir todos os desafios, o Mentor faz as perguntas conceituais da `learning-spec.md` para confirmar que o aprendizado foi internalizado, não apenas executado.

---

## Filosofia

> "Tell me and I forget. Teach me and I remember. Involve me and I learn."
> — Benjamin Franklin

O MDD parte do pressuposto de que **código gerado não é código aprendido**. A resistência de ter que pensar, errar e refatorar é precisamente o mecanismo pelo qual o aprendizado profundo ocorre. O Mentor existe para tornar esse processo estruturado, seguro e progressivo — nunca para eliminá-lo.

---

## Pré-requisitos

- Claude Code (CLI) com suporte a skills em `.agent/skills/`
- Familiaridade básica com a linguagem de programação que você usará nos desafios
- Disposição para ser questionado ao invés de receber respostas prontas

---

## Contribuindo

Issues e PRs são bem-vindos. Se você criou um conjunto de desafios MDD para um domínio específico (ex: autenticação, CQRS, event sourcing), considere contribuir como um `preset` de `learning-spec` + `sprint-challenge`.
