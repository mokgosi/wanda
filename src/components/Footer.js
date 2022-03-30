import React from "react";
import { useState } from "react";

import SocialMedia from "./SocialMedia";
import SocialMediaPlaforms from '../data/socials';

const Footer = () => {

    const [socials, setSocials] = useState(SocialMediaPlaforms);

    return (
        <footer className="page-footer center social-colored">
            <div className="container footer-content">
                <div className="row">
                    <div className="">
                        <h5 className="logo">Wanderfullyso</h5>
                    </div>
                    <div className="link-wrap">
                        <ul className="link-ul">
                            <li><a href="#!"><i className="mdi mdi-phone"></i> +27WanderfullySo.</a></li>
                            <li><a href="#!"><i className="mdi mdi-email"></i>email@wanderfullyso.com</a></li>
                            <li><a href="#!"><i className="mdi mdi-map-marker"></i>Cape Town, South Africa</a></li>
                        </ul>
                        <SocialMedia socials={socials} />
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container">
                    &copy; Copyright <a href="https://www.wanderfullyso.com/">WanderfullySo</a>. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
