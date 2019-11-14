import React from 'react'
import footerStyles from './footer.module.scss'

import { FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa'
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
        <footer className={footerStyles.footer}>
            <div className={footerStyles.main}>
            <div>
            <Link  to="/" aria-label="home">
                <Img fixed={datatwo.file.childImageSharp.fixed}></Img>
                </Link>
                <p>210 S Locust St <br></br> Floyd, VA 24091</p>


                <div className={footerStyles.left}>
                 <FaPhone className={footerStyles.social} /> <a href="tel:+1-303-499-7111">+1 (303) 499-7111</a><br></br>
                <FaEnvelope className={footerStyles.social}/><a href="mailto:info@angelsintheattic.com">info@angelsintheattic.com</a><br></br>
                <a aria-label="Facebook" href="https://www.facebook.com/AngelsintheAtticFloydVa/">
                <FaFacebook className={footerStyles.social} />Facebook
                </a>
                </div>
                
                
            </div>
           
           
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/volunteer'>Volunteer</Link></li>
                    <li><Link to='/donate'>Donate</Link></li>
                    <li><Link to='/news'>News</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
            
            
            
              <form className={footerStyles.contact} action="https://formspree.io/xrgglapp" method="POST">
              <label htmlFor="name">Name:</label>
              <input id="name" placeholder="" type="text" name="name" />
              <label htmlFor="email">Email:</label>
              <input id="email" placeholder="" type="email" name="_replyto" />
              <label htmlFor="message">Message:</label>
              <textarea name="message" placeholder=""></textarea>
              <input className={footerStyles.sendbutton} type="submit" value="Send" />
              
              </form>

              </div>

              
            
        </footer>
    )
}

export default Footer