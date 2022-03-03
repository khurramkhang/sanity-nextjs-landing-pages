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
                  buildHookId: '6220b2f18e1669c0a0e85f89',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ady858qm',
                  apiId: '40497b0e-2e3b-4cf4-bc6a-9de7b9a68ace'
                },
                {
                  buildHookId: '6220b2f1546820cce254cbae',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-74ck23ci',
                  apiId: '3c186658-9b00-4d11-b123-a112841990f5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/khurramkhang/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-74ck23ci.netlify.app', category: 'apps' }
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
