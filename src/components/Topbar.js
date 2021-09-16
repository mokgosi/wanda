import React, { useState, useEffect } from 'react';
import M from "materialize-css";

const Topbar = () => {

    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    function handleClick(e) {
        e.preventDefault();
        var elem = document.querySelector('.sidenav');
        var instance = M.Sidenav.getInstance(elem);
        instance.close();
        window.history.back();
    }

    return (
        <nav className={`fix_topscroll logo_on_fixed topbar navigation ${isVisible && 'isfixed'}`}>
            <div className="nav-wrapper container">
                <a href="index.html" id="logo-container" className="brand-logo">Wanderfullyso</a>
                <a href="#" onClick={handleClick} data-target="" className="waves-effect waves-circle navicon back-button htmlmode show-on-large">
                    <i className="mdi mdi-chevron-left" data-page=""></i>
                </a>
                <a href="#" data-target="slide-nav" className="waves-effect waves-circle navicon sidenav-trigger show-on-large">
                    <i className="app-icon-menu61"></i>
                </a>
                <a href="#" data-target="slide-settings" className="waves-effect waves-circle navicon right sidenav-trigger show-on-large">
                    <i className="app-icon-equalizer2"></i>
                </a>
                <a href="#" data-target="" className="waves-effect waves-circle navicon right nav-site-mode show-on-large">
                    <i className="app-icon-brightness-contrast"></i>
                </a>
            </div>
        </nav>
    );
}

export default Topbar;

