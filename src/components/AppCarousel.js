import React, { useState, useEffect } from 'react';
import M from "materialize-css";

const AppCarousel = ({ slides, height, width }) => {

    useEffect(() => {

        // document.addEventListener('DOMContentLoaded', () => {
        // initialize carousel
        const carousel = document.querySelectorAll('.carousel');
        M.Carousel.init(carousel, {
            fullWidth: true,
            indicators: true, // this option is required for autoplay functionnality
        });

        // custom function for autoplaying 
        let indicatorItems = document.querySelectorAll('.carousel .indicator-item'),
            slideTime = 3500,
            activeClass = "active";

        setInterval(() => {
            indicatorItems.forEach(el => {
                if (el.classList.contains(activeClass)) {
                    var sib = el.nextElementSibling;
                    if (sib == null) {
                        indicatorItems[0].click();
                    } else {
                        sib.click()
                    }
                }
            });
        }, slideTime);
        //   });

    });

    return (
        <>
            {slides.map((s, i) => (
                <a className="carousel-item" key={s.id} href="#carousel-slide-0!">
                    <div className="bg" style={{ backgroundImage: `url(${s.image})` }}>
                        {/* <img src={s.image} height={height} width={width} /> */}
                    </div>
                    <div className="item-content center-align white-text">
                        <div className="spacer-xlarge"></div>
                        <h3>{s.title}</h3>
                        <h5 className="light white-text">{s.caption}</h5>
                    </div>
                </a>
            ))}
        </>
    );
}

export default AppCarousel;