import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Link } from 'gatsby'

const NotFoundPage = () => (

  <>
    <style>
      {`
          body,.site-header{background-color: #F5F9E3;}
          *, .site-header a, a{color: #442220;}
          .ham-menus-lines, .ham-menus::before, .ham-menus::after{background-color: black;} 
      `}
    </style>
    <Layout>
      <SEO title="Not found" />
      <main className="container space-for-header full-vh-strict">
          <div className="error-page">
            <div className="error-text font1">404</div>
            <div className="error-text error-text-page font1">PAGE NOT FOUND</div>
            <p className='font1'>The page you are looking for does not exist. It might have been moved or deleted</p>
            <br />
            <Link className="to-home font1" to="/">
              BACK TO HOME
            </Link>
          </div>
      </main>
    </Layout>
  </>
)

export default NotFoundPage
