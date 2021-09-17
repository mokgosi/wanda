import React from 'react';

const Preloader = () => {

    document.addEventListener("DOMContentLoaded", function () {
        //$('.preloader-background').delay(10).fadeOut('slow');
        console.log('loaded');
        let preloader = document.querySelector('.preloader-background');
        var intervalId = setInterval(function () {
            if (!preloader.style.opacity) {
                preloader.style.opacity = 1;

            }
            if (preloader.style.opacity > 0) {
                preloader.style.opacity -= 0.1;
                preloader.style.display = 'none';
            }
            else {
                clearInterval(intervalId);
            }

        }, 2000);

    });

    return (
        <div className="preloader-background">
            <div className="preloader-wrapper">
                <div className="loader"></div>
            </div>
        </div>
    );
}

export default Preloader;