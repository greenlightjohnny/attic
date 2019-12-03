import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import indexStyles from "./index.module.scss"
import { FaHandsHelping, FaCalendarDay, FaHandHoldingHeart, FaNewspaper, FaChild, FaUserFriends } from 'react-icons/fa'

import SEO from '../components/SEO'
import Logo from '../components/logo'

//import aboutStyles from './about.module.scss'
import Faceex from '../components/faceexport'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// const MainPage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(home)/"}}) {
//         edges {
//           node {
//             html
//             frontmatter {
//               title
//               intro
//               introv
//               titlev
//               titled
              
//               titleh
//               introh
//               titlef
//               introf
//               titleb
//             }
//           }
//         }
//       }
//     }

    
//   `)

export const query = graphql`
{
    about: contentfulAngelsHomePage {
         
           
           aboutTitle
           donateTitle
           donateBody {
             json
           }
           aboutBody {
               json
           }
           hours
           hoursBody {
             json
           }
           volunteerTitle
           volunteerBody {
             json
           }
       }
 }
`
  
export default ({ data }) => (
  
    <Layout>
        <SEO title="Home"/>
      <div className={indexStyles.background}>
        <div className={indexStyles.max}>
        <Logo />
        </div>
        <div className={indexStyles.center}>
          <h1 className={indexStyles.outline}>A non-profit ministry devoted to serving the community through sales of donated items at our stores</h1>
            
          </div>
        {/* <div className={indexStyles.center}>
          <h2>
            <span>Angels </span>in The Attic
          </h2>
          <div className={indexStyles.outline}>
            A non-profit ministry devoted to serving the community through sales of donated items at our stores
          </div>
        </div> */}
      </div>

      <section className={indexStyles.flex}>
        <article>
            <FaHandHoldingHeart className={indexStyles.social}></FaHandHoldingHeart>
            <h2>{data.about.aboutTitle}</h2>
            <div>{documentToReactComponents(data.about.aboutBody.json)}</div>
          <div className={indexStyles.morec}>
            <Link className={indexStyles.more} to="/about">
              Read More
            </Link>
          </div>
        </article>
        <article>
            <FaNewspaper className={indexStyles.social}></FaNewspaper>
          <h3>News</h3>
          <Faceex />
          <div className={indexStyles.morec}>
            <a className={indexStyles.more} aria-label="Facebook" href="https://www.facebook.com/AngelsintheAtticFloydVa/">
              Facebook
            </a>
          </div>
        </article>
        <article>
            <FaCalendarDay className={indexStyles.social}></FaCalendarDay>
            <h3>{data.about.hours}</h3>
            <div className={indexStyles.inline}>{documentToReactComponents(data.about.hoursBody.json)}</div>
            {/* <h3>Hours</h3>
            <table className={aboutStyles.table}>
          <tbody>
            <tr>
              <th>Angels in The Attic</th>
              <td></td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>9am - 4pm</td>
            </tr>
            <tr>
              <td>Fridays</td>
              <td>9am - 7pm</td>
            </tr>
            <tr>
              <td>Saturdays</td>
              <td>9am - 2pm</td>
            </tr>
          </tbody>
        </table>

        <table className={aboutStyles.table}>
          <tbody>
            <tr>
              <th>Angels Botique</th>
              <td></td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>10am - 4pm</td>
            </tr>
            <tr>
              <td>Fridays</td>
              <td> 9am - 7pm</td>
            </tr>
            <tr>
              <td>Saturdays</td>
              <td>10am - 2pm</td>
            </tr>
          </tbody>
        </table> */}
          <div className={indexStyles.morec}>
            <Link className={indexStyles.more} to="/hours">
              Hours
            </Link>
          </div>
        </article>
        
        <article>
            <FaChild className={indexStyles.social}></FaChild>
              
           
            <h3>{data.about.donateTitle}</h3>
            <div>{documentToReactComponents(data.about.donateBody.json)}</div>

          <div className={indexStyles.morec}>
            <Link className={indexStyles.more} to="/donate">
              Donate
            </Link>
          </div>
        </article>
        
        <article>
            <FaHandsHelping className={indexStyles.social}></FaHandsHelping>
            <h3>{data.about.volunteerTitle}</h3>
            <div>{documentToReactComponents(data.about.volunteerBody.json)}</div>
          <div className={indexStyles.morec}>
            <Link className={indexStyles.more} to="/volunteer">
              Volunteer
            </Link>
          </div>
        </article>
        <article>
            <FaUserFriends className={indexStyles.social}></FaUserFriends>
          
          <div className={indexStyles.morec}>
            <Link className={indexStyles.more} to="/contact">
              Location
            </Link>
          </div>
        </article>
      </section>
    </Layout>
  
)


