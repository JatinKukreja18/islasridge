import { Link } from 'gatsby'
import React from 'react'
// import Layout from '../layouts/index'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const rooms = () => {
    const roomsData = [
        {
            firstBox: true,
            name: "INDOGO",
            code: "indogo-room",
            nextPageData: {
                breadcrumbTitle: "Indogo Room",
                featuredImage: "",
                roomHeading: "Indogo Room",
                roomDescription: "Are you a teacher looking to host a series of workshops? A patron looking to sponsor an art residency?  Are you an employer looking to have colleagues grow from time together, or a family looking to reunite? We welcome all.",
                listRoom: [
                    {
                        imgage: ""
                    },
                ]
            }
        },
        {
            firstBox: true,
            name: "MANGO",
            code: "mango-room",
            nextPageData: {
                breadcrumbTitle: "Mango Room",
                featuredImage: "",
                roomHeading: "Mango Room",
                roomDescription: "Are you a teacher looking to host a series of workshops? A patron looking to sponsor an art residency?  Are you an employer looking to have colleagues grow from time together, or a family looking to reunite? We welcome all.",
                listRoom: [
                    {
                        imgage: ""
                    },
                ]
            }
        },
        {
            firstBox: false,
            name: "SAGE",
            code: "saga-room",
            nextPageData: {
                breadcrumbTitle: "Saga Room",
                featuredImage: "",
                roomHeading: "Saga Room",
                roomDescription: "Are you a teacher looking to host a series of workshops? A patron looking to sponsor an art residency?  Are you an employer looking to have colleagues grow from time together, or a family looking to reunite? We welcome all.",
                listRoom: [
                    {
                        imgage: ""
                    },
                ]
            }
        },
        {
            firstBox: false,
            name: "CHUNNA",
            code: "chunna-room",
            nextPageData: {
                breadcrumbTitle: "Chunna Room",
                featuredImage: "",
                roomHeading: "Chunna Room",
                roomDescription: "Are you a teacher looking to host a series of workshops? A patron looking to sponsor an art residency?  Are you an employer looking to have colleagues grow from time together, or a family looking to reunite? We welcome all.",
                listRoom: [
                    {
                        imgage: ""
                    },
                ]
            }
        },
        {
            firstBox: false,
            name: "GREY",
            code: "grey-room",
            nextPageData: {
                breadcrumbTitle: "Grey Room",
                featuredImage: "",
                roomHeading: "Grey Room",
                roomDescription: "Are you a teacher looking to host a series of workshops? A patron looking to sponsor an art residency?  Are you an employer looking to have colleagues grow from time together, or a family looking to reunite? We welcome all.",
                listRoom: [
                    {
                        imgage: ""
                    },
                ]
            }
        }
    ]

    console.log(roomsData)
    return (
        <>
            <style>
                {`
                    body,.site-header{background-color: #6C6A48;}
                    *, .site-header a, a{color:#f5f9e5;}
                    .search-icon > svg{fill:#f5f9e5;}
                `}
            </style>
            <Layout>
                <SEO
                    title="Rooms"
                    description="Learn more about us who we are and what we do."
                />
                <div className="container">
                    <div className="m-heading text-center">Rooms</div>
                    <div className="room-container flex flex-center">
                        <div className="relative cover-box">
                            <div className="room-shape"></div>
                            <div className="room-main">
                                {
                                    roomsData.map((data, index) =>{
                                        if(data.firstBox){
                                            return(
                                                <Link key={index} to={`/room/${data.code}`} state={{pageData: data.nextPageData}} className="room-box">{data.name}</Link>
                                            )
                                        }
                                    })
                                }
                                <div className="room-box"></div>
                            </div>
                        </div>

                        <div className="relative cover-box">
                            <div className="room-shape"></div>
                            <div className="room-main">
                                {
                                    roomsData.map((data, index) =>{
                                        if(!data.firstBox){
                                            return(
                                                <Link key={index} to={`/room/${data.code}`} state={{pageData: data.nextPageData}} className="room-box">{data.name}</Link>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default rooms
