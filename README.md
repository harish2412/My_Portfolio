# Harish Padmanabhan — Portfolio

**Live**: [https://harishpadmanabhan.netlify.app/](https://harishpadmanabhan.netlify.app/)

A fast, modern portfolio for a **Data • ML • AI Engineer** showcasing projects, skills, and contact. Built with Next.js, Tailwind, Framer Motion, and deployed on Netlify.

---

## ✨ Features

* **Hero** with typewriter titles and particle background
* **About** focused on Data/ML/AI engineering
* **Projects** with galleries (4 screenshots per project)
* **Skills** grid with 3D tilt
* **Contact** form powered by Web3Forms (spam-safe, no server)
* Fully responsive, keyboard accessible, and SEO‑ready

---

## 🧱 Tech Stack

* **Framework**: Next.js (React, TypeScript)
* **UI**: Tailwind CSS, Framer Motion, react-icons
* **Effects**: typewriter-effect, react-parallax-tilt, custom ParticleBackground
* **Forms**: Web3Forms API
* **Deploy**: Netlify (works great on Vercel too)

---

## 📂 Project Structure (key parts)

```
app/                # (or pages/) Next.js routes
  layout.tsx
  page.tsx
components/
  Hero/ParticleBackground.tsx
  contact/Contact.tsx
  ...
lib/
public/
  images/
  Harish_Padmanabhan_Resume.pdf
```

> If your project uses the **pages/** router instead of **app/**, adjust accordingly.

---

## 🚀 Getting Started

### 1) Install & run

```bash
npm i
npm run dev
# build for production
npm run build && npm run start
```

### 2) Environment variables

Create **.env.local** in the root:

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_client_key
```

You can get a key from Web3Forms and paste it here.

### 3) Expected assets

* **Resume**: `public/Harish_Padmanabhan_Resume.pdf`
* **Images** used in components:

  * `/images/AboutMyPic.jpg`
  * Project screenshots (see section below)
* **OG image** (optional but recommended): `public/og.png`
* **Favicon**: `public/favicon.ico`

---

## 🖼️ Project Screenshots (placeholders)

Provide **4 images per project** under `public/images/<project>/` and update the data files:

* `data/projects.ts` (or similar):

  * **NL2SQL + RAG**: `/images/NL2SQL/...`
  * **Stroke Risk**: `/images/Stroke/...`
  * **EV Charging**: `/images/EV/...`

Example entry:

```ts
images: [
  "/images/NL2SQL/01-architecture.png",
  "/images/NL2SQL/02-training.png",
  "/images/NL2SQL/03-demo.png",
  "/images/NL2SQL/04-results.png",
]
```

---

## 🔧 Useful Commands

```bash
npm run lint       # lint
npm run format     # if you use prettier script
```

---

## 🔍 SEO metadata (Next 13+)

Add to `app/layout.tsx` (or your head config):

```ts
export const metadata = {
  title: "Harish Padmanabhan – Data • ML • AI Engineer",
  description: "Data Engineer & ML/AI Engineer building reliable, scalable systems.",
  openGraph: {
    title: "Harish Padmanabhan – Portfolio",
    description: "Data • ML • AI Engineer",
    images: ["/og.png"],
    url: "https://harishpadmanabhan.netlify.app/",
    siteName: "Harish Portfolio",
  },
  icons: { icon: "/favicon.ico" },
};
```

---

## 📬 Contact

* **Email**: [padmanabhan.h@northeastern.edu](mailto:padmanabhan.h@northeastern.edu)
* **LinkedIn**: [https://www.linkedin.com/in/hp24](https://www.linkedin.com/in/hp24)
* **GitHub**: [https://github.com/harish2412](https://github.com/harish2412)

---

## 🧪 Pre‑deploy checklist

* [ ] Contact form works (submit test)
* [ ] Resume link downloads correctly
* [ ] All image paths resolve (desktop & mobile)
* [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95
* [ ] 404 page exists

---

## 🛠️ Deployment

**Netlify**: connect your repo → set build command `npm run build` and publish directory `.next` (or let Netlify plugin handle).
**Vercel**: `Import Project` → defaults work out of the box.

---

## 📄 License

MIT — feel free to reuse this structure with attribution.