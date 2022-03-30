import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Discover = () => {

    const [wander, setWander] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        
        (async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v1/wander/', {
                    'method': 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Token 586deb1653b498099d33a244bd7c0c60ad020823',
                    },
                    signal: abortController.signal
                    
                });

                setWander(await response.json());

            } catch (error) {
                console.log('error', error);
            }
        })();

        // cancel subscription to useEffect
        return () => abortController.abort(); // cancel pending fetch request on component unmount
      }, []);

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
                    <div className="spacer"></div>
                    <div className="row ui-mediabox portfolio  ">
                        {wander.map((w, i) => (
                            <div className="col s6" key={w.id}>
                                <div className="video-responsive">
                                    <iframe 
                                        width="560" 
                                        height="315" 
                                        frameborder="0"
                                        src={w.video_url}
                                        title="YouTube video player"
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