import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import kiteImg from '../images/kitePink.png'
import { navigate } from 'gatsby';
import {retreatsData} from '../components/RetreatData';
import SEO from '../components/SEO'

const RetreatDetail = (props) => {
    // const pageData = props.location.state && props.location.state.pageData;
    const pageData = retreatsData.filter((pageData) =>{
        return pageData.code === props.retreatName;
    })

    const filterPageData = pageData[0] ? pageData[0].nextPageData : false;

    console.log(props)
    return (
        <>
            <style>
                {`
                    body,.site-header{background-color: #ffefd9;}
                    *, .site-header a, a{color: #442220;}
                    .ham-menus-lines, .ham-menus::before, .ham-menus::after{background-color: black;} 
                `}
            </style>
            <Layout>
                {
                    filterPageData ?
                        <>
                            <SEO
                                title= {`${filterPageData.breadcrumbTitle}`}
                                description="Learn more about us who we are and what we do."
                            />
                            <div className="container space-for-header">
                                <div className="breadcrumb padding-b-5">
                                    <Link to="/retreats">Retreats</Link>
                                    <span className="seprator"> / </span>
                                    <span className="added">{filterPageData.breadcrumbTitle}</span>
                                </div>
                                {
                                    filterPageData.listRetreats.map((data, index) =>{
                                        return(
                                            <div className="retreat-main" key={index}>
                                                <div>
                                                    <img className="full-width left-img img-cover" src={data.image} height="540" alt="" />
                                                </div>
                                                <div className="flex align-v-center retreat-heading-main">
                                                    <div className="">
                                                        <div className="flex align-v-center retreat-heading">
                                                            <img className="" src={kiteImg} alt="" />
                                                            <h5 className="retrea-title padding-left-20">{data.heading}</h5>
                                                        </div>
                                                        <p className="margin-b-0 retrea-desc">{data.description}</p>
                                                        <Link className="more-retreat" to="/enquire">ENQUIRE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                    : typeof window !== `undefined` && navigate('/404/')
                }
            </Layout>
        </>
    );
}

export default RetreatDetail;
