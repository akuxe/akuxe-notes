# 🧠 UX/UI & Web Dev Notes

**Personal Notes and Lessons on UI/UX Design and Web Development** is a clean, simple, and fast knowledge base built with **Next.js**, **Tailwind CSS**, and **pnpm** for optimal performance.

This isn’t just another blog — it’s my personal knowledge base, crafted for both developers and designers. It features structured content on UI/UX, Figma, frontend development, code examples, and design patterns, all designed for clarity, depth, and practical learning.

## 🚀 Live Demo

🌐 [View the Live Site](https://akuxe-notes.vercel.app)

## ✨ Features

- 📄 MDX-powered pages with custom components (tables, code blocks, etc.)
- 🧭 Sidebar navigation with nested topics
- 📚 Card thumbnails for category browsing
- 🧱 Modular architecture to easily add topics/languages
- 🖼️ Clean, minimal UI designed for readability
- 🧠 Curated content on **UX, frontend, and web dev fundamentals**
- 🔍 SEO-friendly

## 📦 Tech Stack

Powered by modern frontend tools and thoughtful DX enhancements

- **Next.js** – App router & MDX integration
- **React 19** + **TypeScript 5** – Modern React with types
- **Tailwind CSS 4** – Utility-first styling
- **@next/mdx** – MDX page support
- **next-themes** – Theme/dark mode toggling
- **@headlessui/react** + **@heroicons/react** – Accessible UI + icons
- **sugar-high** – Lightweight syntax highlighting
- **clsx** – Conditional class merging
- **tailwind-merge** – Conflict-free Tailwind classes
- **ESLint + Prettier + Prettier Tailwind plugin** – Linting & formatting
- **pnpm** – Fast, efficient package manager

## 🛠️ Handcrafted Everything – No Third-Party Libraries

This site is intentionally built **without relying on any third-party UI component libraries** (like ShadCN, MUI, Chakra, etc.).
All elements — layout, buttons, cards, navigation — are **manually crafted from scratch** using **Tailwind CSS** and **Headless UI** (for the dialog component only).

**Why this approach?**

- ⚡ **Optimized performance** with a lean bundle size
- 🎯 **Full design control** and zero abstraction overhead
- 📚 **Better learning value** for myself and other devs
- 🧼 **No bloat** — just clean, purposeful code

This philosophy ensures the site remains fast, focused, and educational.

## 📁 Folder Structure

```bash
src/
│
├── content/                # All .mdx note files
│   └── frontend/           # Organized by topic/language
│       └── html/
│           └── basics.mdx
│
├── components/             # UI components (Table, Card, Sidebar, etc.)
│
├── lib/
│   └── data.ts             # SidebarNav and CardNav data definitions
│
└── app/                    # App routing and layouts
```

💡 Tip: Want to add a new topic? Just drop a `.mdx` file in `src/content/` and update `src/lib/data.ts` — it will automatically appear in the UI!

## 🧩 Data-Driven Navigation

To add new **topics, cards, or languages**, just update:

- `src/lib/data.ts` – for sidebar items
- `src/lib/data.js` – for card thumbnails
- `src/content/.../*.mdx` – for the actual note content

### Example: Add New Topic

```ts
// Add to sidebarNav (in data.ts)
{
  title: 'Frontend',
  items: [
    {
      title: 'JavaScript',
      items: [
        {
          title: 'Basics',
          href: '/docs/frontend/js/basics',
        },
      ],
    },
  ],
}
```

### Example: Add a Card

```ts
// Add to cardNav (in data.ts)
{
  title: 'Frontend',
  items: [
    {
      title: 'JavaScript',
      href: '/docs/frontend/js/basics',
      icon: JsIcon,
      description: 'JavaScript essentials for beginners.',
    },
  ],
}
```

## 🧪 Scripts

```bash
# Run development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Format files (ts, js, mdx, etc.)
pnpm format
```

## ⚙️ MDX Features & Enhancements

- Add links: `[text](https://example.com/)`
- Embed images: `![alt](/image.png)`
- Add tables with a custom `<Table />` component:

  ```tsx
  import Table from '@/components/table';
  <Table
    headers={['Name', 'Age']}
    rows={[
      ['Alice', '22'],
      ['Bob', '28'],
    ]}
  />;
  ```

- Add filename to the code blocks:

  ````mdx
  ```tsx
  [!CodeFilename:app/page.tsx]
  export default function Page() {
  return <h1>Hello World!</h1>
  }
  ```
  ````

- Set page titles and descriptions in MDX:

```tsx
export const title = 'JavaScript Basics';
export const description = 'Foundational concepts of JS';
```

## ✅ Deployment

This site is designed for Vercel, but can be hosted anywhere:

- Recommended: [Vercel](https://vercel.com/docs) → plug-and-play with Next.js

## 🧠 Learning Resources

- [Next.js Docs](https://nextjs.org/docs/)
- [MDX Docs](https://mdxjs.com/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Figma Learn](https://help.figma.com/)
- [Heroicons](https://heroicons.com/)
- [Headless UI](https://headlessui.com/)

## 🙋‍♀️ Contributing

Want to help improve this?

- Fork this repo
- Create a new feature branch
- Add or edit `.mdx` files + update` data.ts`
- Submit a pull request 🙌

## 📄 License

This project is open source under the MIT License.

## 🙏 Acknowledgements

- Built with ❤️ using Next.js, Tailwind, MDX
- Inspired by Tailwind CSS docs, Next.js structure, and custom dev workflows
