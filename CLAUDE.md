# Grupo T&M — Site Institucional

Site de marketing B2B do Grupo T&M, empresa de confecção própria de uniformes e brindes corporativos com soluções de logística e tecnologia. Sede em Brusque, SC. Contato: contato@temgrupo.com.br

## Estrutura do projeto

Site estático em HTML puro — sem framework, sem build step.

```
temgrupo-site/
├── index.html                  ← home
├── operacao-eventos.html       ← landing page: Operação de Loja em Eventos
├── armazenamento-envio.html    ← landing page: Armazenamento & Envio sob Demanda
├── ecommerce.html              ← landing page: Criação & Gestão de E-commerce (a fazer)
├── plataforma-b2b.html         ← landing page: Plataforma B2B para Redes (a fazer)
└── CLAUDE.md
```

## Deploy

- Repositório: https://github.com/humbertodvigo/temgrupo-site
- Hospedagem: Vercel — deploy automático a cada `git push` na branch `main`
- URL: temgrupo-site.vercel.app

Após criar ou editar qualquer arquivo, rodar:
```bash
git add .
git commit -m "descrição do que mudou"
git push
```

## Design system — seguir sempre

**Cores:**
- Azul principal: `#0047BB`
- Azul escuro: `#001E60`
- Azul hover: `#0052D4`
- Azul sutil (backgrounds): `#EEF3FC`
- Fundo branco: `#FFFFFF`
- Fundo cinza claro: `#F8F9FC`
- Fundo cinza médio: `#F2F4F9`
- Borda: `#E4E8F2`
- Texto principal: `#191C28`
- Texto corpo: `#48506A`
- Texto muted: `#8792AA`
- Fundo escuro (seções especiais): `#0C0F1A`

**Tipografia:**
- Display/títulos: `Playfair Display` — serif, peso 700, itálico para destaques em azul
- Corpo: `DM Sans` — pesos 300 (texto corrido), 500 (labels), 600 (botões), 700 (títulos menores)
- Importar sempre via Google Fonts

**Padrão visual geral:**
- Fundo branco com seções alternando `--white` e `--bg` (#F8F9FC)
- Seções especiais (dashboard, reframe) em fundo escuro `#0C0F1A`
- Bordas finas `1px solid #E4E8F2` em todos os cards
- Border-radius: `8px` botões, `12-16px` cards grandes
- Sombras discretas: `0 4px 24px rgba(0,0,0,0.05)`
- Nav fixa com `backdrop-filter: blur(12px)` e altura 62px
- Scroll reveal: `opacity 0 → 1` com `transform translateY(20px → 0)`, delay escalonado

**Referência visual:** Linear, Vercel, Rippling, Deel — B2B enterprise limpo, não agência criativa.

## Estrutura padrão de cada landing page

Todas as landing pages seguem esta sequência:
1. **Nav** — logo + "← Início" + breadcrumb da página + CTA
2. **Hero** — headline em Playfair Display, sub em DM Sans, painel visual à direita com mock/dados, logos de clientes confiantes
3. **Logos bar** — clientes relevantes para aquela solução
4. **Problema** — 3-4 dores específicas do perfil-alvo + card visual antes/depois
5. **Como funciona** — 3-4 passos lineares
6. **Destaque da solução** — seção escura com features + mock do sistema (quando aplicável)
7. **Cases** — QuintoAndar, RD Summit, Gupy, Fleming, PSG Academy (usar os relevantes)
8. **Oferta / diferenciais** — por que T&M
9. **Formulário de contato** — com campos qualificadores específicos da solução
10. **Footer** — links para outras soluções

## Cases reais disponíveis

- **RD Summit 2024** — 2.500+ vendas em 3 dias, 2.000 peças de staff, loja física + online, designer Levi Pedroso. Vídeo: https://www.youtube.com/watch?v=zGabrAYh7JE
- **Gupy HR4 Results 2025** — loja oficial + hub de distribuição de kits. Vídeo: https://www.youtube.com/watch?v=BMO_JX90RUM
- **PSG Academy** — 3 edições consecutivas (Salvador 2022, Porto Alegre 2023). Vídeo: https://www.youtube.com/watch?v=Z2HcXbib3OU
- **Rede Fleming** — 17 unidades, 1.300+ produtos no 1º semestre, 5 dígitos em royalties, e-commerce gerenciado
- **QuintoAndar** — 800+ envios para colaboradores remotos
- **Wizard** — rede nacional de franquias, reposição contínua
- **Outros:** Cora, Farmácia São João, Booyah, Tecnoshow

## Soluções do portfólio

1. **Uniformes e Brindes** — produto base, confecção própria
2. **Armazenamento & Envio sob Demanda** — CD em Brusque SC, painel envios.temgrupo.com.br
3. **Operação de Loja em Eventos** — 360°, 3 modelos comerciais (risco compartilhado / operação completa / fee 16-20%)
4. **Criação & Gestão de E-commerce** — D2C e B2B, integrado ao fulfillment
5. **Plataforma B2B para Redes/Franquias** — portal white-label para franqueados

## Regras de copy

- Falar sempre com o **resultado**, não com o processo interno
- Perfil-alvo por solução: RH (envio), Organizador de eventos (loja eventos), Gestor de rede/franquia (B2B)
- Headline sempre em Playfair com `<em>` em azul para o gancho emocional
- Nunca usar: "soluções 360°", "da criação à entrega", "inovação", "excelência"
- Seção de problema sempre antes da solução — o visitante precisa se reconhecer na dor primeiro
- Formulários com campos qualificadores específicos (não formulário genérico)
- CTA principal: "Solicitar proposta →" ou "Agendar demonstração →"

## O que NÃO fazer

- Não usar fundo preto dominante no hero (reservar para seções específicas)
- Não usar Bebas Neue (foi descartado — muito streetwear)
- Não usar Inter ou Roboto
- Não criar páginas sem o padrão de nav com "← Início"
- Não inventar dados ou cases — usar apenas os listados acima
- Não criar formulários genéricos — cada página tem campos específicos