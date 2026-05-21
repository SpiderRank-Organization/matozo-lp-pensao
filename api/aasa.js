// Apple App Site Association — endpoint intencional 410 Gone
// Matozo & Espinosa Advocacia não possui aplicativo iOS.
// Crawlers da Apple (e bots genéricos) tentam buscar /apple-app-site-association
// e /.well-known/apple-app-site-association — sem este endpoint o Vercel retornaria
// 404 e o Google Search Console contabilizaria como erro de rastreamento.
// Resposta 410 Gone sinaliza explicitamente "este recurso não existe e nunca existirá",
// removendo o ruído do relatório GSC mais rápido que 404.

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.status(410).send('Gone — no iOS app associated with this domain.');
}
