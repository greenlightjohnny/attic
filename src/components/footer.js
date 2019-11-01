import React from 'react'
import footerStyles from './footer.module.scss'

import { FaFacebook } from 'react-icons/fa'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Footer = () => {
    const datatwo = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "logot.png" }) {
            childImageSharp {
                fixed(width: 270, height: 80) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`)
    return (
        <footer className={footerStyles.main}>

            <div>
            <Link  to="/">
                <Img fixed={datatwo.file.childImageSharp.fixed}></Img>
                </Link>
                <p>210 S Locust St <br></br> Floyd, VA 24091</p>
                <p>(540) 745-4500 <br>
                </br>angelsfloydinfo@gmail.com  </p>
            </div>
           
           
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/volunteer'>Volunteer</Link></li>
                    <li><Link>Donate</Link></li>
                    <li><Link>News</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
            </nav>
            
            
            <div>
                <a href="https://www.facebook.com/AngelsintheAtticFloydVa/">
                <FaFacebook className={footerStyles.social} />
                </a>
                
            </div>
        </footer>
    )
}

export default Footer