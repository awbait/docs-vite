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
        { text: 'Приложения и сервисы', link: '/devops/apps-and-services' },
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
            { text: 'Jenkins', link: '/devops/linux/install/jenkins' },
            { text: 'Maven', link: '/devops/linux/install/maven' },
          ]
        },
        {
          text: 'Hacks',
          items: [
            { text: 'Centos 8 Fix Repo', link: '/devops/linux/hacks/centos8-repo-fix' },
            { text: 'Password reset', link: '/devops/linux/hacks/password-reset' },
          ]
        },
      ]
    },
    {
      text: 'Kubernetes',
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: 'Charts',
          items: [
            { text: 'Airflow', link: '/devops/kubernetes/charts/airflow' },
            { text: 'Camunda BPM', link: '/devops/kubernetes/charts/camunda-bpm' },
            { text: 'EFK', link: '/devops/kubernetes/charts/efk' },
            { text: 'External ingress', link: '/devops/kubernetes/charts/external-nginx-ingress' },
            { text: 'Metallb', link: '/devops/kubernetes/charts/metallb' },
            { text: 'Postgresql', link: '/devops/kubernetes/charts/postgresql' },
          ]
        },
        {
          text: 'Configs',
          items: [
            { text: 'Bare-metall cluster', link: '/devops/kubernetes/configs/bare-metall-k8s-cluster' },
            { text: 'Cert manager', link: '/devops/kubernetes/configs/cert-manager' },
            { text: 'Fluentd', link: '/devops/kubernetes/configs/fluentd' },
            { text: 'Local path provisioner', link: '/devops/kubernetes/configs/local-path-provisioner' },
            { text: 'Longhorn', link: '/devops/kubernetes/configs/longhorn' },
            { text: 'Rancher', link: '/devops/kubernetes/configs/rancher' },
          ]
        },
        {
          text: 'Hacks',
          items: [
            { text: 'Traefik-stripprefix', link: '/devops/kubernetes/hacks/traefik-stripprefix' },
          ]
        },
        {
          text: 'Tools',
          items: [
            { text: 'k3sup', link: '/devops/kubernetes/tools/k3sup' },
          ]
        },
        { text: 'Commands', link: '/devops/kubernetes/commands' },
        { text: 'Components', link: '/devops/kubernetes/components' },
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
            { text: 'Ora2pg', link: '/devops/software/databases/ora2pg' },
          ]
        },
        { text: 'Airflow', link: '/devops/software/airflow/airflow' },
        { text: 'Cloudera', link: '/devops/software/cloudera' },
      ]
    },
    {
      text: 'Other',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Docker', link: '/devops/other/docker' },
        { text: 'Nutanix', link: '/devops/other/nutanix' },
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
