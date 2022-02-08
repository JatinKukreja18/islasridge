import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import { navigate } from 'gatsby';
import { roomsData } from '../components/RoomsData';
import SEO from '../components/SEO';

const rooms = (props) => {
    // const pageData = props.location.state && props.location.state.pageData;
    const pageData = roomsData.filter((pageData) =>{
        return pageData.code === props.roomName;
    })

    const filterPageData = pageData[0] ? pageData[0].nextPageData : false;
    
    console.log(props)
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
                    filterPageData ?
                        <>
                            <SEO
                                title= {`${filterPageData.breadcrumbTitle}`}
                                description={`${filterPageData.roomDescription}`}
                            />

                            <div className="container space-for-header">
                                <div className="full-banner">
                                    <div className="breadcrumb padding-b-5">
                                        <Link to="/rooms">Rooms</Link>
                                        <span className="seprator"> / </span>
                                        <span>{filterPageData.breadcrumbTitle}</span>
                                    </div>
                                    <img className="full-width img-cover" src={filterPageData.featuredImage} height="455" alt="" /> 
                                    <h5 className="room-name">{filterPageData.roomHeading}</h5>
                                    <p>{filterPageData.roomPara}</p>
                                    <div className="room-img-main">
                                        {
                                            filterPageData.roomsGallery.map((data, index) =>{
                                                return(
                                                    <div className="room-img" key={index}>
                                                        <img className="full-width img-cover" src={data} height="282" alt="" />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="room-bottom-desc">{filterPageData.roomDescription}</div>
                                    <Link className="more-retreat" to="/enquire">ENQUIRE </Link>
                                </div>
                            </div>
                        </>
                    : typeof window !== `undefined` && navigate('/404/')
                }
            </Layout>
        </>
    )
}

export default rooms
