import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import aboutStyles from './about.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
export const query = graphql`
{
    about: contentfulLegal {
         
           slug
           title
           body {
               json
           }
           photo {
               fluid(maxWidth: 700) {
                ...GatsbyContentfulFluid
               }
               
           }
       }
 }
`

export default ({ data }) => (
    <Layout>
        <SEO title="legal" />
        <div className={aboutStyles.container}>
       <h1>{data.about.title}</h1>
       <div>{documentToReactComponents(data.about.body.json)}</div>
      </div>
    </Layout>
)