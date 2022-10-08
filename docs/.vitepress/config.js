export default {
  title: 'DODocs by awbait',
  description: 'DevOps documentation',
  base: 'docs.awbait.com',
  themeConfig: {
    sidebar: [
      {
        text: 'Welcome',
        items: [
          { text: 'Введение', link: '/index' },
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
          },
          {
            text: 'Databases',
            items: [
              { text: 'Postgresql', link: '/software/databases/postgresql' },
              { text: 'Oracle', link: '/software/databases/oracle' },
            ]
          },
          { text: 'Cloudera', link: '/software/cloudera.md'}
        ]
      }
    ]
  }
}
