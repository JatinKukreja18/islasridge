import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const tnc = () => {
    const tncStaticData = {
        title: "TERMS & CONDITIONS",
        description: "Isla’s Ridge is the way I want to look after people. It’s the way I live my life’ Sitting atop a thousand meter ridge in the Palini Hills, Isla’s Ridge is adjacent to Loulou’s private residence, overlooking the expansive Western Ghats of South India. A secret shared, it’s a place to be away from everything, except oneself. Cultivated through personal relationships, it is an open invitation for the like-minded, equally suited for individual or group retreats with holistic workshops in nature, food, mind and body.",
        tncs : [
          {
            title : "Terms of use",
            description : "‘ISLA’S RIDGE’ hereinafter referred to as ISLA’S RIDGE is the brand owned and operated by LOULOU VAN DAMME. Your usage of the website http://www.islasridge.com (hereinafter “the Website”) is subject to your compliance with the terms and conditions as set forth below. Usage of this site indicates acceptance of the below. The Company may modify these terms and conditions as stated on the Website at any time, and such modifications shall be effective immediately upon posting of the modified version on the Website without prior intimation to the users. Your continued use of the Website shall be deemed your conclusive acceptance of the modified terms and condi- tions. However, contracts concluded on the basis of previous terms and conditions shall remain unaffected, but you have to prove the terms which are applicable."
          },
          {
            title : "Use of materials on the website",
            description : "‘ISLA’S RIDGE’ hereinafter referred to as ISLA’S RIDGE is the brand owned and operated by LOULOU VAN DAMME. Your usage of the website http://www.islasridge.com (hereinafter “the Website”) is subject to your compliance with the terms and conditions as set forth below. Usage of this site indicates acceptance of the below."
          },
          {
            title : "Lorem Ipsum",
            description : "‘ISLA’S RIDGE’ hereinafter referred to as ISLA’S RIDGE is the brand owned and operated by LOULOU VAN DAMME. Your usage of the website http://www.islasridge.com (hereinafter “the Website”) is subject to your compliance with the terms and conditions as set forth below. Usage of this site indicates acceptance of the below. The Company may modify these terms and conditions as stated on the Website at any time, and such modifications shall be effective immediately upon posting of the modified version on the Website without prior intimation to the users. Your continued use of the Website shall be deemed your conclusive acceptance of the modified terms and condi-"
          }
        ]
      }
    return (
        <>
            <style>
                {`
                    body,.site-header{background-color: #F5F9E3;}
                    body *, .site-header a, a{color: #442220;}
                    .ham-menus-lines, .ham-menus::before, .ham-menus::after{background-color: black;} 
                `}
            </style>
            <Layout>
                <SEO
                    title="Tnc"
                    description="Learn more about us who we are and what we do."
                />
                <div className="container">
                    <h3 className="tnc-heading">{tncStaticData.title}</h3>
                    {
                        tncStaticData.tncs.map((data, index) => {
                            return(
                                <div key={index}>
                                    <h3 className=" margin-b-0 padding-b-5">{data.title}</h3>
                                    <p className="">{data.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </Layout>
        </>
    )
}

export default tnc
