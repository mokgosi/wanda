import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PortfolioImage from "../assets/images/placeholders/portfolio-7.jpg"
import WandaData from '../data/wander'

const Discover = () => {

    const [wander, setWander] = useState(WandaData);

    return (
        <>
            <div className="pagehead-bg primary-bg" ></div>
            <div className="container has-pagehead is-pagetitle">
                <div className="section">
                    <h5 className="pagetitle">Wander</h5>
                </div>
            </div>

            <div className="container over pl0 pr0 overhide portfw">
                <div className="section pt0 pb0">
                    <div className="row ui-mediabox portfolio fullwidth">
                        {wander.map((w, i) => (
                            <div className="col s12" key={w.id}>
                                <a className="img-wrap" href={w.image} data-fancybox="images" data-caption={w.title}>
                                    <img alt="image" className="" style={{ width: `100%` }} src={w.image} />
                                </a>
                                <div className="port-data">
                                    <h5 className="truncate">{w.title}</h5>
                                    <p>{w.caption}</p>
                                    <a href="#!">Explore <i className="mdi mdi-arrow-right"></i></a>
                                    <div className="user-actions">
                                        <a href="#!" className='active'><i className="mdi mdi-thumb-up-outline"></i><span>845</span></a>
                                        <a href="#!" ><i className="mdi mdi-heart-outline"></i><span>376</span></a>
                                        <a href="#!" ><i className="mdi mdi-comment-outline"></i><span>731</span></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Navbar />
        </>
    );
}

export default Discover;