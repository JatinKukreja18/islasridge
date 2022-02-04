import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import alacarte from '../images/a-la-carte.jpeg'
import cooking from '../images/cooking.jpeg'
import gardening from '../images/gardening.jpeg'
import mindfulness from '../images/mindfulness.jpeg'

const retreatsData = [
    {
        title: "À la carte",
        code: "a-la-carte",
        description: "We invite practitioners to design their own retreats, or engage with those who wish to plan tailored group offerings.",
        nextPageData: {
            breadcrumbTitle: "À la carte",
            listRetreats: [
                {
                    image: alacarte,
                    heading: "À la carte",
                    description: "Are you a teacher looking to host a series of workshops? A patron looking to sponsor an art residency?  Are you an employer looking to have colleagues grow from time together, or a family looking to reunite? We welcome all.",
                }
            ]
        }
    },
    {
        title: "Table d’hote",
        code: "table-dhote",
        description: "Select from our offered range of retreat options. From yoga to cooking and gardening, each retreat is designed to learn, immerse and listen.",
        nextPageData: {
            breadcrumbTitle: "Table d’hote",
            listRetreats: [
                {
                    image: cooking,
                    heading: "Cooking",
                    description: "Hosted by Isla, each retreat can be customised to a theme or cuisine including French, Belgian, Moroccan or Indian. Select from fresh salads, fermented food (kombucha, kefir, sourdough bread, sauerkraut etc.) or bakery items. Make, exchange and eat together.",
                },
                {
                    image: gardening,
                    heading: "Gardening",
                    description: "Born with a green thumb, Isla takes you through the A-Z of gardening. The property has an extensive vegetable garden and farm (with chickens, goats, cows and ducks). Begin with building healthy soil (composting, organic fertilisers and pest control) to sowing seed and the rotation of crops. Learn about various watering methods including harvesting and storing rainwater. ",
                },
                {
                    image: mindfulness,
                    heading: "Mindfulness",
                    description: "With lessons suiting the needs of the group, this retreat features a mix of yoga, meditation and mindful practices. A retreat could involve mornings of yoga followed by jal neti (nasal cleansing) and Satsang (spiritual discourse). Yoga nidra in the evenings followed by meditation to end the day. ",
                },
            ]
        }
    },
]

const retreats = () => {
    return (
        <>
              <style>
                {`
                    body,.site-header{background-color: #FDEDED;}
                    *, .site-header a, a{color: #442220;}
                    .ham-menus-lines, .ham-menus::before, .ham-menus::after{background-color: black;} 
                `}
            </style>
            <Layout>    
                <SEO
                    title="Retreats"
                    description="Learn more about us who we are and what we do."
                />
                <div className="container">
                    <div className="m-heading text-center">Retreats</div>
                    <div className="retreats-main padding-t-50">
                        {
                            retreatsData.map((data, index) => {
                                return(
                                    <div className="retreats-box" key={index}>
                                        <h5 className="retreats-title">{data.title}</h5>
                                        <p className="margin-b-0 retreats-desc">{data.description}</p>
                                        <Link className="more-retreat" state={{ pageData: data.nextPageData }} to={`/retreat/${data.code}`}>MORE</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default retreats
