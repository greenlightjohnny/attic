import React from 'react'
import Layout from '../components/layout'
import aboutStyles from './about.module.scss'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Head from '../components/head'
import SEO from '../components/SEO'

const Volunteeer = () => {

    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "wanted.jpg" }) {
                childImageSharp {
                    fixed(width: 300, height: 400) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <SEO title="Volunteer" />
            <section className={aboutStyles.container}>
            <h1>Volunteer</h1>

            <article className={aboutStyles.section}>
            <h3>We Want YOU</h3>
            <div className={aboutStyles.flex}>
                <p>
            Angels in The Attic Really, Really Need YOU as a Volunteer! <br></br>

Perhaps you have only a couple hours available — THAT IS FINE<br></br>

Perhaps you can’t commit to regular hours — THAT IS FINE TOO<br></br>

Angels is very very flexible and will accommodate your preferences
            </p>
            <Img fixed={data.file.childImageSharp.fixed}></Img>
            </div>
            
            </article>

            <article className={aboutStyles.section}>
                <h3>How to Volunteer</h3>
                <p>
                Contact Gennell Vest at 540-745-4500 for the Attic and the Angels Christmas Store.<br></br> Rhonda Daiber at 540-230-1793 for the Boutique or Marie Daniel for the Angels Donation Center or the Angels Furniture Store.<br></br>
Email angelsfloydinfo@gmail.com
Inquire at any of the Angels in the Attic Stores during operating hours
                </p>
                
            </article>

            <article className={aboutStyles.section}></article>

            </section>
                
            


        </Layout>
    )
}

export default Volunteeer