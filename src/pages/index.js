import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import indexStyles from "./index.module.scss"
import { FaHandsHelping, FaCalendarDay, FaHandHoldingHeart, FaNewspaper, FaChild, FaUserFriends } from 'react-icons/fa'

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
          <div
            className="fb-page"
            data-href="https://www.facebook.com/AngelsintheAtticFloydVa/"
            data-width="380"
            data-hide-cover="false"
            data-show-facepile="false"
          ></div>
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
            <Link className={indexStyles.more} to="/about">
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
            <Link className={indexStyles.more} to="/about">
              Read More
            </Link>
          </div>
        </article>
        <article>
            <FaCalendarDay className={indexStyles.social}></FaCalendarDay>
          {data.allMarkdownRemark.edges.map((edge, i) => {
            return (
              <div key={i}>
                <h3>{edge.node.frontmatter.titleh}</h3>
                <p>{edge.node.frontmatter.introh}</p>
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
            <Link className={indexStyles.more} to="/about">
              Read More
            </Link>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default MainPage
