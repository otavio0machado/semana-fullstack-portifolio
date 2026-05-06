# Semana React · landing study case

Landing fictícia para um **evento educacional gratuito de React de 7
noites no YouTube**, ao estilo Imersão Alura ou NextLevelWeek da Rocketseat,
mas sem o teatro de funil de vendas. Este repositório é um **study case**
para portfolio — não há evento real, canal no YouTube, ou inscrições por
trás.

## Sobre este study case

A versão original do repo era uma **squeeze page Hotmart-style**
clássica: barra vermelha "VAGAS PARA A TURMA GRATUITA ESTÃO ENCERRANDO",
hero "Domine o React e o Mercado de Trabalho em 7 Dias", countdown timer
**fixo em 5 dias do agora** (countdown fake — recarrega a página, é
sempre 5 dias), botão gigante "GARANTIR MINHA VAGA" pulsante, modal de
confirmação após capturar e-mail, links de Termos/Privacidade `#` mortos.
O package se chama literalmente `semana-do-fullstack---squeeze-page`.

O exercício foi pegar o formato de squeeze page de info-produto e
**inverter cada gatilho de pseudo-urgência** sem mudar a estrutura
técnica, mantendo um evento educacional plausível e honesto:

- **Countdown**: deixa de ser auto-5-dias e passa a ler uma data fixa
  do `EVENT.startDate` (19/10/2026, 20h BRT). Quando passa da data,
  mostra "Ao vivo agora" com link pra YouTube. Quando passa do fim,
  mostra "Edição encerrada — gravações no canal".
- **Warning bar**: deixa de ser "vagas encerrando" (não há vagas em
  YouTube live) e passa a ser **convite** — "também é aberto no canal,
  não precisa se inscrever".
- **Hero**: "Domine o React em 7 Dias" → "Sete noites pra entender
  React. Uma hora cada, ao vivo no YouTube" + parágrafo explícito
  dizendo que **não** se aprende React em 7 horas, e que o resto vem
  com prática individual no repositório público.
- **Form**: "GARANTIR MINHA VAGA" → "Receber lembrete" (Bell icon).
  Texto explícito de que é **um e-mail por noite, sete no total**,
  e que a base é apagada no dia 26/10. Sem newsletter, sem RD/AC/MC.
- **Agenda**: nova seção. **Cada uma das 7 noites** com data, dia
  da semana, horário, título da aula, 4 bullets do que cabe na hora,
  e nome do instrutor. Anti-"projeto surpresa".
- **Instrutores**: nova seção. 3 pessoas com nome, especialidade
  específica e link pro GitHub.
- **ShareSection**: deixa de ser modal "Espalhe a Palavra" com 3
  redes sociais e vira um card único declarando que **o repositório
  com o código de cada noite é público antes do evento começar**.
  Anti-"material exclusivo".
- **Footer**: links Termos/Privacidade `#` mortos → links reais (GitHub
  do código, canal YouTube, página LGPD com base legal de coleta de
  e-mail e política de exclusão).
- **Página `/lgpd.html`** dedicada explicando exatamente o que
  acontece com o e-mail (sem newsletter, sem terceiros, base apagada
  no dia 26/10, exclusão antecipada respondendo "sair").

## Estrutura

| Seção | Por quê |
| ---- | ---- |
| WarningBar | "Aberto no YouTube, não precisa se inscrever" — convite, não pseudo-urgência |
| Hero | Promessa honesta, com expectativa do que cabe em 7 horas |
| Countdown | Lê data fixa do `EVENT.startDate`, com 3 estados (before/live/ended) |
| OptInForm | Lembrete por e-mail explícito como opcional, base efêmera |
| Schedule | 7 noites, cada com agenda detalhada e instrutor |
| Instructors | 3 pessoas com GitHub, sem foto stock |
| ShareSection | Repositório de código público antes do evento começar |
| Footer | Sobre o evento + 3 links reais (GitHub, YouTube, LGPD) |

## Decisões de design

- **Paleta technical-doc** (off-black `#0E0F11`, chalk `#F4EFE6`, react
  `#61DAFB` — a cor oficial da logo React), com clay `#C45A2C` para
  estados de erro. Sem vermelho-urgência `#dc2626` que dominava antes.
- **Tipografia dupla**: *Inter* para corpo + *JetBrains Mono* para
  números do countdown, etiquetas mono e bloco de agenda — sensação
  de documentação técnica, não de funil de vendas.
- **Sem `animate-shake`** no input de erro (era pra fingir falha
  emocional do usuário). Erro é mostrado em texto pequeno discreto.
- **Sem botão pulsante** com `shadow-[0_0_60px_-10px_rgba(220,38,38,0.7)]`.
  CTA é sólido bege, sem brilho.
- **Sem modal "INSCRIÇÃO CONFIRMADA"** com gradiente verde + emoji
  ⚠️ pedindo pra olhar Spam. Sucesso é uma caixa inline pequena
  com uma frase explicativa.
- **Restrição de ícones**: 6 ícones funcionais (Youtube, Bell, Github,
  CheckCircle2, AlertCircle, Loader2). Removidos: TriangleAlert (warning
  bar fake), Calendar (badge), Lock (footer), Twitter/Facebook/Linkedin
  (share modal), Code2/Terminal (logo), ArrowRight, Share2, X.

## Stack

`React 19` · `TypeScript` · `Vite 6` · `Tailwind via CDN` · `lucide-react`

## Rodar local

```bash
npm install
npm run dev
```

Vite roda em `http://localhost:3000`.

## Aviso

Todo o conteúdo deste site — Semana React, edição 03 de outubro de
2026, datas das 7 noites, instrutores Otávio Machado / Renata Yano /
Caio Petrenko com handles GitHub, agenda detalhada de cada noite,
canal YouTube `@semanareact`, números de inscrição (4.127 nesta
edição, 2.890 na anterior), página LGPD com data de exclusão da
base — é **fictício**. Foi escrito pra parecer plausível como evento
educacional gratuito brasileiro estilo Imersão/Rocketseat, e não
tem qualquer pretensão de induzir cadastro. O repositório
`github.com/otavio0machado/semana-react` referenciado também não
existe — é parte do exercício.
