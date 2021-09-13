
import React, { useState, useEffect } from 'react';
import M from "materialize-css";

const Events = ({ events, height, width }) => {

    useEffect(() => {

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

    });


    return (
        <>
            {events.map((e, i) => (
                <a className="carousel-item" href="#carousel-slide-0!" key={e.id} >
                    <div className="bg" style={{ backgroundImage: `url(${e.image})` }}></div>
                    <div className="item-content center-align white-text">
                        <div className="spacer-large"></div>
                        <h3>{e.title}</h3>
                        <h5 className="light white-text">{e.caption}</h5>
                    </div>
                </a>
            ))}
        </>
    );
}

export default Events;