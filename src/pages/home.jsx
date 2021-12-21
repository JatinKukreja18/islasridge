import React from 'react'
import Layout from '../components/Layout'

const Home = () => {
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
                    Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque mollitia aliquam sint qui natus quos nobis non dicta excepturi, cum, facere quisquam, explicabo exercitationem harum iure in perspiciatis assumenda tempora?
                </div>
            </Layout>
        </>
    )
}

export default Home
