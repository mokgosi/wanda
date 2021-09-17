import React, { useState, useEffect } from "react";
import M from "materialize-css";
import Navbar from '../components/Navbar';
import TeamImagePlaceholder from '../assets/images/placeholders/user-10.jpg';

const About = () => {

    useEffect(() => {

        // initialize carousel
        const carousel = document.querySelectorAll('.carousel');
        M.Carousel.init(carousel, {});

        const slider = document.querySelectorAll('.slider');
        M.Slider.init(slider, {
            indicators: false,
            height: 380,
        });
    });

    return (
        <>
            <div className="pagehead-bg   primary-bg"> </div>
            <div className="container has-pagehead is-pagetitle">
                <div className="section">
                    <h5 className="pagetitle">About Us</h5>
                </div>
            </div>
            {/* <div className="carousel carousel-fullscreen carousel-slider about_carousel ">
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
            </div> */}

            <div className="container">
                <div className="section">
                    <div className="spacer-large"></div>
                    <div className="row">

                        <div className="col s12 m12 l3">
                            <div className="icon-block overlay">
                                <div className="icon-area center primary-text"><i className="mdi mdi-spotlight"></i></div>
                                <h6 className="title-area center">Enjoy</h6>
                                <p className="text-area center">We help travel lovers enjoy virtual travel that is easily accessible, flexible and affordable.</p>
                            </div>
                        </div>
                        <div className="col s12 m12 l3">
                            <div className="icon-block overlay">
                                <div className="icon-area center primary-text"><i className="mdi mdi-thumb-up-outline"></i></div>
                                <h6 className="title-area center">Enhance</h6>
                                <p className="text-area center">Our virtual experiences help travel lovers get unique insights that help enhance their overall travel experience.</p>
                            </div>
                        </div>
                        <div className="col s12 m12 l3">
                            <div className="icon-block overlay">
                                <div className="icon-area center primary-text"><i className="mdi mdi-lan"></i></div>
                                <h6 className="title-area center">Elevate </h6>
                                <p className="text-area center">We help empower locals as Wanderful Hosts so they are able to generate income for themselves and therefore directly benefit from tourism in their own country.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="row primary-bg stats pad-15">
                <div className="spacer"></div>
                <p className="center-align white-text">We are passionate about building and growing WanderfullySo around the three pillars of Enjoy, Enhance and Empower.</p>
            </div> */}
            <div className="container">
                <div className="section">
                    <h5 className="center sec-tit">Our Story</h5>
                    <p className="center-align">WanderfullySo is proudly South African and we are focused on reimagining travel in Africa. Our journey started with a desire to change the narrative of Africa by changing how people learn about destinations in our beautiful continent.  Through thoughtfully curated travel experiences we enable you, the wanderer, to experience the colourful culture, history and rich landscapes of our beautiful continent through the eyes of locals right from the comfort of your home. Our virtual experiences also help you plan your trips better based on local insights so you can have amazing trips and experiences. Our goal is to give you a truly authentic experience by connecting you with amazing locals who embody deep love and pride for the diversity and beauty of their land.</p>
                    {/* <p className="center-align">We also aim to empower locals so they too can empower others. This means we work with locals who are passionate not only about travel but also about enriching their own lives, the lives of others and their communities. Therefore when you book an experience with WaderfullySo, you also empower your Wanderful Host</p> */}
                </div>
            </div>
            <div className="row primary-bg stats pad-15">
                <div className="spacer"></div>
                {/* <h5 className="center bot-0 sec-tit white-text">Our Story</h5> */}
                <p className="center-align white-text">We're changing the way travellers get insights and information about destinations in Africa.</p>
            </div>
            <div className="container">
                <div className="section">
                    <h5 className="center sec-tit">Our Mission</h5>
                    <p className="center-align">Our mission is to help travel lovers get insights and information about destinations in Africa by connecting them to locals because information that is available is insufficient, mostly inaccurate and stereotypical.</p>
                    <p className="center-align">We also aim to empower locals so they too can empower others. This means we work with locals who are passionate not only about travel but also about enriching their own lives, the lives of others and their communities. Therefore when you book an experience with WaderfullySo, you also empower your Wanderful Host</p>

                    {/* <div className="center-align">
                        <a href="#!" className="btn btn-rounded">Know More</a>
                    </div> */}
                    <div className="spacer-large"></div>
                    {/* <div className="spacer"></div> */}


                    {/* <h5 className="center bot-20 sec-tit">Our Hosts</h5>
                    <div className="slider testi-slider7 testi-boxed white-text primary-bg">
                        <ul className="slides transparent testimonials center">
                            <li>
                                <div className="center-align">
                                    <div className="row userinfo">
                                        <img src={TeamImagePlaceholder} alt="image" className="circle responsive-img" />
                                        <div className="center-align">
                                            <span className="name"><strong>Lily Makaleng</strong>
                                                <br /><span className='small position'>CEO</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='prod-rating'><i className='mdi mdi-star colored'></i><i
                                    className='mdi mdi-star colored'></i><i className='mdi mdi-star colored'></i><i
                                        className='mdi mdi-star colored'></i><i className='mdi mdi-star colored'></i></div>
                                <p className="center"><i className="mdi mdi-format-quote-open"></i>We are so pleased with the
                                    purchase of this product. It has tons of components and features to deal with. You can really
                                    create anything you like.<i className="mdi mdi-format-quote-close"></i></p>
                            </li>
                            <li>
                                <div className="center-align">
                                    <div className="row userinfo">
                                        <img src={TeamImagePlaceholder} alt="image" className="circle responsive-img" />
                                        <div className="center-align">
                                            <span className="name"><strong>Mokgosi Lekoma</strong>
                                                <br /><span className='small position'>CTO</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='prod-rating'><i className='mdi mdi-star colored'></i><i
                                    className='mdi mdi-star colored'></i><i className='mdi mdi-star colored'></i><i
                                        className='mdi mdi-star colored'></i><i className='mdi mdi-star colored'></i></div>
                                <p className="center"><i className="mdi mdi-format-quote-open"></i>We highly recommend using It for
                                    your next project. It is super quality and premium template that you can ask for. Just go for
                                    it.<i className="mdi mdi-format-quote-close"></i></p>
                            </li>
                            <li>
                                <div className="center-align">
                                    <div className="row userinfo">
                                        <img src={TeamImagePlaceholder} alt="image" className="circle responsive-img" />
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
                    </div> */}

                    <h5 className="center sec-tit">Our Hosts</h5>
                    <p className="center-align">We offer exciting authentic experiences and it’s all thanks to our Wanderful Hosts!</p>

                </div>
            </div>
            <Navbar />
        </>
    );
}

export default About;