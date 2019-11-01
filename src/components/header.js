import React from 'react'
import headerStyles from './header.module.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

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
        
                <Link  className={headerStyles.title} to="/">
                <Img fixed={datatwo.file.childImageSharp.fixed}></Img>
                </Link>
            
            
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home </Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/blog">Blog </Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/about">About </Link></li>
                    <li> <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/volunteer">Volunteer </Link></li>
                </ul>
            </nav>
            </header>
    )
}

export default Header