import { request as httpRequest } from 'node:http';

// Dev-only equivalent of the narrow Caddy route used in production.
// Astro installs its page handler ahead of Vite's regular server.proxy handler.
export default function lingostackDevProxy() {
  let devServer;
  let middleware;
  return {
    name: 'transla-lingostack-dev-proxy',
    hooks: {
      'astro:server:setup': ({ server }) => {
        const target = new URL(process.env.TRANSLA_API_PROXY_TARGET || 'http://127.0.0.1:8000');
        if (target.protocol !== 'http:') throw new Error('The development API proxy requires an http: target.');
        devServer = server;
        middleware = {
          route: '',
          handle(req, res, next) {
            if (new URL(req.url || '/', 'http://localhost').pathname !== '/api/public/order-form') return next();
            const upstream = httpRequest(new URL(req.url, target), {
              method: req.method,
              headers: { ...req.headers, host: target.host },
              timeout: 30000,
            }, response => {
              res.writeHead(response.statusCode || 502, response.headers);
              response.pipe(res);
            });
            upstream.on('timeout', () => upstream.destroy(new Error('API timeout')));
            upstream.on('error', () => {
              if (!res.headersSent) {
                res.writeHead(502, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, message: 'API jest niedostępne. Spróbuj ponownie.' }));
              } else res.destroy();
            });
            req.on('aborted', () => upstream.destroy());
            req.pipe(upstream);
          },
        };
      },
      'astro:server:start': () => {
        devServer.middlewares.stack.unshift(middleware);
      },
    },
  };
}
