import React, {useState, useRef} from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const About = () => {
  const aboutStaticData = {
    title: "About",
    // description: "Isla’s Ridge is the way I want to look after people. It’s the way I live my life’ Sitting atop a thousand meter ridge in the Palini Hills, Isla’s Ridge is adjacent to Loulou’s private residence, overlooking the expansive Western Ghats of South India. A secret shared, it’s a place to be away from everything, except oneself. Cultivated through personal relationships, it is an open invitation for the like-minded, equally suited for individual or group retreats with holistic workshops in nature, food, mind and body.",
    description: "Isla’s Ridge is the way I want to look after people. It’s the way I live my life’ Sitting atop a thousand meter ridge in the Palini Hills, Isla’s Ridge is adjacent to Loulou’s private residence, overlooking the expansive Western Ghats of South India. A secret shared, it’s a place to be away from everything, except oneself. Cultivated through personal relationships, it is an open invitation for the like-minded, equally suited for individual or group retreats with holistic workshops in nature, food, mind and body.",
    accordion : [
      {
        title : "Location",
        description : "Isla’s Ridge is located in the Palani Hills of Tamil Nadu, an hour from Madurai and 600 km south of Bangalore. The nearby Nilgiri Hills (blue mountains) were named given the blue hue emitted from the horizon line and the region’s unique hued Neelakurinji flower which blooms every 12 years. The retreat is located atop a 1000 meter cliff with an expansive view of the hills, a remote island in the sky, ensconced in nature’s true spirit. The hills are an extension of the Western Ghats, an evergreen, tropical forest range beginning in Gujarat, travelling south 1,600 km to the end of Tamil Nadu. Located in the Deccan plateau, the range is a UNESCO World Heritage site, encompassing one of the most biologically diverse regions in the world and home to black panthers, tigers and the less fierce but equally untamed Isla Van Damme.",
      },
      {
        title : "About Isla Van Damme",
        description : "Affectionately known as ‘Loulou’ to most, Isla’s Ridge reclaims her name in a return home, a full stop at oneself. Born to Belgian parents in Tamil Nadu’s hill station of Kodaikanal, Isla lived in Bombay till the age of 16 and moved to Europe thereafter. She returned thirty five years later to Goa, as a restaurateur and interior designer. The first home she designed, Ahilya by the Sea exists as a testament to her eclectic style, as do numerous design projects and long-term associations with Mumbai’s beloved Bungalow 8 and Raw Mango. Isla’s Ridge is the culmination of a life lived. Offering a retreat inwards, it exists to meet minds, nourish the soul and body, and revel in the simplicity of everyday.",
      }
    ]
  }

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
        <SEO
          title="About"
          description="Learn more about us who we are and what we do."
        />

        <main className="container about-container">
          <h1 className="white about-text inherit-font">{aboutStaticData.title}</h1>
          <p className="about-description">{aboutStaticData.description}</p>
          <div>
            {
              aboutStaticData.accordion.map((data, index) =>{
                return(
                  <AboutAccordion aboutData={data} key={index} indexNum={index} />
                )
              })
            }
          </div>
        </main>
      </Layout>
    </>
  )
}

export default About


const AboutAccordion = (props) => {
  const elementRef = useRef("");
  const [toggleHeight, setToggleHeight] = useState("");
  const [toggleState, setToggleState] = useState("");
  const toggleAccordion = (index) =>{
    toggleState === index ? setToggleState("") : setToggleState(index);
    setToggleHeight(`${elementRef.current.scrollHeight + 16}px`);
  }

  return(
    <>
      <div className={`accor-main ${toggleState === props.indexNum ? 'expand-section' : ''}`}>
        <div className="flex pointer flex-between align-v-center" onClick={() => toggleAccordion(props.indexNum)} aria-hidden="true">
          <div className="semi-bold accor-heading">{props.aboutData.title}</div>
          <div className={`flex accor-aero`}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20" height="20" preserveAspectRatio="xMidYMid meet">
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
            </svg> */}
            <svg width="23" height="23" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="white" d="M3,111.67,247.67,418.4c4,5.06,12.6,5.06,16.65,0L509,111.64a15.21,15.21,0,0,0,2.2-13.9,14.2,14.2,0,0,0-1-2.32,10.66,10.66,0,0,0-9.39-5.62H11.14a10.64,10.64,0,0,0-9.38,5.62,13.93,13.93,0,0,0-1,2.27A15.26,15.26,0,0,0,3,111.67Z"/>
            </svg>
          </div>
        </div>

        <div className={`accordion-para`}
          ref={elementRef} style={{
            height: `${toggleState === props.indexNum ? toggleHeight : '0px'}`,
          }}
          >
          {props.aboutData.description}
        </div>

      </div>
    </>
  )
}
