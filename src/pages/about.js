import React from 'react'
import Layout from '../components/layout'
import aboutStyles from './about.module.scss'
import { Link, useStaticQuery, graphql } from "gatsby"


const About = () => {

    return (

        <Layout>

            <section className={aboutStyles.container}>
                <h1>About</h1>
            <article className={aboutStyles.section}>
                <h2>Our History</h2>
                <p>Angels in the Attic began with a seed of an idea from its founder Kathy Blackwell. Kathy provided countless hours over the years she served as director, making Angels a true ministry while helping the people of Floyd County. Opening in March of 2000, Angels in the Attic operated in two different locations before finding the “forever home” at 201 South Locust Street in 2002. This building, near the center of the Town of Floyd, Virginia, was paid off in 14 months with fundraisers and community support.

Mid 2011, the Angels Boutique was opened. This adjacent retail space was created to sell the many donations that were new, unique, vintage, collectible, and even re-purposed. Dealers are welcome to purchase these items.

Also in 2011, a house with outbuildings and acreage was purchased that was located only a quarter mile away from downtown at 112 Needmore Lane in Floyd. This property is used as the Donation Center. This facility is convenient for the community to drop off their donated goods and is open seven days a week. Volunteers at the donation center sort, box, label and deliver donations to the stores.</p>
            </article>

            <article className={aboutStyles.section}>
                <h2>Honoring Donations</h2>
                <p>
                Angels is committed to honoring the gift of each donation by restocking gently used, like new and new items each day of operation. Every effort is made to ensure donations are first available for sale in Angels in the Attic stores and then shared with other not-for-profit human service agencies such as the Rescue Mission, Salvation Army and Goodwill. 
                </p>

            </article>


            <article className={aboutStyles.ending}>
                <h2>Angels in the Attic Creed:</h2>
                <p><span>
                “For I was hungry and you gave me something to eat,<br></br>

I was thirsty and you gave me something to drink, <br></br>

I was a stranger and you invited me in, <br></br>

I needed clothes and you clothed me,<br></br>
I was sick and you looked after me,<br></br>

I was in prison and you came to visit me…<br></br>

I tell you the truth, <br>
</br>whatever you did for the least of these brothers of mine, <br></br>
you did for me.” <br></br> </span>

Matthew 25:35-36 and 40
                </p>
            </article>
            </section>

        </Layout>
    )
}

export default About