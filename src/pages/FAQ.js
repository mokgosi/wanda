import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import M from "materialize-css";

const FAQ = () => {

    useEffect(() => {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {
            accordion: false
        });
    });

    return (
        <>
            <div className="pagehead-bg primary-bg"></div>
            <div className="container has-pagehead is-pagetitle">
                <div className="section">
                    <h5 className="pagetitle">FAQ</h5>
                </div>
            </div>
            <div className="container over">
                <div className="section ui-faq">
                    <div className="row ">
                        <div className="col s12 pad-0">
                            <ul className="collapsible expandable popout">
                                <li className="active">
                                    <div className="collapsible-header ">How to setup new account?</div>
                                    <div className="collapsible-body "><span>
                                        <img alt="image" className=" img" style={{ width: `100%` }} src="assets/images/faq-101.jpg" />
                                        A design is a plan or specification for the
                                        construction of an object or system or for the implementation of an activity or
                                        process, or the result of that plan or specification in the form of a prototype,
                                        product or process. </span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header ">What are the type of subscription plans offered?</div>
                                    <div className="collapsible-body "><span>
                                        The verb to design expresses the process of developing a design. In some cases,
                                        the direct construction of an object without an explicit prior plan (such as in
                                        craftwork, some engineering, coding, & graphic design) may also be a design
                                        activity. </span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header ">What are the renewal policies available?</div>
                                    <div className="collapsible-body "><span>
                                        It may involve considerable research, thought, modeling, interactive adjustment,
                                        and re-design. Meanwhile, diverse kinds of objects may be designed, including
                                        clothing, graphical user interfaces, products, skyscrapers, corporate
                                        identities, business processes, and even methods or processes of designing.
                                    </span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    );
}

export default FAQ;