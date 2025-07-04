import type { SiteConfig } from '~/cfg-schema';

const config: SiteConfig = {
  siteUrl: 'https://frndhoon-me.netlify.app/',
  title: 'frndhoon-me',
  titleTemplate: '%s',
  description: 'minimalism coding blog build with astro',
  favicon: '/favicon.svg',
  ogImage: '/og.avif',
  analytics: {
    provider: 'umami',
    websiteId: '3e44b81b-09f0-4eaf-8c30-aad1b17e7903',
  },
  bio: {
    name: 'frndhoon',
    avatar: '/avatar.avif',
    description: '친근함으로 연결하는, 프론트엔드 개발자',
    links: [
      {
        label: 'mail',
        url: 'mailto:frndhoon@gmail.com',
      },
      {
        label: 'github',
        url: 'https://github.com/frndhoon',
      },
      {
        label: 'linkedin',
        url: 'https://www.linkedin.com/in/jeonghoon-woo-56b440371/',
      },
      // {
      //   label: 'x',
      //   url: 'https://twitter.com/frndhoon',
      // },
      {
        label: 'instagram',
        url: 'https://www.instagram.com/frndhoon',
      },
    ],
  },
  // @see https://giscus.app/
  giscus: {
    repo: 'frndhoon/frndhoon.me',
    repoId: 'R_kgDONQJYcQ',
  },
};

export default config;
