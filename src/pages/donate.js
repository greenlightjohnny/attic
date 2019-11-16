import React from "react"
import aboutStyles from "./about.module.scss"
import Layout from "../components/layout"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { graphql } from 'gatsby'

export const query = graphql`
{
    about: contentfulAngelsDonatePage {
         
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
      <div className={aboutStyles.container}>
       <h1>{data.about.title}</h1>
       <div>{documentToReactComponents(data.about.body.json)}</div>
      </div>
    </Layout>
  

)

