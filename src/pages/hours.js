import React from 'react'
import Layout from '../components/layout'
import aboutStyles from './about.module.scss'
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import SEO from '../components/SEO'

 export const query = graphql`
 {
    about: contentfulHours {
         
           slug
           title
           body {
               json
           }
       }
 }
 `

 export default ({ data }) => (
     <Layout>
         <SEO title="hours" />
         <div className={aboutStyles.container}>
             <h1>{data.about.title}</h1>
             <div>
                 {documentToReactComponents(data.about.body.json)}
             </div>
         </div>
     </Layout>
 )