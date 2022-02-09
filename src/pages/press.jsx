import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Link } from 'gatsby'

const presssData = [
    {
        title: "AD1",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        title: "AD2",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit."
    },
    {
        title: "AD3",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor"
    },
    {
        title: "AD4",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing"
    },
    {
        title: "AD5",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        title: "AD6",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing"
    },
    {
        title: "AD7",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit."
    },
    {
        title: "AD8",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing"
    },
    {
        title: "AD9",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor"
    } 
]
const press = () => {
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
                    title="Press"
                    description="Learn more about us who we are and what we do."
                />
                <div className="container space-for-header">
                    <div className="m-heading text-center">Press</div>
                    <div className="press-main padding-t-50">
                        {
                            presssData.map((data, index) => {
                                return(
                                    <Link href="https://www.google.com/" target="_blank" className="press-box text-center" key={index}>
                                        <div className='press-content-box'>
                                            <h5 className="press-title">{data.title}</h5>
                                            <p className="margin-b-0 blog-para">"{data.description}"</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default press
