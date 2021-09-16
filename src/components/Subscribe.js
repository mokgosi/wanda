import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { send } from 'emailjs-com';

const Subscribe = () => {

    var elems = document.querySelectorAll('#modal');
    var instances = M.Modal.init(elems, {});

    const [toSend, setToSend] = useState({
        from_name: '',
        reply_to: '',
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
        <div id="modal" className="modal default-close">
            <div className="modal-content ">
                <form onSubmit={onSubmit}>
                    <h4 className="bot-20 sec-tit">Subscribe Newsletter</h4>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="mdi mdi-face prefix"></i>
                            <input id="from_name" name='from_name' type="text" value={toSend.from_name} onChange={handleChange} />
                            <label htmlFor="from_name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="mdi mdi-email-outline prefix"></i>
                            <input id="reply_to" name='reply_to' type="text" value={toSend.reply_to} onChange={handleChange} />
                            <label htmlFor="reply_to">Email</label>
                        </div>
                    </div>
                    <div className="row bot-0">
                        <div className="">
                            <button type='submit' className="waves-effect waves-light btn bg-primary">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Subscribe;