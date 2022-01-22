import { Link } from 'gatsby'
import React from 'react'
import Layout from '../layouts/index'
import SEO from '../components/SEO'

const rooms = () => {
    return (
        <>
            <style>
                {`
                    body,.site-header{background-color: #6C6A48;}
                    *, .site-header a, a{color:white;}
                    .search-icon > svg{fill:white;}
                `}
            </style>
            <Layout>
                <SEO
                    title="Rooms"
                    description="Learn more about us who we are and what we do."
                />
                <div className="container">
                    <div className="m-heading text-center">Rooms</div>
                    <div className="room-container flex">
                        <div className="relative cover-box">
                            <div className="room-shape"></div>
                            <div className="room-main">
                                <Link to="/room-details" className="room-box">INDIGO</Link>
                                <Link to="/room-details" className="room-box">MANGO</Link>
                                <Link to="/room-details" className="room-box">MANGO</Link>
                            </div>
                        </div>

                        <div className="relative cover-box">
                            <div className="room-shape"></div>
                            <div className="room-main">
                                <Link to="/room-details" className="room-box">SAGE</Link>
                                <Link to="/room-details" className="room-box">CHUNNA</Link>
                                <Link to="/room-details" className="room-box">GREY</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default rooms
