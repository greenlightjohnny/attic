import React from 'react'
import Img from 'gatsby-image'

import { Link, graphql, useStaticQuery } from 'gatsby'


const Logo = () => {
    const datatwo = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "logot.png" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`)

    return (
        <Link to="/" aria-label="home">
        <Img fluid={datatwo.file.childImageSharp.fluid}></Img>
        </Link>
        
    )
}

export default Logo