import React from 'react'
import Layout from '../components/Layout'
import { RichText } from 'prismic-reactjs'

const Home = ({bannerContent}) => {
    console.log(bannerContent) 
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
                <div className="container home-container">
                    <div className="relative banner-main">
                        {bannerContent && 
                        <>
                        <img height="500" width="100%" src={bannerContent.background.url} alt="" /> 
                        <div className="banner-content">
                            <h5 className="banner-heading">'{RichText.asText(bannerContent.title.raw)} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum'</h5>
                            <p className="margin-b-0 home-banner-title">-{RichText.asText(bannerContent.credits.raw)}</p>
                        </div>
                        </>
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Home
