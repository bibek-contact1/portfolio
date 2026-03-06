# Bibek Sunar Portfolio Website

A production-ready personal portfolio built with Next.js, TailwindCSS, Framer Motion, and a backend contact API using Nodemailer.

## Tech Stack
- Frontend: Next.js, React, TailwindCSS, Framer Motion
- Backend: Next.js API routes, Nodemailer
- Deployment: GitHub + Vercel (Netlify compatible with Next support)

## Folder Structure
```text
portfolio-website/
+ components/
+ pages/
¦ + api/
¦ ¦ + contact.js
¦ + _app.js
¦ + _document.js
¦ + index.js
+ styles/
+ utils/
+ public/
¦ + projects/
+ api/
¦ + README.md
+ .env.example
+ package.json
+ README.md
```

## Features
- Modern hero with animated gradient background
- About, Skills, Projects, Vision, Contact sections
- Smooth scrolling one-page navigation
- Dark mode toggle
- Loading animation
- WhatsApp floating button
- SEO meta tags and favicon branding
- Backend email sending with Gmail SMTP

## Environment Variables
```env
Create `.env.local` in project root:
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=yourapppassword
CONTACT_RECEIVER=bibek.contact1@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```
- Use a Gmail App Password, not your normal Gmail password.
- Enable 2-Step Verification before creating App Password.

## Run Locally
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open http://localhost:3000

## Production Build
- Build: `npm run build`
- Start: `npm run start`

## GitHub Deployment
1. `git init`
2. `git add .`
3. `git commit -m "Initial portfolio website"`
4. `git branch -M main`
5. `git remote add origin https://github.com/<your-username>/<repo-name>.git`
6. `git push -u origin main`

## Deploy on Vercel
1. Import your GitHub repository at https://vercel.com/new
2. Framework preset: Next.js
3. Add env vars: EMAIL_USER, EMAIL_PASS, CONTACT_RECEIVER, NEXT_PUBLIC_SITE_URL
4. Deploy and test the contact form in production.

## Netlify Note
- Vercel is recommended for the simplest Next.js API route deployment; Netlify also works with proper Next runtime support.
