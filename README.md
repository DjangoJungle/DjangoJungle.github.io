# Guanyu Jiang's Academic Profile

This is an academic personal website built with Next.js, showcasing Guanyu Jiang's academic experience, research achievements, and personal information.

## Features

- Responsive design that adapts to various devices
- Modern UI interface designed with Tailwind CSS
- Smooth transition animations implemented with Framer Motion
- Clear presentation of education background, research experience, project experience, and other personal information

## Tech Stack

- Next.js - React framework
- TypeScript - Type-safe JavaScript
- Tailwind CSS - Utility-first CSS framework
- Framer Motion - Animation library
- React Icons - Icon library

## Installation and Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit http://localhost:3000

## Deployment

The website can be easily deployed using platforms like Vercel:

```bash
npm run build
npm run start
```

## File Structure

- `/pages` - Next.js pages
- `/public` - Static assets
  - `/files` - Documents like CV
  - `/attachment` - Photos and other image assets
  - `/images` - Organization logos
- `/styles` - Global CSS styles

## Notes

Before using, please ensure the following files are ready:
1. Place your personal photo at `/public/attachment/guanyu.jpg`
2. Place your CV PDF at `/public/files/CV.pdf`
3. Add organization logos to `/public/images/`:
   - `/public/images/hkbu-logo.png`
   - `/public/images/zju-logo.png`
   - `/public/images/tencent-logo.png`
   - `/public/images/nus-logo.png`
4. Create a favicon by:
   - Using online favicon generators like [favicon.io](https://favicon.io/)
   - Convert any image (such as your profile photo) to ICO format
   - Place the generated favicon.ico in the `/public` directory 