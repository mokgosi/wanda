import React from 'react';
import Navbar from '../components/Navbar';

const Contactus = () => {
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
                        <img className="responsive-img" src="../assets/images/placeholders/contact-map.jpg" alt="image" />
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
                                <div>Phone: +2700 000 000<br />
                                    Email: email@wanderfullyso.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="spacer"></div>
                    <div className="card contactus gray">
                        <div className="row ">
                            <div className="col s12 pad-0">
                                <h5 className="bot-20 sec-tit  ">Timing</h5>
                                <div>Monday to Friday :- 09:00 AM to 05:00 PM<br />
                                    Saturday :- 09:00 AM to 12:00 PM<br />
                                    Sunday Off
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pad-15">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="mdi mdi-account-outline prefix"></i>
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">First Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="mdi mdi-account-outline prefix"></i>
                                <input id="last_name2" type="text" className="validate" />
                                <label htmlFor="last_name2">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="mdi mdi-email-outline prefix"></i>
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 textarea">
                                <i className="mdi mdi-pencil prefix"></i>
                                <textarea id="textarea-prefix" className="materialize-textarea"></textarea>
                                <label htmlFor="textarea-prefix">Tell us more</label>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="spacer-small"></div>
                            <a className="waves-effect waves-light btn bg-primary ">Send</a>
                            <div className="spacer-small"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    );
}

export default Contactus;