import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import aboutStyles from '../pages/about.module.scss'
//import { documentToReactComponets } from '@contentful/rich-text-react-renderer'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'




export const query = graphql`
    query($slug: String!) {
        blog: contentfulBlog(slug: { eq: $slug }) {
            title
            post {
                json
            }
        }
    }
`

const BlogTemplate = ({ data: { blog } }) => (
    <Layout>
        <div className={aboutStyles.container}>
            {blog.title}
            <div>
            {documentToReactComponents(blog.post.json)}
            </div>
            
            
        </div>
        
    </Layout>
    
)

export default BlogTemplate