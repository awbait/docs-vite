export default {
  title: 'DODocs by awbait',
  description: 'DevOps documentation',
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/index' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Software',
        collapsed: false,
        collapsible: true,
        items: [
          {
            text: 'Airflow',
            items: [
              { text: 'Установка', link: '/software/airflow/airflow' },
            ]
          },
          {
            text: 'Python',
            items: [
              { text: 'Сборка и установка', link: '/software/python/python' },
            ]
          }
        ]
      }
    ]
  }
}