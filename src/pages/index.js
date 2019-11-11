import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import indexStyles from "./index.module.scss"
import { FaHandsHelping, FaCalendarDay, FaHandHoldingHeart, FaNewspaper, FaChild, FaUserFriends } from 'react-icons/fa'

import SEO from '../components/SEO'

import Example from '../components/reface'
import aboutStyles from './about.module.scss'

const MainPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(home)/"}}) {
        edges {
          node {
            frontmatter {
              title
              intro
              introv
              titlev
              titled
              introd
              titleh
              introh
              titlef
              introf
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
        <SEO title="Home"/>
      <div className={indexStyles.background}>
        <div className={indexStyles.center}>
          <h2>
            <span>Angels </span>in The Attic
          </h2>
          <p>Floyd, VA</p>
        </div>
      </div>

      <section className={indexStyles.flex}>
        <article>
            <FaHandHoldingHeart className={indexStyles.social}></FaHandHoldingHeart>
          {data.allMarkdownRemark.edges.map((edge, i) => {
            return (
              <div key={i}>
                <h3>{edge.node.frontmatter.title}</h3>
                <p>{edge.node.frontmatter.intro}</p>
              </div>
            )
          })}

          <div className={indexStyles.morec}>
            <Link className={indexStyles.more} to="/about">
              Read More
            </Link>
          </div>
        </article>
        <article>
            <FaNewspaper className={indexStyles.social}></FaNewspaper>
          <h3>News</h3>
          <Example />
          <div className={indexStyles.morec}>
            <Link className={indexStyles.more} to="/about">
              Read More
            </Link>
          </div>
        </article>
        <article>
            <FaHandsHelping className={indexStyles.social}></FaHandsHelping>
          {data.allMarkdownRemark.edges.map((edge, i) => {
            return (
              <div key={i}>
                <h3>{edge.node.frontmatter.titlev}</h3>
                <p>{edge.node.frontmatter.introv}</p>
              </div>
            )
          })}

          <div className={indexStyles.morec}>
            <Link className={indexStyles.more} to="/volunteer">
              Read More
            </Link>
          </div>
        </article>
        <article>
            <FaChild className={indexStyles.social}></FaChild>
          {data.allMarkdownRemark.edges.map((edge, i) => {
            return (
              <div key={i}>
                <h3>{edge.node.frontmatter.titled}</h3>
                <p>{edge.node.frontmatter.introd}</p>
              </div>
            )
          })}

          <div className={indexStyles.morec}>
            <Link className={indexStyles.more} to="/donate">
              Read More
            </Link>
          </div>
        </article>
        <article>
            <FaCalendarDay className={indexStyles.social}></FaCalendarDay>
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
              <td>9am - 7pm</td>
            </tr>
            <tr>
              <td>Saturdays</td>
              <td>10am - 2pm</td>
            </tr>
          </tbody>
        </table>
          <div className={indexStyles.morec}>
            <Link className={indexStyles.more} to="/about">
              Read More
            </Link>
          </div>
        </article>
        <article>
            <FaUserFriends className={indexStyles.social}></FaUserFriends>
          {data.allMarkdownRemark.edges.map((edge, i) => {
            return (
              <div key={i}>
                <h3>{edge.node.frontmatter.titlef}</h3>
                <p>{edge.node.frontmatter.introf}</p>
              </div>
            )
          })}
          <div className={indexStyles.morec}>
            <Link className={indexStyles.more} to="/donate">
              Read More
            </Link>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default MainPage
