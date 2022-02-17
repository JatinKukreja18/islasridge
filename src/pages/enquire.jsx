import React, {useState} from 'react'
import emailjs from "emailjs-com"
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import mapImage from '../images/map_img.png'

const contactSelect = [
    {
        id: 0,
        title: "Room",
        name: "room",
        options: [
            "INDOIO",
            "MANGO",
            "SAGE",
            "CHUNNA",
            "GREY"
        ]
    },
    {
        id: 1,
        title: "No. of guests",
        name: "guest",
        options: [
            "1",
            "2",
            "3",
            "4"
        ]
    },
    {
        id: 2,
        title: "Retreat",
        name: "retreat",
        options: [
            "À la carte",
            "Table d’hote",
        ]
    }
]

const formFields = {name: "",email: "",from: "",to: "",room: "",guest: "",retreat: "",message: ""}

const Enquire = () => {
    console.log(mapImage)
    const [enquireForm, setEnquireForm] = useState(formFields)
    const [selectShow, setSelectShow] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)
    const [textLoading, setTextLoading] = useState(false)
    const [isformValidate, setFormValidate] = useState(false);
    const [formErrors, setFormErrors] = useState({})

    const validateEnquire = (allValues) => {
        const errorMessage = {}
        const {name,email,from,to,room,guest,retreat,message} = allValues;
        if(name === ""){
            errorMessage.name = "Name is required";
        }
        if(email === ""){
            errorMessage.email = "Email is required";
        }
        if(from === ""){
            errorMessage.from = "From is required";
        }
        if(to === ""){
            errorMessage.to = "To is required";
        }
        if(room === ""){
            errorMessage.room = "Room is required";
        }
        if(guest === ""){
            errorMessage.guest = "Guest is required";
        }
        if(retreat === ""){
            errorMessage.retreat = "Retreat is required";
        }
        if(message === ""){
            errorMessage.message = "Message is required";
        }
        setFormErrors(errorMessage)
        if(Object.keys(errorMessage).length === 0){
            setFormValidate(true)
        }
    }
    
    const checkInput = (e) =>{
        setEnquireForm({...enquireForm, [e.target.name]: e.target.value})
    }

    const todaysDate = new Date().toISOString().split("T")[0];

    const fromSubmit = (e) =>{
        e.preventDefault()
        if(isformValidate){            
            emailjs.send(
                "service_0ztixkf", 
                "template_subcg27",
                enquireForm,
                "user_ubpUjm4K0MQIgPHHaeedl"
            ).then(res=>{
                if(res.text === "OK"){
                    setSuccessMessage(true)
                    setTimeout(() => {
                        setSuccessMessage(false)
                    }, 6000);
                    setTextLoading(false)
                    setEnquireForm(formFields)
                    setFormValidate(false)
                }
            }).catch(error =>{
                console.log(error)
                setSuccessMessage(false)
                setTextLoading(false)
            })
            setTextLoading(true)
        }
        validateEnquire(enquireForm)
    }

    const selectHeading = (index) =>{
        selectShow === index ? setSelectShow(false) :  setSelectShow(index)
    }

    const customSelect = (selectName, optionName) => {
        setEnquireForm({...enquireForm, [selectName]: optionName});
        setSelectShow(false)
    }

    return (
        <>
            <style>
                {`
                    body,.site-header{background-color: #f3f7e1;}
                    *, .site-header a, a{color: #442220;}
                    .ham-menus-lines, .ham-menus::before, .ham-menus::after{background-color: black;} 
                `}
            </style>
            <Layout>
                <SEO
                    title="Contact Us"
                    description="Learn more about us who we are and what we do."
                />
                <div className="container space-for-header">
                    {/* <svg width="12" height="9" viewBox="0 0 15 9" xmlns="http://www.w3.org/2000/svg"> 
                        <path d="m13.5 0-6 5.953L1.5 0 0 1.5 7.5 9 15 1.5z" fill="black" fillRule="evenodd"></path>
                    </svg> */}
                    <div className="m-heading text-center">Enquire</div>
                    <div className="flex contact-main">
                        <div className="map">
                            <img src={mapImage} alt=""/>
                        </div>
                        <div className="form-container">
                            <p className="enquire-email">
                                For questions email us on islasridge@gmail.com. Please fill the form below for any booking related enquiry.
                            </p>


                            {successMessage &&
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
                            }

                            <form action="" onSubmit={fromSubmit}>
                                <div className="contact-fileds">
                                    <input onChange={checkInput} value={enquireForm.name} className="input-field" type="text" name="name" id="name" placeholder="Name" />
                                    {formErrors.name &&
                                        <div className="error-message">{formErrors.name}</div>
                                    }
                                </div>

                                <div className="contact-fileds">
                                    <input onChange={checkInput} value={enquireForm.email} className="input-field" type="text" name="email" id="email" placeholder="E-mail" />
                                    {formErrors.email &&
                                        <div className="error-message">{formErrors.email}</div>
                                    }
                                </div>

                                <div className="center-form">
                                    <div className="flex contact-fileds">
                                        <div className="flex-1 margin-r-15">
                                            <div className="flex input-field relative flex-between pointer">
                                                <input onChange={checkInput} className="absolute hidden-date" type="date" min={todaysDate} name="from"/>
                                                <div className="select-box-text">{enquireForm.from !== "" ? enquireForm.from : "From"}</div>
                                                <div className="down-aero flex align-v-center">
                                                    <svg width="17" height="17" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path fill="#442220" d="M3,111.67,247.67,418.4c4,5.06,12.6,5.06,16.65,0L509,111.64a15.21,15.21,0,0,0,2.2-13.9,14.2,14.2,0,0,0-1-2.32,10.66,10.66,0,0,0-9.39-5.62H11.14a10.64,10.64,0,0,0-9.38,5.62,13.93,13.93,0,0,0-1,2.27A15.26,15.26,0,0,0,3,111.67Z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            {formErrors.from &&
                                                <div className="error-message">{formErrors.from}</div>
                                            }
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex input-field flex-between relative pointer">
                                                <input onChange={checkInput} className="absolute hidden-date" type="date" min={todaysDate} name="to"/>
                                                <div className="select-box-text">{enquireForm.to !== "" ? enquireForm.to : "To"}</div>
                                                <div className="down-aero flex align-v-center">
                                                    <svg width="17" height="17" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path fill="#442220" d="M3,111.67,247.67,418.4c4,5.06,12.6,5.06,16.65,0L509,111.64a15.21,15.21,0,0,0,2.2-13.9,14.2,14.2,0,0,0-1-2.32,10.66,10.66,0,0,0-9.39-5.62H11.14a10.64,10.64,0,0,0-9.38,5.62,13.93,13.93,0,0,0-1,2.27A15.26,15.26,0,0,0,3,111.67Z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            {formErrors.to &&
                                                <div className="error-message">{formErrors.to}</div>
                                            }
                                        </div>
                                    </div>
                                    <div className="contact-fileds select-box-main">
                                        {
                                            contactSelect.map((data, index) => {
                                                return(
                                                    <div key={index} className="flex-1 relative select-container">
                                                        <div onClick={() => selectHeading(index)} className="flex input-field flex-between pointer align-v-center" aria-hidden="true">
                                                            <div className="select-box-text">{enquireForm[data.name] !== "" ? enquireForm[data.name] : data.title}</div>
                                                            <div className="down-aero flex align-v-center">
                                                                <svg width="17" height="17" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                    <path fill="#442220" d="M3,111.67,247.67,418.4c4,5.06,12.6,5.06,16.65,0L509,111.64a15.21,15.21,0,0,0,2.2-13.9,14.2,14.2,0,0,0-1-2.32,10.66,10.66,0,0,0-9.39-5.62H11.14a10.64,10.64,0,0,0-9.38,5.62,13.93,13.93,0,0,0-1,2.27A15.26,15.26,0,0,0,3,111.67Z"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        { selectShow === index &&
                                                            <div className="room-list-main absolute">
                                                                {
                                                                    data.options.map((options, optionIndex) => {
                                                                        return(
                                                                            <div onClick={() => customSelect(data.name, options)} key={optionIndex} className="room-list pointer" aria-hidden="true" >{options}</div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        }
                                                        {formErrors[data.name] &&
                                                            <div className="error-message">{formErrors[data.name]}</div>
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                
                                </div>

                                <div className="contact-fileds">
                                    <textarea onChange={checkInput} value={enquireForm.message} className="input-field message-box" name="message" placeholder="Message" rows="4"></textarea>
                                    { formErrors.message &&
                                        <div className="error-message">{formErrors.message}</div>
                                    }
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
