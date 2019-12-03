import React from 'react'
import Layout from '../components/layout'
import SimpleMap from '../components/gmap'
import SEO from '../components/SEO'
import aboutStyles from "./about.module.scss"

const Contact = () => {
    return (
        <Layout>
            <SEO title="Location"/>
            <div className={aboutStyles.container}>
            <h1>Location</h1>
            <p> 210 South Locust Street<br></br>
                Floyd, VA 24091</p>
                
            <SimpleMap />
            </div>
        </Layout>
    )
}

export default Contact