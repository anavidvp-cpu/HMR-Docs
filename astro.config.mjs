import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'HMR Internal Docs',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
          dir: 'ltr',
        },
      },
      sidebar: [
        {
          label: 'AI Engine (FlowiseAI)',
          items: [{ autogenerate: { directory: 'flowiseai' } }],
        },
        {
          label: 'Android App (Flutter)',
          items: [{ autogenerate: { directory: 'flutter' } }],
        },
        {
          label: 'Network & Security (Cloudflare)',
          items: [{ autogenerate: { directory: 'cloudflared' } }],
        },
        {
          label: 'Website (Astro)',
          items: [{ autogenerate: { directory: 'astro' } }],
        },
        {
          label: 'Server & Deployment (Docker)',
          items: [{ autogenerate: { directory: 'docker' } }],
        },
        {
          label: 'Roadmap & Backlog (Todo)',
          items: [{ autogenerate: { directory: 'todo' } }],
        },
      ],
    }),
  ],
});