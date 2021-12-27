import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomepageBanner from '../components/HomepageBanner'
import SplashBanner from '../components/SplashBanner'
// import MainContent from '../components/MainContent'

import './../styles/reset.css';
import './../styles/common.css';
import './../styles/style.css';
import Header from '../components/Header'
import Home from './home'

const Homepage = ({data}) => {
  // console.log(data);
  if (!data) return null
  // const document = data.allPrismicHomepage.edges[0].node.data
  const splashDocument = data.allPrismicSplash.edges[0].node.data
  // const bannerContent = {
  //   title: document.banner_title,
  //   description: document.banner_description,
  //   link: document.banner_link,
  //   linkLabel: document.banner_link_label,
  //   background: document.banner_background,
  // }
  const splashBannerContent = {
    title: splashDocument.title,
    description: splashDocument.sub_title,
    email: splashDocument.contact_us_email,
    extraText: splashDocument.additional_text,
    background: splashDocument.banner,
    credits: splashDocument.image_credits,
  }
  return (
    <>
      
      <SEO title="Isla's Ridge" />
      <Home bannerContent={splashBannerContent} />
      {/* <SplashBanner bannerContent={splashBannerContent} /> */}
    </>
  )
  // return (
  //   <Layout isHomepage>
  //     <SEO title="Home" />
  //     <SplashBanner bannerContent={splashBannerContent} />
  //     {/* <HomepageBanner bannerContent={bannerContent} /> */}
  //     <MainContent />
  //   </Layout>
  // )
}
export const query = graphql`
  query Homepage {
    allPrismicHomepage {
      edges {
        node {
          data {
            banner_title {
              raw
            }
            banner_description {
              raw
            }
            banner_link {
              url
              type
              uid
            }
            banner_link_label {
              raw
            }
            banner_background {
              url
              thumbnails
              alt
            }
          }
        }
      }
    }
  allPrismicSplash {
    edges {
      node {
        data {
          title {
            raw
          }
          sub_title {
            raw
          }
          additional_text {
            raw
          }
          banner {
            url
            thumbnails
            alt
          }
          image_credits{
            raw
          }
          contact_us_email {
            raw
          }
          
        }
      }
    }
  }
}`;

export default Homepage