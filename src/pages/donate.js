import React from 'react'
import aboutStyles from './about.module.scss'
import Layout from '../components/layout'



const Donate = () => {
    return (
        <Layout>

            <div className={aboutStyles.container}>
                <h1>Donations</h1>
                <p>DONATION DROPOFFS. The sole location for dropping off donations of all kinds, and for the Angels Furniture Store, is 112 Needmore Lane, Floyd, VA, which is located on the corner of Route 8 and Needmore Lane next door to the Harvest Moon Food Store. Donations can be dropped off 24 hours a day, every day. Most donations can be placed inside the minibarn storage building in the paved upper driveway. If left outside, the weather is most likely to damage them. Furniture donations can be placed on the concrete pad (under the overhang of the large building) located at the end of the lower gravel driveway which is just below the house, but it is preferred you do so during open hours.</p>
            </div>
        </Layout>
    )
}

export default Donate