import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import RoomMainBanner from '../images/roomMain.png'
import RoomImg from '../images/roomSub.png'

const dummyLoop = [0, 1, 2, 3, 4, 5]
const rooms = () => {
    return (
        <>
            <style>
                {`
                    body,.site-header{background-color: #f5f9e5;}
                    *, .site-header a, a{color:black;}
                    .search-icon > svg{fill:black;}
                    .ham-menus-lines, .ham-menus-lines::before, .ham-menus-lines::after{background-color: black;} 
                `}
            </style>
            <Layout>
                <div className="container">
                    <div className="full-banner">
                        <div className="breadcrumb padding-b-5">
                            <Link to="/room-details">Rooms</Link>
                            <span className="seprator"> / </span>
                            <Link to="/room-details">Room Name</Link>
                        </div>
                        <img className="full-width" src={RoomMainBanner} alt="" />
                        <h5 className="room-name">Saga Room</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sequi officia fugiat earum in veniam quod aut voluptates magnam natus, voluptas qui ut blanditiis dolor? Numquam quia veritatis voluptatibus minima?</p>
                        <div className="room-img-main">
                            {
                                dummyLoop.map((data, index) =>{
                                    return(
                                        <div className="room-img" key={index}>
                                            <img className="full-width" src={RoomImg} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="room-bottom-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas mollitia culpa a, earum error eveniet optio, molestias deserunt facere repudiandae architecto. Voluptatibus nemo nobis dolorem, deleniti fugiat eligendi repudiandae quaerat.</div>
                        <Link className="more-retreat" to="/enquire">ENQUIRE </Link>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default rooms
