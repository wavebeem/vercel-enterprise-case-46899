// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const prefix = new Date().toISOString().split("T")[0];
  const origin = `https://${prefix}.example.com`;
  const csp = `frame-ancestors 'self' ${origin};`;
  res.setHeader("Content-Security-Policy", csp);
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`<html><body><pre>${csp}</pre></body></html>`);
  // res.send(`<html><body><pre>${csp}</pre></body></html>`);
}
