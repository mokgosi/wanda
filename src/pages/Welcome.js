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
                {/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="300.000000pt" height="300.000000pt"
                    viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                        <path
                            d="M1348 2965 c-3 -3 -34 -10 -69 -16 -110 -18 -365 -113 -377 -141 -2 -5 -10 -8 -18 -8 -8 0 -14 -4 -14 -10 0 -5 -7 -10 -15 -10 -8 0 -15 -4 -15 -10 0 -5 -6 -10 -14 -10 -8 0 -16 -3 -18 -7 -2 -5 -25 -26 -53 -48 -61 -49 -147 -135 -177 -178 -12 -18 -25 -34 -29 -37 -22 -17 -139 -232 -139 -256 0 -8 -4 -14 -10 -14 -5 0 -10 -13 -10 -30 0 -16 -4 -30 -9 -30 -8 0 -12 -13 -27 -107 -4 -21 -11 -43 -16 -50 -13 -16 -12 -393 2 -407 5 -5 10 -21 10 -35 0 -25 16 -83 31 -113 5 -10 9 -24 9 -32 0 -8 10 -34 21 -58 12 -23 27 -54 33 -68 6 -14 13 -27 16 -30 9 -9 39 -64 51 -92 6 -16 15 -28 20 -28 5 0 9 -4 9 -10 0 -9 19 -35 48 -65 6 -8 12 -16 12 -19 0 -5 23 -33 65 -80 6 -6 37 -42 70 -81 33 -38 78 -88 100 -111 22 -23 62 -68 90 -99 27 -32 61 -70 75 -85 14 -15 39 -43 55 -62 46 -53 147 -168 170 -192 11 -12 52 -57 90 -101 39 -44 89 -101 113 -126 24 -26 49 -55 57 -65 14 -18 16 -18 39 11 13 17 41 48 62 71 22 22 50 54 64 71 14 17 48 55 75 85 28 30 73 81 102 114 28 32 66 75 85 95 18 20 55 62 82 93 27 31 61 70 75 86 14 15 58 63 96 106 112 125 159 178 173 192 7 8 25 30 40 50 15 21 30 39 33 42 4 3 31 43 61 90 145 229 199 404 199 648 0 139 -24 304 -51 354 -6 10 -10 24 -10 32 0 13 -7 28 -58 134 -93 188 -226 338 -409 460 -34 23 -66 42 -72 42 -5 0 -11 3 -13 8 -9 21 -187 88 -293 111 -27 6 -71 15 -97 21 -48 10 -310 14 -320 5z m322 -30 c30 -4 62 -9 70 -12 8 -4 26 -8 40 -10 41 -7 207 -72 268 -105 150 -82 313 -228 400 -358 64 -96 136 -252 156 -335 10 -44 22 -93 27 -109 5 -16 9 -109 9 -207 0 -158 -3 -190 -25 -271 -31 -117 -81 -236 -142 -333 -7 -11 -15 -27 -19 -35 -4 -8 -10 -17 -14 -20 -4 -3 -18 -22 -33 -44 -30 -45 -93 -120 -159 -188 -25 -26 -44 -48 -41 -48 3 0 -5 -10 -18 -23 -13 -13 -53 -56 -89 -97 -36 -41 -69 -80 -75 -86 -5 -6 -37 -42 -70 -79 -33 -38 -83 -94 -111 -124 -28 -31 -66 -74 -85 -96 -19 -22 -50 -56 -69 -76 -19 -19 -53 -57 -75 -84 -22 -27 -57 -67 -77 -90 l-38 -40 -37 39 c-21 22 -49 54 -64 72 -14 17 -56 66 -95 109 -236 262 -290 326 -286 338 1 5 -2 6 -7 3 -5 -3 -25 13 -44 37 -51 61 -88 102 -260 290 -21 23 -46 54 -55 69 -9 16 -20 28 -24 28 -4 0 -8 7 -8 16 0 8 -4 13 -8 10 -5 -3 -17 9 -27 27 -10 18 -21 34 -25 37 -7 5 -36 53 -69 113 -12 21 -18 43 -15 49 4 6 3 8 -3 5 -8 -5 -16 10 -53 98 -17 42 -40 121 -56 190 -13 57 -16 328 -4 365 9 30 14 59 19 118 0 7 5 11 10 8 5 -4 7 2 4 13 -9 34 80 230 160 354 46 70 219 244 261 263 17 7 27 13 21 14 -12 0 58 48 76 52 8 2 19 9 24 16 6 7 18 14 27 15 9 2 22 8 29 14 8 6 19 12 24 14 6 1 33 13 62 25 62 28 202 64 255 66 22 1 41 5 44 10 6 9 203 4 294 -7z">
                        </path>
                        <path
                            d="M1340 2808 c-111 -23 -223 -60 -299 -99 -31 -16 -59 -29 -63 -29 -4 0 -19 -11 -34 -25 -15 -14 -32 -25 -38 -25 -13 0 -206 -183 -206 -195 0 -4 -13 -20 -28 -35 -15 -14 -36 -44 -46 -66 -10 -21 -24 -46 -32 -54 -7 -8 -13 -18 -13 -23 0 -19 -25 -75 -32 -71 -4 2 -6 -4 -4 -13 1 -10 -1 -22 -4 -28 -4 -5 -13 -30 -20 -55 -7 -25 -18 -58 -23 -75 -15 -48 -21 -283 -10 -365 15 -101 18 -114 48 -195 14 -38 27 -77 27 -85 1 -8 5 -17 8 -20 3 -3 23 -36 43 -74 20 -38 36 -65 36 -60 0 5 12 -9 27 -31 36 -53 243 -255 243 -237 0 3 8 -2 18 -11 22 -20 171 -90 242 -113 30 -11 57 -22 58 -27 2 -4 7 -5 11 -3 3 2 29 0 56 -6 87 -17 277 -26 306 -13 10 3 23 5 30 4 8 -1 21 1 29 4 8 3 54 15 103 26 48 12 98 28 112 37 14 9 25 14 25 11 0 -11 145 76 215 129 61 45 153 142 221 231 22 30 68 116 105 198 93 210 91 555 -7 773 -7 17 -22 49 -31 70 -42 93 -182 264 -279 340 -50 39 -163 110 -186 117 -13 4 -27 11 -33 15 -18 13 -161 59 -187 61 -2 0 -29 6 -61 13 -65 15 -260 18 -327 4z m320 -29 c36 -6 82 -13 103 -16 20 -3 37 -9 37 -14 0 -5 11 -9 24 -9 14 0 28 -4 31 -10 3 -5 15 -10 26 -10 10 0 19 -4 19 -10 0 -5 6 -10 13 -10 18 0 67 -24 67 -32 0 -5 5 -8 10 -8 6 0 41 -20 78 -44 72 -48 182 -157 248 -246 50 -67 114 -191 114 -218 0 -12 4 -23 9 -26 5 -3 11 -16 14 -28 3 -13 13 -50 22 -83 20 -70 24 -359 7 -416 -6 -19 -16 -54 -22 -79 -31 -115 -119 -286 -185 -357 -84 -89 -136 -139 -175 -166 -25 -17 -46 -34 -48 -39 -2 -4 -10 -8 -18 -8 -8 0 -14 -4 -14 -10 0 -5 -9 -10 -19 -10 -11 0 -21 -3 -23 -7 -3 -7 -72 -43 -123 -64 -11 -4 -56 -18 -100 -31 -71 -20 -102 -23 -265 -23 -151 0 -192 3 -222 17 -21 9 -58 20 -83 23 -25 4 -45 11 -45 16 0 5 -6 9 -14 9 -17 0 -100 42 -104 52 -2 5 -12 8 -23 8 -10 0 -19 5 -19 10 0 6 -6 10 -14 10 -8 0 -16 4 -18 8 -1 5 -24 22 -49 40 -43 29 -101 85 -181 174 -39 43 -106 154 -132 218 -38 94 -56 150 -56 176 0 11 -5 25 -11 31 -14 14 -14 365 0 392 6 11 11 33 11 50 0 16 5 33 10 36 6 3 10 17 10 31 0 13 5 24 10 24 6 0 10 8 10 18 0 11 7 34 16 53 37 79 59 119 66 119 5 0 8 6 8 13 0 6 10 24 23 39 12 14 37 45 56 68 19 23 54 61 77 85 61 61 237 175 269 175 8 0 15 5 15 10 0 6 9 10 19 10 11 0 23 5 26 10 3 6 17 10 31 10 13 0 24 5 24 10 0 6 13 10 30 10 16 0 39 5 52 10 29 13 197 27 263 22 28 -2 79 -8 115 -13z">
                        </path>
                        <path
                            d="M1265 2621 c-3 -6 -24 -11 -45 -11 -22 0 -55 -9 -75 -20 -39 -22 -70 -26 -80 -10 -3 6 -12 10 -20 10 -22 0 -96 -82 -102 -114 -4 -16 -17 -35 -32 -44 -25 -14 -101 -122 -101 -142 0 -6 -4 -10 -10 -10 -5 0 -10 -13 -10 -30 0 -16 5 -30 10 -30 6 0 10 -11 10 -24 0 -14 -4 -28 -10 -31 -5 -3 -10 -26 -10 -51 0 -24 -5 -44 -10 -44 -6 0 -5 -8 2 -20 7 -11 19 -20 26 -20 7 0 16 -10 21 -22 29 -72 156 -178 169 -140 2 7 22 12 48 12 48 0 124 20 124 32 0 13 44 8 63 -6 9 -7 17 -21 17 -30 0 -19 21 -21 38 -4 9 9 16 7 32 -7 22 -19 26 -67 11 -107 -7 -20 -4 -30 20 -57 16 -19 29 -40 29 -47 0 -8 5 -24 12 -37 25 -50 28 -58 28 -97 0 -21 -9 -55 -20 -75 -21 -38 -27 -100 -10 -110 6 -3 10 -15 10 -26 0 -10 5 -19 10 -19 6 0 10 -9 10 -20 0 -11 5 -20 10 -20 6 0 10 -14 10 -31 0 -39 20 -109 32 -109 4 0 8 -7 8 -15 0 -8 5 -15 10 -15 6 0 10 -14 10 -30 0 -17 7 -44 15 -60 14 -26 21 -30 59 -30 92 0 138 34 249 181 53 71 74 129 47 129 -20 0 -9 27 26 63 20 20 40 37 45 37 4 0 20 11 35 25 21 20 25 30 20 57 -3 18 -8 50 -12 71 -3 20 -10 40 -15 43 -14 8 -10 78 6 112 9 16 36 50 61 74 87 81 110 106 124 135 8 15 17 30 20 33 3 3 13 20 23 38 23 40 16 82 -13 82 -11 0 -20 -3 -20 -7 0 -11 -50 -33 -74 -33 -29 1 -56 24 -56 48 0 11 -16 34 -36 50 -20 16 -41 40 -48 53 -7 13 -17 33 -23 44 -6 11 -21 40 -33 65 -13 25 -40 77 -62 117 -22 41 -34 74 -29 78 6 3 8 12 5 19 -4 10 -28 13 -85 13 -68 0 -83 4 -103 22 -12 11 -29 21 -38 21 -17 0 -42 -26 -51 -53 -6 -17 -9 -17 -39 -1 -18 9 -40 22 -48 29 -8 7 -31 17 -50 22 -33 9 -35 11 -35 54 l0 44 -47 3 c-25 2 -49 -2 -53 -7z m78 -57 c2 -34 25 -64 48 -64 9 0 43 -14 75 -31 l58 -30 28 30 c34 36 31 35 71 17 58 -26 92 -33 125 -26 26 6 32 4 32 -9 0 -17 63 -145 84 -171 7 -8 21 -35 31 -60 29 -67 60 -114 89 -133 14 -10 26 -26 26 -35 0 -22 35 -57 70 -70 17 -6 37 -5 62 4 21 7 40 10 42 5 10 -16 -68 -133 -121 -180 -87 -77 -123 -135 -123 -193 0 -27 4 -57 9 -66 5 -9 12 -43 16 -74 l7 -57 -48 -34 c-61 -44 -82 -80 -77 -130 4 -32 -1 -45 -29 -80 -19 -23 -41 -53 -50 -67 -56 -86 -110 -120 -190 -120 -35 0 -38 2 -48 43 -7 23 -20 57 -31 75 -10 18 -27 65 -37 105 -11 40 -28 93 -38 119 -18 47 -18 49 1 104 10 31 19 70 18 88 -1 42 -29 123 -59 168 -19 30 -24 51 -24 101 0 71 -22 107 -64 107 -13 0 -35 9 -49 20 -31 25 -43 25 -109 1 -31 -12 -80 -20 -119 -20 -79 -1 -100 12 -150 91 -18 29 -38 56 -43 60 -5 3 -9 26 -7 50 1 24 3 74 4 111 2 50 6 72 18 80 9 7 14 18 12 25 -3 6 0 12 6 12 6 0 11 7 11 15 0 8 5 15 10 15 6 0 10 6 10 14 0 8 5 18 12 22 7 5 8 3 3 -7 -5 -8 4 -1 19 15 16 16 36 48 46 70 9 23 29 47 43 55 15 8 24 18 21 23 -3 4 4 8 15 8 12 0 21 -4 21 -9 0 -11 56 1 95 21 17 9 56 18 89 22 32 3 61 8 64 11 10 10 24 -13 25 -41z">
                        </path>
                        <path
                            d="M2148 1470 c-42 -13 -77 -43 -78 -68 0 -12 -6 -31 -12 -42 -11 -17 -10 -22 2 -31 11 -8 12 -12 3 -16 -7 -2 -13 -13 -13 -23 0 -10 -4 -22 -10 -25 -14 -9 -12 -57 4 -77 7 -10 22 -18 33 -18 23 0 53 39 53 69 0 11 5 23 10 26 6 3 10 14 10 25 0 10 10 38 21 62 37 75 41 85 37 104 -4 22 -22 26 -60 14z m32 -41 c0 -5 -10 -30 -23 -57 -12 -26 -29 -67 -37 -92 -7 -25 -20 -54 -28 -65 -12 -16 -13 -17 -8 -2 4 12 1 17 -9 15 -13 -3 -15 0 -15 25 0 8 4 7 11 -3 8 -12 9 -9 5 12 -3 15 -2 30 4 33 5 3 9 23 8 43 -2 56 10 81 45 96 33 14 47 12 47 -5z">
                        </path>
                    </g>
                </svg>  */}
                <div><img src={SiteIcon} alt="" title="" className="" /></div>
                Wanderfullyso
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