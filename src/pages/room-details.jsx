import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import { navigate } from 'gatsby';

const rooms = (props) => {
    const pageData = props.location.state && props.location.state.pageData;

    return (
        <>
            <style>
                {`
                    body,.site-header{background-color: #f5f9e5;}
                    *, .site-header a, a{color: #442220;}
                    .search-icon > svg{fill:black;}
                    .ham-menus-lines, .ham-menus::before, .ham-menus::after{background-color: black;} 
                `}
            </style>
            <Layout>
                {
                    pageData ?
                        <div className="container">
                            <div className="full-banner">
                                <div className="breadcrumb padding-b-5">
                                    <Link to="/rooms">Rooms</Link>
                                    <span className="seprator"> / </span>
                                    <span>{pageData.breadcrumbTitle}</span>
                                </div>
                                <img className="full-width img-cover" src={pageData.featuredImage} height="455" alt="" /> 
                                <h5 className="room-name">{pageData.roomHeading}</h5>
                                <p>{pageData.roomPara}</p>
                                <div className="room-img-main">
                                    {
                                        pageData.roomsGallery.map((data, index) =>{
                                            return(
                                                <div className="room-img" key={index}>
                                                    <img className="full-width img-cover" src={data} height="282" alt="" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="room-bottom-desc">{pageData.roomDescription}</div>
                                <Link className="more-retreat" to="/enquire">ENQUIRE </Link>
                            </div>
                        </div>
                    : navigate('/rooms/')
                }
            </Layout>
        </>
    )
}

export default rooms
