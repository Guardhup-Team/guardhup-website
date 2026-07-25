# GuardHup Website - Vernieuwde Versie

Moderne, professionele website voor GuardHup - Beveiliging Platform NL

## 🎯 Over GuardHup

GuardHup verbindt beveiligingsprofessionals met opdrachtgevers. Geverifieerd, betrouwbaar en efficiënt.

## 🚀 Tech Stack

- **Next.js 14** - React framework voor production
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations & transitions
- **TypeScript** - Type safety
- **React Icons** - Icon library

## 📋 Features

✅ Moderne responsive design
✅ Smooth animations met Framer Motion
✅ Academy cursussectie
✅ Contact formulier
✅ Mobile-first approach
✅ SEO optimized
✅ Fast performance
✅ Accessibility optimized

## 🏃 Aan de slag

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Bezoek [http://localhost:3000](http://localhost:3000)

### Build voor Production

```bash
npm run build
npm start
```

## 📁 Project Structuur

```
guardhup-website/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Academy.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── index.tsx (Home page)
│   │   ├── _app.tsx
│   │   └── _document.tsx
│   └── styles/
│       └── globals.css
├── public/
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Design System

**Kleuren:**
- Primary: #0052FF (GuardHup Blauw)
- Dark: #001F3F (Navy)
- Navy: #0A1428
- Light: #F8F9FA (Achtergrond)
- Gray: #6C757D

**Typografie:**
- Font: Inter
- Headlines: Bold/Semibold
- Body: Regular

## 🔧 Configuratie

### Environment Variables

Creer een `.env.local` bestand:

```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_CONTACT_EMAIL=contact@guardhup.com
```

## 📱 Responsive Design

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## 🚀 Deployment

### Vercel (Recommended)

1. Push naar GitHub
2. Import project op [Vercel.com](https://vercel.com)
3. Deploy!

### Docker

```bash
docker build -t guardhup-website .
docker run -p 3000:3000 guardhup-website
```

## 📝 Licentie

MIT License © 2026 GuardHup Team
