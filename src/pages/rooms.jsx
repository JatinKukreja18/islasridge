import { Link } from 'gatsby'
import React from 'react'
// import Layout from '../layouts/index'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import {roomsData} from '../components/RoomsData'
import bottomImg from '../images/rooms_img.png'

const rooms = () => {

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
                <div className="container space-for-header full-vh-strict rooms-page">
                    <div className="m-heading text-center">Rooms</div>
                    <div className="room-container flex flex-center">
                        <div className="relative cover-box">
                            <div className="room-shape"></div>
                            <div className="room-main">
                                {
                                    roomsData.map((data, index) =>{
                                        if(data.firstBox){
                                            return(
                                                <Link key={index} to={`/room/${data.code}/`} state={{pageData: data.nextPageData}} className="room-box">{data.name}</Link>
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
                                                <Link key={index} to={`/room/${data.code}/`} state={{pageData: data.nextPageData}} className="room-box">{data.name}</Link>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="room-bottom-img">
                        <img src={bottomImg} alt=""/>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default rooms
