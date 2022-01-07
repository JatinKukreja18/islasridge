import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

const retreatsData = [
    {
        title: "A la carte",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        title: "Table d'hote",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit."
    },
]

const retreats = () => {
    return (
        <>
              <style>
                {`
                    body,.site-header{background-color: #FDEDED;}
                    *, .site-header a, a{color:black;}
                    .ham-menus-lines, .ham-menus::before, .ham-menus::after{background-color: black;} 
                `}
            </style>
            <Layout>    
                <div className="container">
                    <div className="m-heading text-center">Retreats</div>
                    <div className="retreats-main padding-t-50">
                        {
                            retreatsData.map((data, index) => {
                                return(
                                    <div className="retreats-box" key={index}>
                                        <h5 className="retreats-title">{data.title}</h5>
                                        <p className="margin-b-0 retreats-desc">{data.description}</p>
                                        <Link className="more-retreat" to="/retreat-detail">MORE</Link>
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
