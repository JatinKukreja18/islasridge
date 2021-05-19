import React from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Newsletter from './Newsletter'


const SplashBanner = ({bannerContent}) => (
  <section
  className="splash-banner"
  style={{
    backgroundImage: ` url(${bannerContent.background.url})`,
  }}
>
{/* linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), */}
<div className="splash-content container">
    <h2 className="splash-title">
      {RichText.asText(bannerContent.title.raw)}
    </h2>
    <p className="splash-description">
      {RichText.asText(bannerContent.description.raw)}
    </p>
    <Newsletter/>
    <div className="splash-footer">
      <a href={`mailto:${bannerContent.email.raw}`}>
        {RichText.asText(bannerContent.email.raw)}
      </a>
      <span className="credits_desktop">
         {RichText.asText(bannerContent.extraText.raw)}
      </span>
      <span className="credits_mobile">
        Image © {RichText.asText(bannerContent.credits.raw)}
      </span>
    </div>
  </div>
</section>

)

export default SplashBanner
