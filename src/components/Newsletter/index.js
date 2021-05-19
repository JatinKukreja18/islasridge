import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp';

const Newsletter = () => {
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  
  const handleSubscribe = async (e)=>{
    e.preventDefault();
    console.log(email);
    if (/.+@.+\..+/.test(email)) {
      console.log(true);
      const result = await addToMailchimp(email);
      // this.setState({ message: result.msg });
      setMessage(result.msg)
     }else{
      setMessage('Please enter a valid email.')
     }

  }
  const handleOnChange = (value)=>{
    setMessage('');
    setEmail(value)
  }
  return(
    <form name="subscribeForm" method="POST" id="subscribe-form" className="splash-newletter">
      <input value={email} onChange={(e)=>handleOnChange(e.target.value)} placeholder="Email"/>
      <button onClick={(e)=>handleSubscribe(e)}  type="submit">
        Subscribe
      </button>
      {message.length?
      <span className="input-help-text" dangerouslySetInnerHTML={{__html: message}}></span>:null}
    </form>
  )
}

export default Newsletter
