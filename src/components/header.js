import React from 'react'
import headerStyles from './header.module.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
//import Slider from 'react-burgers'
//import { Slider } from 'react-burgers'
import Sidebar from '../components/sidebar'

const Header = () => {
    
    const datatwo = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "logot.png" }) {
            childImageSharp {
                fixed(width: 170, height: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`)
    return (
        
        <header className={headerStyles.header}>
                
                <Link  className={headerStyles.title} to="/" aria-label="home">
                <Img fixed={datatwo.file.childImageSharp.fixed}></Img>
                </Link>
            
            
          

          
            <Sidebar />
          
        </header>

        
    )
}

export default Header