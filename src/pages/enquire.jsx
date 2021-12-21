import React, {useState} from 'react'
import emailjs from "emailjs-com"
import Layout from '../components/Layout'

const Enquire = () => {
    const [enquireForm, setEnquireForm] = useState({
        name: "",
        email: "",
        from: "",
        to: "",
        room: "",
        guest: "",
        retreat: "",
        message: ""
    })
    const checkInput = (e) =>{
        setEnquireForm({...enquireForm, [e.target.name]: e.target.value});
    }
    console.log(enquireForm)
    
    const fromSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm(
            "service_0ztixkf", 
            "template_subcg27",
            e.target,
            "user_ubpUjm4K0MQIgPHHaeedl"
        ).then(res=>{
            console.log(res)
        }).catch(erro=>{
            console.log(erro)
        })
    }
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
                    <div className="flex contact-main">
                        <div className="map">
                            <img src="https://media.istockphoto.com/illustrations/india-map-with-states-grey-illustration-id582277330" alt=""/>
                        </div>
                        <div className="form-container">
                            <p>
                                For questions email us on info@dummyemail.com. Please fill the form below for any booking related enquiry.
                            </p>

                            <form action="" onSubmit={fromSubmit}>
                                <div className="contact-fileds">
                                    <input onChange={checkInput} className="input-field" type="text" name="name" id="name" placeholder="Name" />
                                </div>

                                <div className="contact-fileds">
                                    <input onChange={checkInput} className="input-field" type="text" name="email" id="email" placeholder="E-mail" />
                                </div>

                                <div className="center-form">
                                    <div className="flex contact-fileds">
                                        <select onChange={checkInput} className="input-field margin-r-15" name="from">
                                            <option value="">From</option>
                                            <option value="place1">place1</option>
                                            <option value="place2">place2</option>
                                            <option value="place3">place3</option>
                                            <option value="place4">place4</option>
                                        </select>
                                        <select onChange={checkInput} className="input-field" name="to">
                                            <option value="">To</option>
                                            <option value="to1">to1</option>
                                            <option value="to2">to2</option>
                                            <option value="to3">to3</option>
                                            <option value="to4">to4</option>
                                        </select>
                                    </div>

                                    <div className="flex contact-fileds">
                                        <select onChange={checkInput} className="input-field margin-r-15" name="room">
                                            <option value="">Room</option>
                                            <option value="room1">room1</option>
                                            <option value="room2">room2</option>
                                            <option value="room3">room3</option>
                                            <option value="room4">room4</option>
                                        </select>
                                        <select onChange={checkInput} className="input-field" name="guest">
                                            <option value="">No. of guests</option>
                                            <option value="guest1">guest1</option>
                                            <option value="guest2">guest2</option>
                                            <option value="guest3">guest3</option>
                                            <option value="guest4">guest4</option>
                                        </select>
                                    </div>

                                    <div className="contact-fileds">
                                        <select onChange={checkInput} className="input-field" name="retreat">
                                            <option value="">Retreat</option>
                                            <option value="retreat1">retreat1</option>
                                            <option value="retreat2">retreat2</option>
                                            <option value="retreat3">retreat3</option>
                                            <option value="retreat4">retreat4</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="contact-fileds">
                                    <textarea onChange={checkInput} className="input-field message-box" name="message" placeholder="Message" rows="7"></textarea>
                                </div>

                                <button className="submit-btn white pointer" type="submit">SEND</button>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </Layout>
        </>
    )
}

export default Enquire
