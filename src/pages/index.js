import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from 'gatsby'
import indexStyles from './index.module.scss'





const MainPage = () => {

      const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                intro
              }
            }
          }
        }
      }
      `)

      console.log(data);

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
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                        <div>
                          <h3>{edge.node.frontmatter.title}</h3>
                          <p>{edge.node.frontmatter.intro}</p> 
                          </div>
                    )
                    })}
                    
                    <div className={indexStyles.morec}>
                    <Link className={indexStyles.more} to="/about">Read More</Link>
                    </div>
                    
                </article>
                <article>
                    <h3>News</h3>
                    <div className="fb-page" 
  data-href="https://www.facebook.com/AngelsintheAtticFloydVa/"
  data-width="380" 
  data-hide-cover="false"
  data-show-facepile="false"></div>
                    <div className={indexStyles.morec}>
                    <Link className={indexStyles.more} to="/about">Read More</Link>
                    </div>
                </article>
                <article>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <div>
                                <h3>{edge.node.frontmatter.titlev}</h3>
                                <p>{edge.node.frontmatter.introv}</p>
                            </div>
                        )
                    })}
                
                        <div className={indexStyles.morec}>
                        <Link className={indexStyles.more} to="/about">Read More</Link>
                        </div>
                </article>
                <article>
                    <h3>Donate</h3>
                    <p>DONATION DROPOFFS. The sole location for dropping off donations of all kinds, and for the Angels Furniture Store, is 112 Needmore Lane, Floyd, VA, which is located on the corner of Route 8 and Needmore Lane next door to the Harvest Moon Food Store. Donations can be dropped off 24 hours a day, every day. Most donations can be placed inside the minibarn storage building in the paved upper driveway. If left outside, the weather is most likely to damage them. Furniture donations can be placed on the concrete pad (under the overhang of the large building) located at the end of the lower gravel driveway which is just below the house, but it is preferred you do so during open hours.</p>

                    <div className={indexStyles.morec}>
                    <Link className={indexStyles.more} to="/about">Read More</Link>
                    </div>
                </article>
                <article>
                    <h3>Hours</h3>
                    <p>
                    Angels in the Attic hours and days of operation:

Tuesdays – 9:00am to 4:00pm

Fridays – 9:00am to 7:00pm April until Christmas and 9:00am to 4:00pm January through March

Saturdays – 9:00am to 2:00pm 

Angels Boutique hours and days of operation:

Tuesdays – 10:am to 4:00pm

Fridays – 10:00am to 7:00pm April until Christmas and 10:00am to 4:00pm January through March

Saturday – 10:00am to 2:00pm
                    </p>
                    <div className={indexStyles.morec}>
                    <Link className={indexStyles.more} to="/about">Read More</Link>
                    </div>
                </article>
                <article>
                    <h3>Friends</h3>
                    <p>Madness</p>
                    <div className={indexStyles.morec}>
                    <Link className={indexStyles.more} to="/about">Read More</Link>
                    </div>
                </article>

            </section>
        </Layout>
    )
}

export default MainPage