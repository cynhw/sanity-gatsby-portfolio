export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ec236942723aa5b1ea5ea4e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xxaghdky',
                  apiId: 'f1cc6b15-30ed-44a6-9847-3b7ba813d6b5'
                },
                {
                  buildHookId: '5ec2369468f98678e301f966',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ghz3mbhp',
                  apiId: '0c850ae7-597b-4431-982f-dea55cabae2a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cynhw/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ghz3mbhp.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
