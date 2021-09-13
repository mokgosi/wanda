import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css";

const SideMenu = () => {

    const [slider, setSlider] = useState(false);

    useEffect(() => {

        let sidenav = document.querySelectorAll('.sidenav');

        var instances = M.Sidenav.init(sidenav, {
            edge: 'left'
        });
    });

    return (
        <>
            <ul id="slide-nav" className='sidenav sidemenu'>
                <li className="user-wrap">
                    <div className="user-view row">
                        <div className="col s3 imgarea">
                            <a href="#user" className="status available">
                                <img className="circle" src="../assets/images/placeholders/menu-user.jpg" alt="menu user" />
                            </a>
                        </div>
                    </div>
                </li>
                <li className="menulinks">
                    <ul className="collapsible">
                        <li className="lvl1 ">
                            <div className=" waves-effect   index ">
                                <a href="ui-pages-faq.html">
                                    <i className="mdi mdi-camera-timer"></i>
                                    <span className="title">FAQ</span></a>
                            </div>
                        </li>
                        <li className="lvl1 ">
                            <div className=" waves-effect   index ">
                                <a href="ui-apps.html">
                                    <i className="mdi mdi-all-inclusive"></i>
                                    <span className="title">Blog</span>
                                    <span className="badge">9</span></a>
                            </div>
                        </li>
                        <li className="lvl1 ">
                            <div className=" waves-effect   index ">
                                <a href="ui-pages-testimonials.html">
                                    <i className="mdi mdi-arrange-send-to-back"></i>
                                    <span className="title">Testimonials</span></a>
                            </div>
                        </li>
                        <li className="lvl1 ">
                            <div className=" waves-effect   index ">
                                <a href="ui-pages-team.html">
                                    <i className="mdi mdi-border-outside"></i>
                                    <span className="title">Team</span><span className="badge">9</span></a>
                            </div>
                        </li>
                        <li className="lvl1 ">
                            <div className=" waves-effect index ">
                                <a href="ui-pages-aboutus.html">
                                    <i className="mdi mdi-bulletin-board"></i>
                                    <span className="title">About</span></a>
                            </div>
                        </li>
                        <li className="lvl1 ">
                            <div className=" waves-effect index">
                                <a href="ui-pages-contactus.html"><i className="mdi mdi-beaker"></i><span
                                    className="title">Contact</span></a>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="menu-social">
                    <ul className="social-wrap social-colored">
                        <li className="social">
                            <a className="" href="https://www.facebook.com/Wanderfullyso-110100174464482"><i className="mdi mdi-facebook"></i></a>
                            <a className="" href="https://twitter.com/wanderfullyso"><i className="mdi mdi-twitter"></i></a>
                            <a className="" href="https://za.pinterest.com/wanderfullyso/"><i className="mdi mdi-pinterest"></i></a>
                            <a className="" href="https://www.instagram.com/wanderfullyso.app/"><i className="mdi mdi-instagram"></i></a>
                        </li>
                    </ul>
                </li>
                <li className="copy-spacer"></li>
                <li className="copy-wrap">
                    <div className="copyright">&copy; Copyright @ Wanderfullyso</div>
                </li>
            </ul>
            {/* <nav className="light-blue">
                <a href="#" className="sidenav-trigger" onClick={() => setSlider(s => !s)}>
                    <i className="material-icons">menu</i>
                </a>
            </nav> */}
        </>
    );
}

export default SideMenu;

