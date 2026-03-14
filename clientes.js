/**
 * clientes.js — Fonte única de logos de clientes T&M
 *
 * Para adicionar um cliente:
 *   1. Adicione o objeto abaixo
 *   2. Coloque o arquivo de logo em /logos/ (SVG ou PNG, versão escura para fundo claro)
 *   3. Preencha o campo logo com o caminho, ex: 'logos/quintoandar.svg'
 *
 * Os logos aparecem automaticamente em todas as páginas que chamam renderClientes().
 */

const CLIENTES_TM = [
  {
    id: 'quintoandar',
    nome: 'QuintoAndar',
    logo: '',           // ex: 'logos/quintoandar.svg'
    url: '',
    destaque: true,     // aparece no hero da home e nas landing pages
  },
  {
    id: 'gupy',
    nome: 'Gupy',
    logo: '',
    url: '',
    destaque: true,
  },
  {
    id: 'rd-summit',
    nome: 'RD Summit',
    logo: '',
    url: '',
    destaque: true,
  },
  {
    id: 'rede-fleming',
    nome: 'Rede Fleming',
    logo: '',
    url: '',
    destaque: true,
  },
  {
    id: 'psg-academy',
    nome: 'PSG Academy',
    logo: '',
    url: '',
    destaque: true,
  },
  {
    id: 'wizard',
    nome: 'Wizard',
    logo: '',
    url: '',
    destaque: true,
  },
  {
    id: 'farmacia-sao-joao',
    nome: 'Farmácia São João',
    logo: '',
    url: '',
    destaque: false,
  },
  {
    id: 'booyah',
    nome: 'Booyah',
    logo: '',
    url: '',
    destaque: false,
  },
  {
    id: 'cora',
    nome: 'Cora',
    logo: '',
    url: '',
    destaque: false,
  },
  {
    id: 'tecnoshow',
    nome: 'Tecnoshow',
    logo: '',
    url: '',
    destaque: false,
  },
];

/**
 * Renderiza logos no container indicado.
 * @param {string} selector  — CSS selector do container
 * @param {object} options
 *   apenasDestaques {boolean} — filtra apenas clientes com destaque: true (padrão: false)
 *   limite         {number}  — máximo de logos a mostrar (padrão: sem limite)
 *   tema           {string}  — 'claro' (padrão) ou 'escuro' — inverte logos se necessário
 */
function renderClientes(selector, options = {}) {
  const el = document.querySelector(selector);
  if (!el) return;

  const { apenasDestaques = false, limite = Infinity, tema = 'claro' } = options;

  const lista = CLIENTES_TM
    .filter(c => !apenasDestaques || c.destaque)
    .slice(0, limite);

  el.innerHTML = lista.map(c => {
    const logoTag = c.logo
      ? `<img src="${c.logo}" alt="${c.nome}" class="logo-img" loading="lazy">`
      : '';
    const nomeTag = `<span class="logo-text">${c.nome}</span>`;
    return `<div class="logo-slot">${logoTag}${nomeTag}</div>`;
  }).join('');
}
