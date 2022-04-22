export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6262a5aa12583e13730130d1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ap11mmpj',
                  apiId: '9d3f9e7b-91f5-43cd-872c-93cc56922aef'
                },
                {
                  buildHookId: '6262a5aa7476351e28d331ce',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-daz2bngx',
                  apiId: '0206b9dc-0ed2-4a0d-b074-cc290b6308f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bitwhys/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-daz2bngx.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
