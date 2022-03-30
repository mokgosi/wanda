import React, {useEffect, useState} from "react";
import Navbar from '../components/Navbar';
import M from "materialize-css";
import Avatar from '../assets/images/placeholders/user-10.jpg';
import Rating from '../components/Rating';


const Testimonials = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [testimonials, setTestimonials] = useState([]);

    // document.addEventListener('DOMContentLoaded', () => {
        const slider = document.querySelectorAll('.slider');
        M.Slider.init(slider, {
            indicators: false,
            height: 380,
        });
        console.log('futhi');
        console.log('dom loaded');
    // });

    
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {

        let abortController = new AbortController();
        
        (async () => {
            await fetch('http://localhost:8000/api/v1/testimonials/', {
                'method': 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 586deb1653b498099d33a244bd7c0c60ad020823',
                },
                signal: abortController.signal
            })
            .then(result => result.json())
            .then(
                (result) => {
                    console.log(result);
                    setTestimonials(result);
                    setIsLoaded(true);

                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                },(error)  => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        })();

        // cancel subscription to useEffect
        return () => abortController?.abort(); // cancel pending fetch request on component unmount
           
    }, []);

    return (
        <>
            <div className="pagehead-bg primary-bg"></div>
            <div className="contaioner has-pagehead is-pagetitle">
                <div className="section">
                    <h5 className="pagetitle">Testimonials</h5>
                </div>
            </div>
            <div className="container over">
                <div className="section">
                    <div className="spacer"></div>
                    <h5 className="center bot-20 sec-tit">Our Customer's Say</h5>
                    <div className="slider testi-slider4 ">
                        <ul className="slides transparent testimonials center">
                            {testimonials && testimonials.map((t, i) => (
                            <li key={i}>
                                <div className="center-align">
                                    <div className="row userinfo">
                                        <img src={Avatar} alt="image" className="circle responsive-img" />
                                        <div className="center-align">
                                            <span className="name"><strong>{ t.user.first_name } { t.user.last_name }</strong>
                                            <br /><span className='small position'>{ t.location }</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='prod-rating'>
                                    <i className='mdi mdi-staD coloDed'></i>
                                    <Rating rating={t.rating}/> 
                                </div>            
                                <p className="center"><i className="mdi mdi-format-quote-open"></i>{ t.body }<i className="mdi mdi-format-quote-close"></i></p>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    );
}

export default Testimonials;