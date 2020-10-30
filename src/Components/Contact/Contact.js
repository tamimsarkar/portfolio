import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './Contact.css';
import HeaderTop from '../Header/HeaderTop/HeaderTop';

export default function Contact() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    function handleSendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_gmail', 'template_d5drqij', e.target, 'user_jTqBdA1ciTATpcl3aUvPf')
            .then((result) => {
                if (result) {
                    alert("Just got it.I will respond very soon.")
                    e.target.reset()
                }
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
            <HeaderTop />
            <div className="container m-auto contact_container">

                <div className="col-md-6 col-md-offset-3 form_container">

                    <form className="mt-3" onSubmit={handleSendEmail}>
                        <fieldset>
                            <legend className="text-center mt-4">Contact me</legend>
                            <div className="form-group">
                                <label className="col-md-3 control-label" htmlFor="name">Name</label>
                                <div className="col-md-9">
                                    <input id="name" name="name" type="text" placeholder="Your name" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label" htmlFor="email">Your E-mail</label>
                                <div className="col-md-9">
                                    <input id="email" name="email" onChange={e => setEmail(e.target.value)} type="text" placeholder="Your email" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label" htmlFor="message">Your message</label>
                                <div className="col-md-9">
                                    <textarea className="form-control" onChange={e => setMessage(e.target?.value)} id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-9 text-right">
                                    {
                                        email === "" && message === "" ? <button disabled type="submit" className="btn btn-primary btn-lg submit">Submit</button> :
                                            <button type="submit" className="btn btn-primary btn-lg submit">Submit</button>
                                    }
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

    );
}