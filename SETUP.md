# Academic Profile Setup Guide

## Prerequisites

1. Ensure Node.js is installed (recommended version ≥ 14.0.0)
2. Prepare your personal photo and CV

## Installation Steps

1. First, install project dependencies:

```bash
cd academic_page
npm install
```

2. Prepare static assets:

- Copy `attachment/guanyu.jpg` to `public/attachment/guanyu.jpg`
- Copy `attachment/Guanyu's CV.pdf` to `public/files/CV.pdf`
- Create organization logos:
  - Add `public/images/hkbu-logo.png`
  - Add `public/images/zju-logo.png`
  - Add `public/images/tencent-logo.png`
  - Add `public/images/nus-logo.png`

3. Create a favicon:
   - Use an online favicon generator like [favicon.io](https://favicon.io/)
   - Convert your profile photo or any other image to ICO format
   - Add the generated favicon.ico to the `public` directory

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit http://localhost:3000 to view the website

## Customizing Content

If you need to modify the website content, mainly edit these files:

- `pages/index.tsx` - Main page content
- `styles/globals.css` - Global styles

## Deployment

Build the production version:

```bash
npm run build
```

You can deploy the generated static website to GitHub Pages, Vercel, or other static website hosting services. 