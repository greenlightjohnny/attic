import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from '../components/SEO'
const News = () => {

    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(home)/" } }) {
          edges {
            node {
              html
              
              frontmatter {
                titlef
              }
            }
          }
        }
      }
    `)
    const myhtml = {data.allMarkdownRemark.edges.map((edge, i) => {
        return (
            {}
        )
    })}
    return (
        <Layout>
            <SEO title="news"/>
            {data.allMarkdownRemark.edges.map((edge, i) => {
            return (
              <div key={i}>
                <h3>{edge.node.frontmatter.titlef}</h3>
                <div dangerouslySetInnerHTML={__html: {edge.node.html}}></div>
              </div>
            )
          })}
    </Layout>
    )
}
    
    

export default News