import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import {retreatsData} from '../components/RetreatData'

const retreats = () => {
    return (
        <>
              <style>
                {`
                    body,.site-header{background-color: #FDEDED;}
                    *, .site-header a, a{color: #442220;}
                    .ham-menus-lines, .ham-menus::before, .ham-menus::after{background-color: black;} 
                `}
            </style>
            <Layout>    
                <SEO
                    title="Retreats"
                    description="Learn more about us who we are and what we do."
                />
                <div className="container space-for-header">
                    <div className="m-heading text-center">Retreats</div>
                    <div className="retreats-main padding-t-50">
                        {
                            retreatsData.map((data, index) => {
                                return(
                                    <div className="retreats-box" key={index}>
                                        <h5 className="retreats-title">{data.title}</h5>
                                        <p className="margin-b-0 retreats-desc">{data.description}</p>
                                        {/* <Link className="more-retreat" state={{ pageData: data.nextPageData }} to={`/retreat/${data.code}`}>MORE</Link> */}
                                        <Link className="more-retreat" to={`/retreat/${data.code}/`}>MORE</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default retreats
