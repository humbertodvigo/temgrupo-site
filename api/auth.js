/**
 * api/auth.js — Inicia o fluxo OAuth com o GitHub para o Decap CMS
 */
module.exports = function handler(req, res) {
  const { GITHUB_CLIENT_ID } = process.env;

  if (!GITHUB_CLIENT_ID) {
    return res.status(500).send('GITHUB_CLIENT_ID não configurado nas env vars do Vercel.');
  }

  const state = Math.random().toString(36).slice(2) + Date.now().toString(36);
  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    scope: 'repo,user',
    state,
  });

  res.setHeader('Set-Cookie', `oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`);
  res.redirect(302, `https://github.com/login/oauth/authorize?${params}`);
};
