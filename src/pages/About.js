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
            <div className="container">
                <div className="section">
                    <h5 className="center sec-tit">Our Story</h5>
                    <p className="center-align">WanderfullySo is proudly South African and we are focused on reimagining travel in Africa. Our journey started with a desire to change the narrative of Africa by changing how people learn about destinations in our beautiful continent.  Through thoughtfully curated travel experiences we enable you, the wanderer, to experience the colourful culture, history and rich landscapes of our beautiful continent through the eyes of locals right from the comfort of your home. Our virtual experiences also help you plan your trips better based on local insights so you can have amazing trips and experiences. Our goal is to give you a truly authentic experience by connecting you with amazing locals who embody deep love and pride for the diversity and beauty of their land.</p>
                </div>
            </div>
            <div className="row primary-bg stats pad-15">
                <div className="spacer"></div>
                <p className="center-align white-text">We're changing the way travellers get insights and information about destinations in Africa.</p>
            </div>
            <div className="container">
                <div className="section">
                    <h5 className="center sec-tit">Our Mission</h5>
                    <p className="center-align">Our mission is to help travel lovers get insights and information about destinations in Africa by connecting them to locals because information that is available is insufficient, mostly inaccurate and stereotypical.</p>
                    <p className="center-align">We also aim to empower locals so they too can empower others. This means we work with locals who are passionate not only about travel but also about enriching their own lives, the lives of others and their communities. Therefore when you book an experience with WaderfullySo, you also empower your Wanderful Host</p>
                    <div className="spacer-large"></div>
                    <h5 className="center sec-tit">Our Hosts</h5>
                    <p className="center-align">We offer exciting authentic experiences and it’s all thanks to our Wanderful Hosts!</p>
                </div>
            </div>
            <Navbar />
        </>
    );
}

export default About;