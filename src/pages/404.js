import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import aboutStyles from './about.module.scss'
import Head from '../components/head'


const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <div className={aboutStyles.container}>
            <h1>Sorry, that page appears to be missing</h1>
            <p className={aboutStyles.link}><Link to="/" className={aboutStyles.link}>Home</Link></p>
            </div>
            
        </Layout>
    )
}

export default NotFound