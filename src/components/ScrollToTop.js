import React, { useEffect, useState } from "react";

export default function ScrollToTop() {

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

    return (
        <>
            {isVisible &&
                <div className="backtotop" onClick={scrollToTop} style={{ display: 'inline-block' }}>
                    <a className="btn-floating btn primary-bg">
                        <i className="mdi mdi-chevron-up"></i>
                    </a>
                </div>}
        </>
    );
}