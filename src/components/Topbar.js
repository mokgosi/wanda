import React from 'react';


const Topbar = () => {
    return (
        <nav className="fix_topscroll logo_on_fixed topbar navigation">
            <div className="nav-wrapper container">
                <a href="index.html" id="logo-container" className="brand-logo">Wanderfullyso</a>
                <a href="#" data-target="" className="waves-effect waves-circle navicon back-button htmlmode show-on-large">
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

