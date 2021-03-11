export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '604a57fb72789207a4688ea1',
                  title: 'Sanity Studio',
                  name: 'the-irish-developer-studio-5h8d9yi6',
                  apiId: '368095d8-4ce5-43be-96bd-46eef0b1ea16'
                },
                {
                  buildHookId: '604a57fb0976be0c7970c979',
                  title: 'Landing pages Website',
                  name: 'the-irish-developer-web',
                  apiId: 'd52a220c-9ea5-437d-8399-38ae3ce81ae3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dieR30796/the-irish-developer',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://the-irish-developer-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
