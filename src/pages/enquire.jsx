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
    const [successMessage, setSuccessMessage] = useState(false)
    const [textLoading, setTextLoading] = useState(false)

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
            if(res.text === "OK"){
                setSuccessMessage(true)
                setTimeout(() => {
                    setSuccessMessage(false)
                }, 6000);
                setTextLoading(false)
            }
        }).catch(erro=>{
            console.log(erro)
            setSuccessMessage(false)
            setTextLoading(false)
        })

        setTextLoading(true)
    }
    console.log(successMessage)
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

                            
                            {
                                successMessage ?
                                    <div className="enquire_sent flex align-v-center padding-b-5">
                                        <div className="flex padding-r-5">
                                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="none" fillRule="evenodd">
                                                    <circle fill="#43A047" fillRule="nonzero" cx="8" cy="8" r="8"/>
                                                    <path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" d="m12.75 5-5.385 7L4 8.889"/>
                                                </g>
                                            </svg>
                                        </div>
                                        Your Enquire has been sent :)
                                    </div>
                                : false
                            }

                            <form action="" onSubmit={fromSubmit}>
                                <div className="contact-fileds">
                                    <input onChange={checkInput} value={enquireForm.name} className="input-field" type="text" name="name" id="name" placeholder="Name" />
                                </div>

                                <div className="contact-fileds">
                                    <input onChange={checkInput} value={enquireForm.email} className="input-field" type="text" name="email" id="email" placeholder="E-mail" />
                                </div>

                                <div className="center-form">
                                    <div className="flex contact-fileds">
                                        <select onChange={checkInput} className="input-field margin-r-15" name="from" defaultValue={enquireForm.from}>
                                            <option disabled value={enquireForm.from}>From</option>
                                            <option value="place1">place1</option>
                                            <option value="place2">place2</option>
                                            <option value="place3">place3</option>
                                            <option value="place4">place4</option>
                                        </select>
                                        <select onChange={checkInput} className="input-field" name="to" defaultValue={enquireForm.to}>
                                            <option disabled value={enquireForm.to}>To</option>
                                            <option value="to1">to1</option>
                                            <option value="to2">to2</option>
                                            <option value="to3">to3</option>
                                            <option value="to4">to4</option>
                                        </select>
                                    </div>

                                    <div className="flex contact-fileds">
                                        <select onChange={checkInput} className="input-field margin-r-15" name="room" defaultValue={enquireForm.room}>
                                            <option disabled value={enquireForm.room}>Room</option>
                                            <option value="room1">room1</option>
                                            <option value="room2">room2</option>
                                            <option value="room3">room3</option>
                                            <option value="room4">room4</option>
                                        </select>
                                        <select onChange={checkInput} className="input-field" name="guest" defaultValue={enquireForm.guest}>
                                            <option disabled value={enquireForm.guest}>No. of guests</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>

                                    <div className="contact-fileds">
                                        <select onChange={checkInput} className="input-field" name="retreat" defaultValue={enquireForm.retreat}>
                                            <option disabled value={enquireForm.retreat}>Retreat</option>
                                            <option value="retreat1">retreat1</option>
                                            <option value="retreat2">retreat2</option>
                                            <option value="retreat3">retreat3</option>
                                            <option value="retreat4">retreat4</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="contact-fileds">
                                    <textarea onChange={checkInput} value={enquireForm.message} className="input-field message-box" name="message" placeholder="Message" rows="7"></textarea>
                                </div>

                                <button className="submit-btn white pointer" type="submit">{textLoading ? "SENDING" : "SEND"}</button>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </Layout>
        </>
    )
}

export default Enquire
