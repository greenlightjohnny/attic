import React from 'react'
import Layout from '../components/layout'
import {  graphql } from 'gatsby'

//import SEO from '../components/SEO'


    export const query = graphql`
        {
           about: allContentfulAngelsAboutPage {
                nodes {
                  slug
                  title
                }
              }
        }
    `


    export default ({ data }) => (
        <Layout>
            {data.about.nodes.map(about => (
                <div key={`about-${about.slug}`}>
                    <h2>{about.title}</h2>
                </div>
            ))}
        </Layout>
    )
        