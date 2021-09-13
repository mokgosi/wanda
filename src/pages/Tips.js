import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';

import Avatar from '../assets/images/placeholders/user-10.jpg';
import TipsData from '../data/blogs';
import CategoriesData from '../data/categories';

const Tips = () => {

    const [tips, setTips] = useState(TipsData);
    const [categories, setCategories] = useState(CategoriesData);

    return (
        <>
            <div className="pagehead-bg primary-bg"></div>
            <div className="container has-pagehead is-pagetitle">
                <div className="section">
                    <h5 className="pagetitle">Local Tips</h5>
                </div>
            </div>

            {/* {tips.map((e, i) => ( */}


            <div className="container over mb0">
                <div className="section">
                    <div className="row ui-mediabox blogs" >

                        {tips.map((t, i) => (
                            <div className="col-item col s12 ">
                                <Link to="/blog-item">
                                    <h4 className="title">{t.title}</h4>
                                </Link>
                                <div className="user-avatar mini">
                                    <div className="maillink status away">
                                        <img src={Avatar} alt="Gaby Cuchey" title="Gaby Cuchey" className="circle" />
                                        <span className="title">{t.author}</span>
                                        <span className="time">{t.date}</span>
                                    </div>
                                </div>
                                <div className="blog-img-wrap">
                                    <a className="img-wrap round" href={t.image} data-fancybox="images" data-caption="Bringing positive outlook of your project">
                                        <img alt="image" className="" style={{ width: `100%` }} src={t.image} />
                                    </a>
                                </div>
                                <div className="blog-info  ">
                                    <p className="bot-0 text">{t.tagline}</p>
                                    <div className="user-actions">
                                        <a href="#!" ><i className="mdi mdi-thumb-up-outline"></i><span>285</span></a>
                                        <a href="#!" className='active'><i className="mdi mdi-heart-outline"></i><span>275</span></a>
                                        <a href="#!" className='active'><i className="mdi mdi-comment-outline"></i><span>434</span></a>
                                    </div>
                                    <div className="spacer"></div>
                                    <div className="divider"></div>
                                    <div className="spacer"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div class="spacer"></div>
                    <div class="row ">
                        <div class="col s12 pad-0">
                            <h5 class="bot-20 sec-tit">Blog Categories</h5>
                            <div class="spacer"></div>
                            <div class="row settings-row ">
                                {categories.map((c, i) => (
                                    <div class="col s6">
                                        <div class="setting-box  center  img-box ">
                                            <a class="img-wrap round" href="#!.html">
                                                <img alt="image" class="responsive-img " src={c.image} />
                                            </a>
                                            <a href="#!.html">
                                                <h6>{c.category}</h6>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="row primary-bg mb0">
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                        <h5 className="center bot-0 sec-tit white-text pad-15">SUBSCRIBE TO OUR NEWSLETTER</h5>
                        <p className="center-align white-text pad-30">Be the first to try out our virtual experience! Sign up now on our waiting list and we’ll let you know when we launch our experiences. Spaces are limited.</p>
                        <div className="center">
                            <a className="btn-large waves-effect theme-bg-btn  modal-trigger" target="_blank" href="#modal">Subscribe</a>
                        </div>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                    </div>
                </div>
            </div>








            <Navbar />
        </>
    );
}

export default Tips;