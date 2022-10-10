import { defineConfig } from 'vitepress'
import CalloutPlugin from 'mdit-plugin-callouts';

export default defineConfig({
  lang: 'ru-RU',
  base: '/',
  title: 'DevOps notes',
  description: 'DevOps documentation',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  themeConfig: {
    nav: nav(),
    sidebar: {
      '/devops/': sidebarMain(),
    },
    socialLinks: social(),
  },
  markdown: {
    config: (md) => {
      md.use(CalloutPlugin)
    }
  }
});

function nav() {
  return [
    { text: 'DevOps', link: '/devops/info' },
    {
      text: 'Dropdown Menu',
      items: [
        { text: 'Item A', link: '/item-1' },
        { text: 'Item B', link: '/item-2' },
        { text: 'Item C', link: '/item-3' }
      ]
    }
  ]
}

function sidebarMain() {
  return [
    {
      text: 'Введение',
      collapsible: false,
      collapsed: false,
      items: [
        { text: 'Общая информация', link: '/devops/info' },
      ]
    },
    {
      text: 'Linux',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'SSH', link: '/devops/linux/ssh' },
        { text: 'Firewall', link: '/devops/linux/firewall' },
        { text: 'Commands', link: '/devops/linux/commands' },
        { text: 'rsyslog', link: '/devops/linux/rsyslog' },
        {
          text: 'Customization',
          items: [
            { text: 'Customization', link: '/devops/linux/customization/customization' },
            { text: 'chezmoi', link: '/devops/linux/customization/chezmoi' },
          ]
        },
        {
          text: 'Storage',
          items: [
            { text: 'Resize LVM', link: '/devops/linux/storage/resize-lvm-filesystem' },
            { text: 'Resize LVM with reboot', link: '/devops/linux/storage/resize-lvm-filesystem2' },
          ]
        },
        {
          text: 'Install',
          items: [
            { text: 'Resize LVM', link: '/devops/linux/storage/resize-lvm-filesystem' },
          ]
        },
        {
          text: 'Hacks',
          items: [
            { text: 'Resize LVM', link: '/devops/linux/storage/resize-lvm-filesystem' },
          ]
        },
      ]
    },
    {
      text: 'Software',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Python', link: '/devops/software/python/python' },
        {
          text: 'Databases',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Postgresql', link: '/devops/software/databases/postgresql' },
            { text: 'Oracle', link: '/devops/software/databases/oracle' },
          ]
        },
        { text: 'Airflow', link: '/devops/software/airflow/airflow' },
        { text: 'Cloudera', link: '/devops/software/cloudera' },
      ]
    },
  ]
}

function social() {
  return [
    { icon: 'github', link: 'https://github.com/awbait' },
    { icon: 'twitter', link: '...' },
    {
      icon: {
        svg: '<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM2.192 13.962l1.962-.393a8.003 8.003 0 0 0 15.692 0l1.962.393C20.896 18.545 16.85 22 12 22s-8.896-3.455-9.808-8.038z"/></g></svg>',
      },
      link: '...'
    }
  ]
}
