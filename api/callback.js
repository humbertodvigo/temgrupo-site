/**
 * api/callback.js — Recebe o código do GitHub e troca pelo token de acesso
 * Retorna o token ao Decap CMS via postMessage (janela popup)
 */
export default async function handler(req, res) {
  const { code, error, error_description } = req.query;
  const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

  if (error) {
    return res.send(postMessagePage('error', { error: error_description || error }));
  }

  if (!code) {
    return res.status(400).send('Código de autorização ausente.');
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const data = await tokenRes.json();

    if (data.error) {
      return res.send(postMessagePage('error', { error: data.error_description || data.error }));
    }

    return res.send(postMessagePage('success', { token: data.access_token, provider: 'github' }));

  } catch (err) {
    return res.send(postMessagePage('error', { error: 'Erro interno ao trocar o código pelo token.' }));
  }
}

function postMessagePage(status, content) {
  const msg = JSON.stringify(content);
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body>
<script>
(function() {
  function sendMsg() {
    window.opener.postMessage(
      'authorization:github:${status}:${msg.replace(/'/g, "\\'")}',
      window.location.origin
    );
  }
  if (window.opener) {
    sendMsg();
    setTimeout(() => window.close(), 500);
  } else {
    document.body.innerHTML = '<p>Pode fechar esta janela.</p>';
  }
})();
<\/script>
<p>Autenticando... pode fechar esta janela.</p>
</body></html>`;
}
