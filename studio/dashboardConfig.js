export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60cd1ce32d18a1760985bbf1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-tbh1v2pc',
                  apiId: 'c0ee05a1-7ab9-4946-84dd-25bb4b3a8c2f'
                },
                {
                  buildHookId: '60cd1ce3bc28c9a5b70ff5c5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3o8fkinf',
                  apiId: 'cc504290-f4ee-4eff-bc8e-97c8ab612201'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lavimarcu/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3o8fkinf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
