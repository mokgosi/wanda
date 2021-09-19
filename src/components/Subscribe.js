import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { send, init } from 'emailjs-com';
import { useForm } from 'react-hook-form';

init("user_7QnH0uIbGMKmYfdCIvpSx");

const Subscribe = () => {

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelector('#modal');
        var instances = M.Modal.init(elems, {
            onCloseEnd: function () {
                console.log('closed');
                document.querySelector('#subscribe').reset();
            },
        });
    });

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
        <div id="modal" className="modal default-close">
            <div className="modal-content ">
                <form id="subscribe" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <h4 className="bot-20 sec-tit">Subscribe Newsletter</h4>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="mdi mdi-face prefix"></i>
                            <input
                                className='validate'
                                type="text" id='from_name'
                                {...register('from_name', {
                                    required: "Required"
                                })} />
                            <span className="helper-text">{errors.from_name && errors.from_name.message}</span>
                            <label htmlFor="from_name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="mdi mdi-email-outline prefix"></i>
                            <input
                                className='validate'
                                type="email" id='email'
                                {...register("email", {
                                    required: "Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            <span className="helper-text" data-error={errors.email && errors.email.message}>{errors.email && errors.email.message}</span>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row bot-0">
                        <div className="">
                            <div className="spacer-small"></div>
                            {!isPending && <button type='submit' className="waves-effect waves-light btn bg-primary">Subscribe</button>}
                            {isPending && <button type='submit' className="waves-effect waves-light btn bg-primary" diabled>Sending...</button>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Subscribe;