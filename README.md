# Emily Rose Tearoom

Official website for Emily Rose Tearoom, Corringham, Essex.

## Local development

```bash
npm install
npm run dev
```

## Environment variables

Create a `.env.local` (or set in Vercel):

```
RESEND_API_KEY=re_xxxx
```

Update the `from` and `to` addresses in `src/app/api/contact/route.ts` once you have a verified domain with Resend.

## Deploy

Connect this repo to Vercel and deploy. The site is ready for production.
