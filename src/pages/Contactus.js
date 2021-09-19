import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { send, init } from 'emailjs-com';
import { useForm } from 'react-hook-form';

init("user_7QnH0uIbGMKmYfdCIvpSx");

const Contactus = () => {

    const [isPending, setIsPending] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {

        setIsPending(true);

        send('service_qrhtoh6', 'template_6xwbhcu', data)
            .then((response) => {
                setIsPending(false);
                console.log('SUCCESS!', response.status, response.text);
            }).catch((err) => {
                setIsPending(false);
                console.log('FAILED...', err);
            });

        console.log(data);
    }

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
                        <form id="subscribe" onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="mdi mdi-account-outline prefix"></i>

                                    <input
                                        className='validate'
                                        type="text" id='first_name'
                                        {...register('first_name', {
                                            required: "Required"
                                        })} />
                                    <span className="helper-text">{errors.first_name && errors.first_name.message}</span>

                                    <label htmlFor="first_name">First Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="mdi mdi-account-outline prefix"></i>

                                    <input
                                        className='validate'
                                        type="text" id='last_name'
                                        {...register('last_name', {
                                            required: "Required"
                                        })} />
                                    <span className="helper-text">{errors.last_name && errors.last_name.message}</span>

                                    <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="mdi mdi-email-outline prefix"></i>

                                    <input
                                        className='validate'
                                        type="email" id='email'
                                        {...register('email', {
                                            required: "Required"
                                        })} />
                                    <span className="helper-text">{errors.email && errors.email.message}</span>

                                    <label htmlFor="reply_to">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 textarea">
                                    <i className="mdi mdi-pencil prefix"></i>

                                    <textarea id="message" name="message"
                                        className="materialize-textarea validate"
                                        {...register('message', {
                                            required: "Required"
                                        })}></textarea>

                                    <span className="helper-text">{errors.message && errors.message.message}</span>

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