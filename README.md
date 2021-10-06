# Vercel Enterprise Case 46899

<https://vercel-enterprise-case-46899.vercel.app/hello>

Open the browser developer tools and note that with caching disabled, you are always served a 200 OK response. With caching on, subsequent requests recieve a 304 Not Modified response, allowing the browser to use its cached data.

The problem here is that the serverless function response has a _dynamic_ `Content-Security-Policy` (CSP), but the 304 No Content response returns the _static_ CSP specified in `next.config.js`.
