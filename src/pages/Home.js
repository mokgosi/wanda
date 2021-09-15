import AppCarousel from '../components/AppCarousel';
import { useState } from 'react';

import Slides from '../data/home-slides';
import LatesBlogs from '../data/home-blogs';
import LikeALocalData from '../data/like-a-local';
import TestimonialsData from '../data/testimonials';

import BookVirtualTour from '../components/BookVirtualTour';
import BookFreeVirtualTour from '../components/BookFreeVirtualTour';
import LikeALocal from '../components/LikeALocal';
import Blogs from '../components/Blogs';
import Navbar from '../components/Navbar';
import Subscribe from '../components/Subscribe';

const Home = () => {

    const [slides, setSlides] = useState(Slides);
    const [blogs, setBlogs] = useState(LatesBlogs);
    const [locals, setLocals] = useState(LikeALocalData);
    const [testimonials, setTestimonials] = useState(TestimonialsData);

    return (
        <>
            <div className="carousel carousel-fullscreen carousel-slider home_carousel ">
                <AppCarousel slides={slides} />
            </div>
            <div className="theme-bg">
                <div className="container home-iconbox">
                    <div className="section pb0">
                        <div className="spacer"></div>
                        <div className="row mb0">
                            <div className="col s12 pad-0">
                                <div className="row">
                                    <div className="col s6 m6 l3">
                                        <div className="icon-block block">
                                            <div className="icon-area center primary-text"><i className="mdi mdi-image-search-outline"></i></div>
                                            <p className="title-area center">Search Virtual <br /> Experiences </p>
                                        </div>
                                    </div>
                                    <div className="col s6 m6 l3">
                                        <div className="icon-block block">
                                            <div className="icon-area center primary-text"><i className="mdi mdi-video-account"></i></div>
                                            <p className="title-area center">Virtually Connect <br /> with Locals</p>
                                        </div>
                                    </div>
                                    <div className="col s6 m6 l3">
                                        <div className="icon-block block">
                                            <div className="icon-area center primary-text"><i className="mdi mdi-tooltip-image"></i></div>
                                            <p className="title-area center">Get Local <br /> Tips</p>
                                        </div>
                                    </div>
                                    <div className="col s6 m6 l3">
                                        <div className="icon-block block">
                                            <div className="icon-area center primary-text"><i className="mdi mdi-sunglasses"></i></div>
                                            <p className="title-area center">Book Day Trips &<br /> Activities(Coming Soon)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- VIRTUAL TOURS COMPONENT --> */}

            <BookFreeVirtualTour />
            <Subscribe />

            {/* <!-- BLogs --> */}

            {/* <div className="container">
                <div className="section">
                    <div className="row mb0">
                        <div className="col s12 pad-0">
                            <h5 className="bot-20 sec-tit center ">Blogs</h5>
                            <Blogs blogs={blogs} />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <!-- VIRTUAL TOURS COMPONENT --> */}

            <BookVirtualTour />

            {/* <!-- LIKE A LOCAL COMPONENT  --> */}

            <div className="theme-bg">
                <div className="container">
                    <div className="section pb0">
                        <div className="row ">
                            <div className="col s12 pad-0">
                                <LikeALocal locals={locals} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- TESTIMONIALS COMPONENT  --> */}

            {/* <Testimonials testimonials={testimonials}/> */}

            <Navbar />

        </>
    );
}

export default Home;