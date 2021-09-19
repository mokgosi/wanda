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

            <div class="container over">
                <div class="section pt0">
                    <div class="spacer"></div>
                    <div class="row ui-mediabox portfolio  ">
                        {wander.map((w, i) => (
                            <div className="col s6" key={w.id}>
                                <div className="video-responsive">
                                    <iframe width="560"
                                        height="315"
                                        src={w.itemId}
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                                </div>
                                <div className="port-data">
                                    <h5 className="truncate">{w.title}</h5>
                                    <p>{w.caption}</p>
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