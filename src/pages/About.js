import React, { useState, useEffect } from "react";
import M from "materialize-css";
import Navbar from '../components/Navbar';
const About = () => {

    useEffect(() => {

        // initialize carousel
        const carousel = document.querySelectorAll('.carousel');
        M.Carousel.init(carousel, {});
    });

    return (
        <>
            <div className="pagehead-bg   primary-bg"> </div>
            <div className="container has-pagehead is-pagetitle">
                <div className="section">
                    <h5 className="pagetitle">About Us</h5>
                </div>
            </div>
            <div className="carousel carousel-fullscreen carousel-slider about_carousel ">
                <a className="carousel-item" href="#about-slide-0!">
                    <div className="bg" style={{ backgroundImage: `url('assets/images/slider-1.jpg')` }}></div>
                    <div className="item-content center-align white-text">
                        <div className="spacer-large"></div>
                        <h3>Odis is an Elegant & Stylish PWA Mobile App</h3>
                    </div>
                </a>
                <a className="carousel-item" href="#about-slide-1!">
                    <div className="bg" style={{ backgroundImage: `url('assets/images/slider-3.jpg')` }}></div>
                    <div className="item-content center-align white-text">
                        <div className="spacer-large"></div>
                        <h3>A premium multi purpose PWA Mobile UI App</h3>
                    </div>
                </a>
                <a className="carousel-item" href="#about-slide-2!">
                    <div className="bg" style={{ backgroundImage: `url('assets/images/slider-2.jpg')` }}></div>
                    <div className="item-content center-align white-text">
                        <div className="spacer-large"></div>
                        <h3>Odis is fast, secure and user friendly UI App</h3>
                    </div>
                </a>
                <a className="carousel-item" href="#about-slide-3!">
                    <div className="bg" style={{ backgroundI: `url('assets/images/slider-4.jpg')` }}></div>
                    <div className="item-content center-align white-text">
                        <div className="spacer-large"></div>
                        <h3>A modern looking responsive PWA Mobile App</h3>
                    </div>
                </a>
            </div >
            <div className="container">
                <div className="section">
                    <div className="spacer-large"></div>
                    <div className="row">
                        <div className="col s12 m12 l3">
                            <div className="icon-block overlay">
                                <div className="icon-area center primary-text"><i className="mdi mdi-speedometer"></i></div>
                                <h6 className="title-area center">Light & Fast</h6>
                                <p className="text-area center">It is designed to be super fast and light in weight. It speeds
                                    your
                                    development and helps smooth user interation.</p>
                            </div>
                        </div>
                        <div className="col s12 m12 l3">
                            <div className="icon-block overlay">
                                <div className="icon-area center primary-text"><i className="mdi mdi-spotlight"></i></div>
                                <h6 className="title-area center">Tons of Features</h6>
                                <p className="text-area center">By utilizing elements and principles of Material Design, It is
                                    designed with unique set of features and functionalities.</p>
                            </div>
                        </div>
                        <div className="col s12 m12 l3">
                            <div className="icon-block overlay">
                                <div className="icon-area center primary-text"><i className="mdi mdi-thumb-up-outline"></i></div>
                                <h6 className="title-area center">Quality Code</h6>
                                <p className="text-area center">It follows black box level coding standard. All the code is well
                                    formatted, commented and ready to use.</p>
                            </div>
                        </div>
                        <div className="col s12 m12 l3">
                            <div className="icon-block overlay">
                                <div className="icon-area center primary-text"><i className="mdi mdi-lan"></i></div>
                                <h6 className="title-area center">Multi Purpose</h6>
                                <p className="text-area center">It can be customized and used for any niche. The vast
                                    possibilities
                                    of this template makes it multi purpose.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row primary-bg stats pad-15">
                <div className="spacer"></div>
                <h5 className="center bot-0 sec-tit white-text">Statistics</h5>
                <p className="center-align white-text">Watch this space!</p>

            </div>
            <div className="container">
                <div className="section">
                    <h5 className="center sec-tit">Our Mission</h5>
                    <p className="center-align">Mobile applications often stand in contrast to desktop applications which run on
                        desktop computers, and with web applications which run in mobile web browsers rather than directly
                        on
                        the mobile device.</p>
                    <div className="center-align">
                        <a href="#!" className="btn btn-rounded">Know More</a>
                    </div>
                    <div className="spacer-large"></div>
                    <div className="spacer"></div>
                    <h5 className="center bot-20 sec-tit">Our Customer's Say</h5>
                    <div className="slider testi-slider7 testi-boxed white-text primary-bg">
                        <ul className="slides transparent testimonials center">
                            <li>
                                <div className="center-align">
                                    <div className="row userinfo">
                                        <img src="assets/images/user-41.jpg" alt="image" className="circle responsive-img" />
                                        <div className="center-align">
                                            <span className="name"><strong>Clem Jacklin</strong>
                                                <br /><span className='small position'>CEO, Ink Ltd.</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='prod-rating'><i className='mdi mdi-star colored'></i><i
                                    className='mdi mdi-star colored'></i><i className='mdi mdi-star colored'></i><i
                                        className='mdi mdi-star colored'></i><i className='mdi mdi-star colored'></i></div>
                                <p className="center"><i className="mdi mdi-format-quote-open"></i>We are so pleased with the
                                    purchase
                                    of this product. It has tons of components and features to deal with. You can really
                                    create
                                    anything you like.<i className="mdi mdi-format-quote-close"></i></p>
                            </li>
                            <li>
                                <div className="center-align">
                                    <div className="row userinfo">
                                        <img src="assets/images/user-36.jpg" alt="image" className="circle responsive-img" />
                                        <div className="center-align">
                                            <span className="name"><strong>Sue Goldby</strong>
                                                <br /><span className='small position'>Manager, Zed Ind.</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='prod-rating'><i className='mdi mdi-star colored'></i><i
                                    className='mdi mdi-star colored'></i><i className='mdi mdi-star colored'></i><i
                                        className='mdi mdi-star colored'></i><i className='mdi mdi-star colored'></i></div>
                                <p className="center"><i className="mdi mdi-format-quote-open"></i>We highly recommend using It for
                                    your
                                    next project. It is super quality and premium template that you can ask for. Just go for
                                    it.<i className="mdi mdi-format-quote-close"></i></p>
                            </li>
                            <li>
                                <div className="center-align">
                                    <div className="row userinfo">
                                        <img src="../assets/images/placeholders/user-26.jpg" alt="image" className="circle responsive-img" />
                                        <div className="center-align">
                                            <span className="name"><strong>Deck Sugge</strong>
                                                <br /><span className='small position'>Sr. Designer</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='prod-rating'>
                                    <i className='mdi mdi-star colored'></i>
                                    <i className='mdi mdi-star colored'></i>
                                    <i className='mdi mdi-star colored'></i>
                                    <i className='mdi mdi-star colored'></i>
                                    <i className='mdi mdi-star colored'></i>
                                </div>
                                <p className="center">
                                    <i className="mdi mdi-format-quote-open"></i>A perfect template to get you going
                                    for your next project. A full loaded feature packed template. It is multi purpose and
                                    super
                                    fast. Thank you for such a wonderful template.<i className="mdi mdi-format-quote-close"></i>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    );
}

export default About;