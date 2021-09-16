import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Slides from '../data/slides';
import useWindowDimensions from "../utils/useWindowDimensions";
import AppCarousel from '../components/AppCarousel';
import SiteIcon from '../assets/images/32x32.png';

const Welcome = () => {

    const [slides, setSlides] = useState(Slides);

    const { height, width } = useWindowDimensions();

    return (
        <>
            <h1 className="white-text center welcome-logo index-welcome">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="130.000000pt" height="130.000000pt" viewBox="0 0 134.000000 134.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,134.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                        <path d="M604 1222 c-43 -7 -142 -47 -181 -74 -121 -82 -176 -281 -122 -441 29 -88 91 -163 167 -204 24 -13 54 -53 113 -150 44 -73 84 -133 87 -132 4 0 40 56 81 125 65 110 81 130 133 165 32 22 58 43 58 48 0 4 -9 16 -20 26 -12 10 -30 35 -42 54 -12 20 -23 38 -25 40 -2 3 -16 -7 -31 -22 -39 -37 -93 -57 -157 -57 -66 0 -108 16 -159 60 -57 50 -80 103 -80 180 0 185 192 302 352 215 29 -16 57 -34 63 -42 9 -10 18 -3 41 34 16 27 36 53 45 60 13 10 9 16 -27 42 -77 56 -205 87 -296 73z m230 -61 c32 -17 61 -33 64 -36 3 -2 -7 -23 -22 -45 l-26 -40 -58 32 c-107 61 -231 40 -318 -54 -54 -59 -77 -121 -71 -190 8 -87 25 -123 84 -180 83 -79 184 -93 297 -40 38 18 70 31 71 30 1 -2 11 -17 23 -35 12 -17 22 -36 22 -42 0 -5 -20 -24 -44 -40 -31 -22 -63 -62 -115 -146 -40 -63 -74 -115 -76 -115 -4 0 -41 60 -73 120 -36 66 -78 116 -118 141 -115 71 -177 195 -168 338 4 70 31 171 45 171 5 0 9 6 9 13 1 37 97 112 177 138 90 30 219 21 297 -20z"></path>
                        <path d="M925 1008 c-63 -56 -46 -135 40 -178 53 -27 65 -53 32 -74 -13 -8 -24 -7 -46 6 -28 16 -30 15 -56 -12 l-26 -28 33 -23 c67 -48 164 -24 194 48 14 31 13 38 -3 71 -12 25 -34 45 -66 63 -67 36 -75 45 -54 66 14 14 22 15 46 6 26 -10 32 -8 56 17 l26 27 -34 17 c-51 23 -110 21 -142 -6z m66 -8 c13 -8 19 -7 19 0 0 7 6 8 19 1 10 -6 20 -9 22 -8 2 1 -1 -3 -8 -9 -7 -6 -24 -9 -38 -7 -25 5 -46 -9 -58 -39 -6 -18 6 -30 91 -89 34 -23 42 -35 42 -60 0 -43 -15 -66 -55 -85 -37 -17 -67 -14 -99 9 -30 22 -12 37 28 25 71 -22 119 51 59 89 -16 10 -31 21 -34 26 -3 5 -10 9 -15 9 -5 1 -19 7 -31 16 -34 22 -32 84 3 111 31 24 30 24 55 11z"></path>
                        <path d="M496 873 c8 -27 19 -67 25 -90 6 -24 15 -43 20 -43 5 0 9 1 9 3 0 1 11 34 24 72 22 66 24 68 31 40 14 -59 32 -106 40 -108 5 -1 14 16 21 38 6 22 19 62 27 88 10 32 11 47 3 44 -6 -2 -19 -32 -28 -66 -9 -34 -19 -68 -21 -74 -2 -7 -12 21 -21 61 -10 40 -22 74 -26 77 -4 3 -18 -30 -31 -72 l-24 -76 -23 76 c-13 42 -27 77 -32 77 -5 0 -2 -21 6 -47z"></path>
                        <path d="M730 830 c0 -73 3 -90 15 -90 10 0 15 11 15 35 0 32 2 35 30 35 20 0 30 5 30 15 0 10 -10 15 -30 15 -25 0 -30 4 -30 25 0 22 4 25 35 25 24 0 35 5 35 15 0 11 -12 15 -50 15 l-50 0 0 -90z"></path>
                        <path d="M1147 803 c-24 -23 12 -55 38 -33 12 10 13 16 4 26 -12 15 -31 18 -42 7z"></path>
                        <path d="M595 166 c-20 -16 -20 -16 -1 -31 24 -18 125 -20 149 -2 30 22 4 41 -65 45 -47 3 -68 -1 -83 -12z m124 -10 c15 -18 -5 -26 -63 -26 -47 0 -57 5 -49 26 7 19 96 19 112 0z"></path>
                    </g>
                </svg>
                WanderfullySo.
            </h1>
            <div className="fullfixed">
                <div className="carousel carousel-fullscreen carousel-slider walk_carousel" style={{ height: height, width: width }}>
                    <AppCarousel slides={slides} />
                </div>
            </div>

            <div className="wave-bg">
                <div></div>
            </div>

            <div className="center index-start">
                <Link to="/home" className="waves-light btn-large bg-primary"> Get Started </Link>
                {/* <a href="ui-pages-home.html" className="waves-light btn-large bg-primary"> Get Started </a> */}
                <a href="#" className="login-link">&nbsp;</a>
                <a href="#" className="register-link">&nbsp;</a>
            </div>
        </>
    );
}

export default Welcome;