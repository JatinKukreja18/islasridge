import React, {useState} from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import skiLiftChairs from '../images/ski-lift-chairs.jpeg'
import mountainRange from '../images/mountain-range.jpeg'
import forrestAerialShot from '../images/forrest-aerial-shot.jpeg'

const About = () => {
  const aboutStaticData = {
    title: "About",
    description: "Isla’s Ridge is the way I want to look after people. It’s the way I live my life’ Sitting atop a thousand meter ridge in the Palini Hills, Isla’s Ridge is adjacent to Loulou’s private residence, overlooking the expansive Western Ghats of South India. A secret shared, it’s a place to be away from everything, except oneself. Cultivated through personal relationships, it is an open invitation for the like-minded, equally suited for individual or group retreats with holistic workshops in nature, food, mind and body.",
    accordion : [
      {
        title : "Location",
        description : "Isla’s Ridge is located in the Palani Hills of Tamil Nadu, an hour from Madurai and 600 km south of Bangalore. The nearby Nilgiri Hills (blue mountains) were named given the blue hue emitted from the horizon line and the region’s unique hued Neelakurinji flower which blooms every 12 years. The retreat is located atop a 1000 meter cliff with an expansive view of the hills, a remote island in the sky, ensconced in nature’s true spirit. The hills are an extension of the Western Ghats, an evergreen, tropical forest range beginning in Gujarat, travelling south 1,600 km to the end of Tamil Nadu. Located in the Deccan plateau, the range is a UNESCO World Heritage site, encompassing one of the most biologically diverse regions in the world and home to black panthers, tigers and the less fierce but equally untamed Isla Van Damme."
      },
      {
        title : "About Isla Van Damme",
        description : "Affectionately known as ‘Loulou’ to most, Isla’s Ridge reclaims her name in a return home, a full stop at oneself. Born to Belgian parents in Tamil Nadu’s hill station of Kodaikanal, Isla lived in Bombay till the age of 16 and moved to Europe thereafter. She returned thirty five years later to Goa, as a restaurateur and interior designer. The first home she designed, Ahilya by the Sea exists as a testament to her eclectic style, as do numerous design projects and long-term associations with Mumbai’s beloved Bungalow 8 and Raw Mango. Isla’s Ridge is the culmination of a life lived. Offering a retreat inwards, it exists to meet minds, nourish the soul and body, and revel in the simplicity of everyday."
      }
    ]
  }

  return (
    <>
      <style>
          {`
              body,.site-header{background-color: #6C6A48;}
              *, .site-header a, a{color:white;}
              .search-icon > svg{fill:white;}
          `}
      </style>
      <Layout>
        <SEO
          title="About"
          description="Learn more about us who we are and what we do."
        />

        <main className="container">
          <h1 className="white about-text">{aboutStaticData.title}</h1>
          <p>{aboutStaticData.description}</p>
          <div>
            {
              aboutStaticData.accordion.map((data, index) =>{
                return(
                  <AboutAccordion aboutData={data} key={index} indexNum={index} />
                )
              })
            }
          </div>



















          {/* <section className="full-width-image content-section">
            <img src={skiLiftChairs} alt="Ski lift chairs" />
          </section>

          <section className="content-section text-section-2col">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
              mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper
              suscipit, posuere a, pede.
            </p>
          </section>

          <section className="content-section text-section-col-1">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
              Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis
              vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
              leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
              Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida
              tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat est. Ut scelerisque
              hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique.
            </p>
          </section>

          <section className="content-section quote">
            <blockquote>Lorem ipsum dolor site amet</blockquote>
          </section>

          <section className="content-section text-section-1col">
            <p>
              Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus
              libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id,
              est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.
              Vestibulum volutpat, lacus a ultrices sagittis. Suspendisse mauris. Fusce accumsan
              mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing
              risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan
              quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis.
              Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet
              nibh feugiat est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis. Suspendisse mauris. Fusce
              accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer
              adipiscing risus a sem.
            </p>
          </section>

          <section className="image-gallery content-section">
            <h2>Lorem ipsum dolor sit amet</h2>
            <div className="gallery">
              <div className="gallery-item">
                <img src={forrestAerialShot} alt="Forrest aerial shot" />
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
                  Pellentesque aliquet nibh nec urna. In nisi neque, <em>aliquet vel</em>, dapibus
                  id, mattis vel, nisi.
                </p>
                <p className="gallery-link">
                  <Link to="/more-info">Learn More</Link>
                </p>
              </div>
              <div className="gallery-item">
                <img src={mountainRange} alt="Mountain range" />
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus
                  metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis,
                  gravida id, est.
                </p>
              </div>
            </div>
          </section> */}
        </main>
      </Layout>
    </>
  )
}

export default About

const AboutAccordion = (props) => {
  const [toggleState, setToggleState] = useState(null)
  const toggleAccordion = (index) =>{
    toggleState === index ? setToggleState(null) : setToggleState(index);
  }

  return(
    <>
      <div className="accor-main pointer" onClick={() => toggleAccordion(props.indexNum)}>
        <div className="flex flex-between align-v-center">
          <div className="semi-bold font-18">{props.aboutData.title}</div>
          <div className={`flex ${toggleState === props.indexNum ? 'rotate-aero' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20" height="20" preserveAspectRatio="xMidYMid meet">
              <defs>
                <clipPath id="__lottie_element_2">
                  <rect width="50" height="50" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clipPath="url(#__lottie_element_2)">
                <g transform="matrix(0,1,-1,0,50,0)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,25,25)">
                      <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="white" strokeOpacity="1" strokeWidth="4" d=" M-10,20 C-10,20 10,0 10,0 C10,0 -10,-20 -10,-20"></path>
                    </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        {
          toggleState === props.indexNum ?
            <div className="">
              {props.aboutData.description}
            </div>
          : false
        }
      </div>
    </>
  )
}
