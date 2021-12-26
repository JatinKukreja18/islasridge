import React, {useState, useEffect} from 'react'
import emailjs from "emailjs-com"
import Layout from '../components/Layout'

const contactSelect = [
    {
        id: 0,
        title: "Room",
        name: "room",
        options: [
            "Room1",
            "Room2",
            "Room3",
            "Room4"
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
            "Retreat1",
            "Retreat2",
            "Retreat3",
            "Retreat4"
        ]
    }
]

const initialState = {
    name: "",
    email: "",
    from: "",
    to: "",
    room: "",
    guest: "",
    retreat: "",
    message: ""
}

const Enquire = () => {
    const [enquireForm, setEnquireForm] = useState(initialState)
    const [selectShow, setSelectShow] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)
    const [textLoading, setTextLoading] = useState(false)
    const [formError, setFormError] = useState({})

    const checkInput = (e) =>{
        setEnquireForm({...enquireForm, [e.target.name]: e.target.value})
    }

    const dateObject = new Date();
    const todaysDate = `${dateObject.getFullYear()}-${dateObject.getMonth()+1}-${dateObject.getDate()}`

    const fromSubmit = (e) =>{
        e.preventDefault()
        // emailjs.send(
        //     "service_0ztixkf", 
        //     "template_subcg27",
        //     enquireForm,
        //     "user_ubpUjm4K0MQIgPHHaeedl"
        // ).then(res=>{
        //     if(res.text === "OK"){
        //         setSuccessMessage(true)
        //         setTimeout(() => {
        //             setSuccessMessage(false)
        //         }, 6000);
        //         setTextLoading(false)
        //         setEnquireForm(initialState)
        //     }
        // }).catch(error =>{
        //     console.log(error)
        //     setSuccessMessage(false)
        //     setTextLoading(false)
        // })

        setTextLoading(true)
        // setFormError(enquireForm)
        console.log(enquireForm)
    }

    const selectHeading = (index) =>{
        setSelectShow(index)
    }

    const customSelect = (selectName, optionName) => {
        setEnquireForm({...enquireForm, [selectName]: optionName});
        setSelectShow(null)
    }
    console.log(formError)
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
                                        <div className="flex input-field margin-r-15 relative flex-between pointer">
                                            <input onChange={checkInput} className="absolute hidden-date" type="date" min={todaysDate} name="from"/>
                                            <div className="select-box-text">{enquireForm.from !== "" ? enquireForm.from : "From"}</div>
                                            <div className="down-aero">
                                                <svg width="12" height="9" viewBox="0 0 15 9" xmlns="http://www.w3.org/2000/svg"> 
                                                    <path d="m13.5 0-6 5.953L1.5 0 0 1.5 7.5 9 15 1.5z" fill="black" fillRule="evenodd"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex input-field flex-between relative pointer">
                                            <input onChange={checkInput} className="absolute hidden-date" type="date" min={todaysDate} name="to"/>
                                            <div className="select-box-text">{enquireForm.to !== "" ? enquireForm.to : "To"}</div>
                                            <div className="down-aero">
                                                <svg width="12" height="9" viewBox="0 0 15 9" xmlns="http://www.w3.org/2000/svg"> 
                                                    <path d="m13.5 0-6 5.953L1.5 0 0 1.5 7.5 9 15 1.5z" fill="black" fillRule="evenodd"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-fileds select-box-main">
                                        {
                                            contactSelect.map((data, index) => {
                                                return(
                                                    <div key={index} className="flex-1 relative select-container">
                                                        <div onClick={() => selectHeading(index)} className="flex input-field flex-between pointer align-v-center">
                                                            <div className="select-box-text">{enquireForm[data.name] !== "" ? enquireForm[data.name] : data.title}</div>
                                                            <div className="down-aero">
                                                                <svg width="12" height="9" viewBox="0 0 15 9" xmlns="http://www.w3.org/2000/svg"> 
                                                                    <path d="m13.5 0-6 5.953L1.5 0 0 1.5 7.5 9 15 1.5z" fill="black" fillRule="evenodd"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        {
                                                            selectShow === index ? 
                                                                <div className="room-list-main absolute">
                                                                    {
                                                                        data.options.map((options, optionIndex) => {
                                                                            return(
                                                                                <div onClick={() => customSelect(data.name, options)} key={optionIndex} className="room-list pointer">{options}</div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            : false
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                
                                </div>

                                <div className="contact-fileds">
                                    <textarea onChange={checkInput} value={enquireForm.message} className="input-field message-box" name="message" placeholder="Message" rows="4"></textarea>
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
