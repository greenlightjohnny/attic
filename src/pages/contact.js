import React from 'react'
import Layout from '../components/layout'
import SimpleMap from '../components/gmap'
import SEO from '../components/SEO'

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact"/>
            <h1>Location</h1>
            <SimpleMap />
        </Layout>
    )
}

export default Contact