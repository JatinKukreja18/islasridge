import React from 'react'
import Layout from '../components/Layout'

const press = () => {
    return (
        <>
            <style>
                {`
                    body{background-color: #FDEDED;}
                    *, .site-header a, a{color:black;}
                `}
            </style>

            <Layout>
                <div className="container">
                    Press Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, nemo illum non nobis aliquid, quidem laudantium itaque minus dicta molestias recusandae iste voluptas fugiat mollitia ad pariatur nulla vel deleniti!
                </div>
            </Layout>
        </>
    )
}

export default press
