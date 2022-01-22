import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import dummyImg from '../images/imgRetreat.png'
import kiteImg from '../images/kitePink.png'

const dummyLoop = [0, 1, 2, 3, 4, 5];
const RetreatDetail = (props) => {
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
                <div className="container">
                    <div className="breadcrumb padding-b-5">
                        <Link to="/room-details">Retreats</Link>
                        <span className="seprator"> / </span>
                        <Link to="/room-details">Retreats Name</Link>
                    </div>
                    {
                        dummyLoop.map((data, index) =>{
                            return(
                                <div className="retreat-main" key={index}>
                                    <div>
                                        <img className="full-width left-img img-cover" height="100%" src={dummyImg} alt="" />
                                    </div>
                                    <div className="flex align-v-center retreat-heading-main">
                                        <div className="">
                                            <div className="flex align-v-center retreat-heading">
                                                <img className="" src={kiteImg} alt="" />
                                                <h5 className="retrea-title padding-left-20">Cooking</h5>
                                            </div>
                                            <p className="margin-b-0 retrea-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ipsam earum id quos quia architecto, culpa, aliquid veniam laborum quis eaque voluptas ipsum labore voluptatum dignissimos necessitatibus fugiat. Laudantium, facilis.</p>
                                            <Link className="more-retreat" to="/enquire">ENQUIRE</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Layout>
        </>
    );
}

export default RetreatDetail;
