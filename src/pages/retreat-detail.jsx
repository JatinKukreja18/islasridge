import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import dummyImg from '../images/imgRetreat.png'
import kiteImg from '../images/kitePink.png'

// const dummyLoop = [0, 1, 2, 3, 4, 5];
const RetreatDetail = (props) => {
    const pageData = props.location.state && props.location.state.pageData;

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
                    pageData &&
                        <div className="container">
                            <div className="breadcrumb padding-b-5">
                                <Link to="/retreats">Retreats</Link>
                                <span className="seprator"> / </span>
                                <span className="added">{pageData.breadcrumbTitle}</span>
                            </div>
                            {
                                pageData.listRetreats.map((data, index) =>{
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
                }
            </Layout>
        </>
    );
}

export default RetreatDetail;
