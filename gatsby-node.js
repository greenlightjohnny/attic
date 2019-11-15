exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        {
            allContentfulBlog {
                nodes {
                    slug
                }
            }
        }

    `);

    if(result.error) {
        reporter.panic('Error Loading Blog', JSON.stringify(result.error))
    }

    result.data.allContentfulBlog.nodes.forEach(blog => {
        actions.createPage({
            path: `/${blog.slug}/`,
            component: require.resolve('./src/template/blog.js'),
            context: {
                slug: blog.slug,
            },
        })
    })
}

