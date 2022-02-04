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
                roomPara: "Isla’s Ridge comprises two dwellings, with a total of five rooms. The Indigo room is a spacious room of ~226 sq ft. with a king size bed which can be separated into two single beds.  A writer’s desk overlooks an exceptional view of the ridge and land. ",
                roomDescription: "Rooms at Isla’s Ridge are intentionally devoid of a TV, phones and wifi is spotty at best. No, we do not feel this is necessary to solve for. All rooms include access to the pool, garden and a large library with over 300 cookbooks.",
                roomsGallery: [
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
                roomPara: "Isla’s Ridge comprises two dwellings, with a total of five rooms. The Mango room is ~248 sq. ft. with a king size bed, which can be separated into two beds.",
                roomDescription: "Rooms at Isla’s Ridge are intentionally devoid of a TV, phones and wifi is spotty at best. No, we do not feel this is necessary to solve for. All rooms include access to the pool, garden and a large library with over 300 cookbooks.",
                roomsGallery: [
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
                roomPara: "Isla’s Ridge comprises two dwellings, with a total of five rooms. The Grey room is the largest room, occupying the entire ground floor. At ~280 sq. ft., it features a king size bed, which can be separated into two beds, a walk-in wardrobe and private veranda on the ridge. ",
                roomDescription: "Rooms at Isla’s Ridge are intentionally devoid of a TV, phones and wifi is spotty at best. No, we do not feel this is necessary to solve for. All rooms include access to the pool, garden and a large library with over 300 cookbooks.",
                roomsGallery: [
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
                roomPara: "Isla’s Ridge comprises two dwellings, with a total of five rooms. The Chunna room is the same size as the Mango room and features a ridge view.  At ~248 sq. ft., it features a King size bed which can be separated into two single beds. The rising sun can be viewed from a perfectly placed writer’s desk. ",
                roomDescription: "Rooms at Isla’s Ridge are intentionally devoid of a TV, phones and wifi is spotty at best. No, we do not feel this is necessary to solve for. All rooms include access to the pool, garden and a large library with over 300 cookbooks.",
                roomsGallery: [
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
                roomPara: "Isla’s Ridge comprises two dwellings, with a total of five rooms. The Sage room is the same size as Indigo room and features a ridge view.  At ~226 sq. ft., it features a King size bed which can be separated into two single beds.",
                roomDescription: "Rooms at Isla’s Ridge are intentionally devoid of a TV, phones and wifi is spotty at best. No, we do not feel this is necessary to solve for. All rooms include access to the pool, garden and large library with over 300 cookbooks.",
                roomsGallery: [
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
