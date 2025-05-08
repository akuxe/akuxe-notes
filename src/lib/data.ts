import {
  // Blockchain,
  Css,
  // ExpressJs,
  Figma,
  // FramerMotion,
  Git,
  Html,
  JavaScript,
  NextJs,
  NodeJs,
  ReactJs,
  // Tailwindcss,
  TypeScript,
  Ui,
  Ux,
  VsCode,
} from '@/components/icons';
import type { CardNavItem, MainNavItem, SidebarNavItem } from '@/types/nav';

export const mainNav: MainNavItem[] = [
  { title: 'Frontend', href: '/docs/frontend/javascript/basics' },
  { title: 'Backend', href: '/docs/backend/nodejs/basics' },
  { title: 'Dev Tools', href: '/docs/dev-tools/git-github/basics' },
  {
    title: 'UX Design',
    href: '/docs/ux-design/google-ux-design/1-introducing-ux-design',
  },
  // { title: 'Blockchain', href: '/docs/blockchain' },
];

export const sidebarNav: SidebarNavItem[] = [
  {
    title: 'Frontend',
    // CategoryItem[]
    items: [
      {
        title: 'HTML & CSS',
        // SubCategoryItem[]
        items: [
          {
            title: 'HTML Cheatsheet',
            href: '/docs/frontend/html/cheatsheet',
          },
          {
            title: 'CSS Cheatsheet',
            href: '/docs/frontend/css/cheatsheet',
          },
          {
            title: 'CSS Resources',
            href: '/docs/frontend/css/resources',
          },
        ],
      },
      {
        title: 'JavaScript',
        items: [
          { title: 'Basics', href: '/docs/frontend/javascript/basics' },
          { title: 'Operators', href: '/docs/frontend/javascript/operators' },
          {
            title: 'Conditional Statements',
            href: '/docs/frontend/javascript/conditional-statements',
          },
          {
            title: 'Objects',
            href: '/docs/frontend/javascript/objects',
          },
          {
            title: 'Arrays',
            href: '/docs/frontend/javascript/arrays',
          },
          {
            title: 'Functions',
            href: '/docs/frontend/javascript/functions',
          },
          {
            title: 'OOP',
            href: '/docs/frontend/javascript/object-oriented-programming',
          },
          {
            title: 'Classes',
            href: '/docs/frontend/javascript/classes',
          },
          {
            title: 'Modules',
            href: '/docs/frontend/javascript/modules',
          },
          {
            title: 'Advanced',
            href: '/docs/frontend/javascript/advanced',
          },
          {
            title: 'Methods',
            href: '/docs/frontend/javascript/methods',
          },
        ],
      },
      {
        title: 'TypeScript',
        items: [
          {
            title: 'Basics',
            href: '/docs/frontend/typescript/basics',
          },
        ],
      },
      {
        title: 'React',
        items: [
          {
            title: 'Basics',
            href: '/docs/frontend/react/basics',
          },
          // {
          //   title: 'React Components',
          //   href: '/docs/frontend/react/components',
          // },
          // { title: 'React Hooks', href: '/docs/frontend/react/hooks' },
          // { title: 'React Router', href: '/docs/frontend/react/router' },
        ],
      },
      {
        title: 'Next.js',
        items: [
          {
            title: 'Basics',
            href: '/docs/frontend/nextjs/basics',
          },
          {
            title: 'SEO',
            href: '/docs/frontend/nextjs/seo',
          },
        ],
      },
    ],
  },

  {
    title: 'Backend',
    items: [
      {
        title: 'Node.js',
        items: [
          { title: 'Basics', href: '/docs/backend/nodejs/basics' },
          // { title: 'Working with Modules', href: '/backend/nodejs/modules' },
          // { title: 'Node.js File System', href: '/backend/nodejs/fs' },
        ],
      },
    ],
  },

  {
    title: 'Dev Tools',
    items: [
      {
        title: 'Git & GitHub',
        items: [
          {
            title: 'Version Control Basics',
            href: '/docs/dev-tools/git-github/basics',
          },
          // {
          //   title: 'Working with Branches',
          //   href: '/dev-tools/git-github/branches',
          // },
          // {
          //   title: 'GitHub Workflows',
          //   href: '/dev-tools/git-github/workflows',
          // },
        ],
      },
    ],
  },

  {
    title: 'UX-Design',
    items: [
      {
        title: 'Google UX Design',
        items: [
          {
            title: 'Introducing UX Design',
            href: '/docs/ux-design/google-ux-design/1-introducing-ux-design',
          },
          {
            title: 'Thinking Like a UX Designer',
            href: '/docs/ux-design/google-ux-design/2-thinking-like-a-ux-designer',
          },
          {
            title: 'UX Design Frameworks',
            href: '/docs/ux-design/google-ux-design/3-ux-design-frameworks',
          },
          {
            title: 'Joining Design Sprint',
            href: '/docs/ux-design/google-ux-design/4-joining-design-sprint',
          },
          {
            title: 'Integrating Research Into The Design Process',
            href: '/docs/ux-design/google-ux-design/5-integrating-research-into-the-design-process',
          },
        ],
      },
    ],
  },
];

export const cardNav: CardNavItem[] = [
  {
    title: 'Frontend',
    items: [
      {
        title: 'HTML',
        href: '/docs/frontend/html/cheatsheet',
        icon: Html,
        description: 'Markup language for web pages.',
      },
      {
        title: 'CSS',
        href: '/docs/frontend/css/cheatsheet',
        icon: Css,
        description: 'Style sheet language for web design.',
      },
      {
        title: 'JavaScript',
        href: '/docs/frontend/javascript/basics',
        icon: JavaScript,
        description: 'Programming language for dynamic content.',
      },
      {
        title: 'TypeScript',
        href: '/docs/frontend/typescript/basics',
        icon: TypeScript,
        description: 'Typed superset of JavaScript.',
      },
      {
        title: 'React',
        href: '/docs/frontend/react/basics',
        icon: ReactJs,
        description: 'Library for building user interfaces.',
      },
      {
        title: 'Next.js',
        href: '/docs/frontend/nextjs/basics',
        icon: NextJs,
        description: 'React framework for server-side rendering.',
      },
      // {
      //   title: 'TailwindCSS',
      //   href: '/tailwindcss',
      //   icon: Tailwindcss,
      //   description: 'Utility-first CSS framework for styling.',
      // },
      // {
      //   title: 'Framer Motion',
      //   href: '/framer-motion',
      //   icon: FramerMotion,
      //   description: 'Animation library for React apps.',
      // },
    ],
  },
  {
    title: 'Backend',
    items: [
      {
        title: 'Node.js',
        href: '/docs/backend/nodejs/basics',
        icon: NodeJs,
        description: 'JavaScript runtime for building server-side apps.',
      },
      // {
      //   title: 'Express.js',
      //   href: '/docs/backend/nodejs/basics',
      //   icon: ExpressJs,
      //   description: 'Minimal and flexible Node.js web framework.',
      // },
      // {
      //   href: '/postgresql',
      //   icon: 'postgresql',
      //   title: 'PostgreSQL',
      //   description: 'Open-source relational database management.',
      // },
    ],
  },
  {
    title: 'Dev Tools',
    items: [
      {
        title: 'Git & GitHub',
        href: '/docs/dev-tools/git-github/basics',
        icon: Git,
        description: 'Version control with Git and hosting on GitHub.',
      },
      {
        title: 'VS Code  - WIP',
        href: '#',
        icon: VsCode,
        description: 'Popular code editor for web development.',
      },
    ],
  },
  {
    title: 'Design',
    items: [
      {
        title: 'Figma - WIP',
        href: '#',
        icon: Figma,
        description: 'Collaborative design tool for UI/UX.',
      },
      {
        title: 'UI Design - WIP',
        href: '#',
        icon: Ui,
        description: 'Designing user interfaces for apps.',
      },
      {
        title: 'UX Design',
        href: '/docs/ux-design/google-ux-design/1-introducing-ux-design',
        icon: Ux,
        description: 'Optimizing user experience and usability.',
      },
    ],
  },

  /* {
    title: 'Blockchain',
    items: [
      {
        title: 'Blockchain Basics',
        href: '/blockchain-basics',
        icon: Blockchain,
        description: 'Introduction to decentralized distributed ledger.',
      },
      {
        title: 'Ethereum',
        href: '/ethereum',
        icon: Blockchain,
        description: 'Decentralized platform for smart contracts.',
      },
      {
        title: 'Bitcoin',
        href: '/bitcoin',
        icon: Blockchain,
        description: 'The first cryptocurrency and decentralized network.',
      },
      {
        title: 'Smart Contracts',
        href: '/smart-contracts',
        icon: Blockchain,
        description: 'Self-executing contracts with code-based logic.',
      },
      {
        title: 'Cryptography',
        href: '/cryptography',
        icon: Blockchain,
        description: 'The science of securing digital communication.',
      },
      {
        title: 'DeFi',
        href: '/defi',
        icon: Blockchain,
        description: 'Decentralized finance for peer-to-peer transactions.',
      },
      {
        title: 'NFTs',
        href: '/nft',
        icon: Blockchain,
        description: 'Unique digital assets verified on the blockchain.',
      },
      {
        title: 'Blockchain Development',
        href: '/blockchain-development',
        icon: Blockchain,
        description: 'Building decentralized applications on the blockchain.',
      },
    ],
  }, */

  // {
  //   title: 'Video Editing',
  //   items: [
  //     {
  //       href: '/davinci-resolve',
  //       icon: 'davinciResolve',
  //       title: 'DaVinci Resolve',
  //       description: 'Professional video editing and color grading tool.',
  //     },
  //   ],
  // },
];
