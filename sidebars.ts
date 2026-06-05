import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Servizi',
      link: {type: 'doc', id: 'services/index'},
      items: [
        'services/vaultwarden',
        'services/immich',
        'services/nextcloud',
        'services/wordpress',
        'services/metabase',
        'services/zulip',
        'services/uptime-kuma',
        'services/umami',
        'services/app-mobile',
        'services/assemblee',
      ],
    },
    {
      type: 'category',
      label: 'Cose per nerd',
      link: {type: 'doc', id: 'architecture/index'},
      items: [
        'architecture/overview',
        'architecture/nodes',
        'architecture/access',
        'architecture/argocd',
        'architecture/traefik',
      ],
    },
  ],
};

export default sidebars;
