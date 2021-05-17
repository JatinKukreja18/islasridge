import React from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'


const SplashBanner = ({bannerContent}) => (
  <section
  className="homepage-banner"
  style={{
    backgroundImage: ` url(${bannerContent.background.url})`,
  }}
>
{/* linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), */}
<div className="banner-content container">
    <h2 className="banner-title">
      {RichText.asText(bannerContent.title.raw)}
    </h2>
    <p className="banner-description">
      {RichText.asText(bannerContent.description.raw)}
    </p>
    {RichText.asText(bannerContent.extraText.raw)}
  </div>
</section>

)

export default SplashBanner
