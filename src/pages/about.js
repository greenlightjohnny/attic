import React from 'react'
import Layout from '../components/layout'
import aboutStyles from './about.module.scss'
import { useStaticQuery, graphql } from "gatsby"

import SEO from '../components/SEO'


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
                <div className={aboutStyles.container}>
                <h1>{about.title}</h1>
                <p>testing testing</p>
                </div>
            ))}
                
    </Layout>
)

// const About = () => {

//     const data = useStaticQuery(graphql`
//     query {
//         allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(about)/"}}) {
//           edges {
//             node {
//               frontmatter {
//                 title
//                 history
//                 historytext
//                 donations
//                 donationstext
//                 creed
//                 creedtext
//               }
//             }
//           }
//         }
//       }
//     `)

//     return (

//         <Layout>
            
//             <SEO title="About" />

//             <section className={aboutStyles.container}>

//                 {data.allMarkdownRemark.edges.map((edge, index) => {
//                     return (
//                         <h1 key={index}>{edge.node.frontmatter.title}</h1>
//                     )
//                 })}
                

//                 {data.allMarkdownRemark.edges.map((edge, index) => {
//                     return (
//                         <article key={index} className={aboutStyles.section}>
//                             <h2>{edge.node.frontmatter.history}</h2>
//                             <p>{edge.node.frontmatter.historytext}</p>
//                         </article>
                        
//                         )
//                 })}
            

//             {data.allMarkdownRemark.edges.map((edge, index) => {
//                     return (
//                         <article key={index} className={aboutStyles.section}>
//                             <h2>{edge.node.frontmatter.donations}</h2>
//                             <p>{edge.node.frontmatter.donationstext}</p>
//                         </article>
                        
//                         )
//                 })}




//             <article className={aboutStyles.ending}>
//                 <h2>Angels in the Attic Creed:</h2>
//                 <p><span>
//                 “For I was hungry and you gave me something to eat,<br></br>

// I was thirsty and you gave me something to drink, <br></br>

// I was a stranger and you invited me in, <br></br>

// I needed clothes and you clothed me,<br></br>
// I was sick and you looked after me,<br></br>

// I was in prison and you came to visit me…<br></br>

// I tell you the truth, <br>
// </br>whatever you did for the least of these brothers of mine, <br></br>
// you did for me.” <br></br> </span>

// Matthew 25:35-36 and 40
//                 </p>
//             </article>
//             </section>

//         </Layout>
//     )
// }

// export default About