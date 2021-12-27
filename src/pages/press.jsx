import React from 'react'
import Layout from '../components/Layout'

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
                    body{background-color: #FDEDED;}
                    *, .site-header a, a{color:black;}
                `}
            </style>

            <Layout>
                <div className="container">
                    <div className="press-main">
                        {
                            presssData.map((data, index) => {
                                return(
                                    <div className="press-box text-center" key={index}>
                                        <h5 className="press-title white">{data.title}</h5>
                                        <p className="margin-b-0 white">"{data.description}"</p>
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

export default press
