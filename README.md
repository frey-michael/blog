# Personal Blog

This repository contains my personal blog website written in Svelte as well as all content.

## Development

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev
```

## Deplyment

Continuous deployment is enabled using the [adapter-cloudflare](https://svelte.dev/docs/kit/adapter-cloudflare) library. Every successful pull request to main automatically triggers a deployment.