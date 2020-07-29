import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false
  }
};

const proxy = createProxyMiddleware({
  target: process.env.API_URL,
  changeOrigin: true,
  pathRewrite: { '/api': '' },
  secure: false
});

export default proxy;
