import React from 'react'
import Layout from '../components/Layout'

const rooms = () => {
    return (
        <>
            <style>
                {`
                    body{background-color: #6C6A48;}
                    *, .site-header a, a{color:white;}
                    .search-icon > svg{fill:white;}
                `}
            </style>
            <Layout>
                <div className="container">
                    <div className="room-container flex">
                        <div className="relative cover-box">
                            <div className="shape"></div>
                            <div className="room-main">
                                <div className="room-box">INDIGO</div>
                                <div className="room-box">MANGO</div>
                                <div className="room-box">MANGO</div>
                            </div>
                        </div>

                        <div className="relative cover-box">
                            <div className="shape"></div>
                            <div className="room-main">
                                <div className="room-box">SAGE</div>
                                <div className="room-box">CHUNNA</div>
                                <div className="room-box">GREY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default rooms
