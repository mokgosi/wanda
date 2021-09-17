import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { send } from 'emailjs-com';

const Contactus = () => {

    const [toSend, setToSend] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send('service_mhs1yd8', 'template_6xwbhcu',
            toSend,
            'user_7QnH0uIbGMKmYfdCIvpSx'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }).catch((err) => {
            console.log('FAILED...', err);
        });
    };

    const handleChange = (e) => {
        e.preventDefault();
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="pagehead-bg primary-bg"></div>
            <div className="container has-pagehead is-pagetitle">
                <div className="section">
                    <h5 className="pagetitle">Contact Us</h5>
                </div>
            </div>
            <div className="container over">
                <div className="section">
                    <div className="spacer"></div>
                    <div className="map-wrap contactus">
                        <i className="mdi mdi-map-marker-outline "></i>
                        {/* <img className="responsive-img" src="../assets/images/placeholders/contact-map.jpg" alt="image" /> */}
                    </div>
                    <div className="spacer"></div>
                    <div className="card contactus gray">
                        <div className="row ">
                            <div className="col s12 pad-0">
                                <h5 className="bot-20 sec-tit  ">Address</h5>
                                <div>Cape Town, South Africa</div>
                            </div>
                        </div>
                    </div>
                    <div className="spacer"></div>
                    <div className="card contactus gray">
                        <div className="row ">
                            <div className="col s12 pad-0">
                                <h5 className="bot-20 sec-tit  ">Contact</h5>
                                <div>Email: email@wanderfullyso.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="spacer"></div>
                    <div className="card contactus gray">
                        <div className="row ">
                            <div className="col s12 pad-0">
                                <h5 className="bot-20 sec-tit  ">Operating Hours</h5>
                                <div>Monday to Friday :- 09:00 AM to 05:00 PM<br />
                                    Saturday :- 09:00 AM to 12:00 PM<br />
                                    Sunday Off
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pad-15">
                        <form onSubmit={onSubmit}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="mdi mdi-account-outline prefix"></i>
                                    <input id="first_name" name="first_name" type="text" className="validate" value={toSend.first_name} onChange={handleChange} />
                                    <label htmlFor="first_name">First Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="mdi mdi-account-outline prefix"></i>
                                    <input id="last_name" name="last_name" type="text" className="validate" value={toSend.last_name} onChange={handleChange} />
                                    <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="mdi mdi-email-outline prefix"></i>
                                    <input id="email" name="email" type="email" className="validate" value={toSend.email} onChange={handleChange} />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 textarea">
                                    <i className="mdi mdi-pencil prefix"></i>
                                    <textarea id="message" name="message" className="materialize-textarea" onChange={handleChange} value={toSend.message}></textarea>
                                    <label htmlFor="message">Tell us more</label>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="spacer-small"></div>
                                <button type='submit' className="waves-effect waves-light btn bg-primary">Send</button>
                                <div className="spacer-small"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    );
}

export default Contactus;