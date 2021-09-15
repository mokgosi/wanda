import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import EventsSlider from '../components/Events';
import EventsData from '../data/events';
import UserPlaceholder from '../assets/images/placeholders/user-10.jpg';
import UpcomingEvents from '../data/upcomping-events';

const Events = () => {

    const [upcoming, setUpcoming] = useState(UpcomingEvents);

    return (
        <>
            <div className="pagehead-bg primary-bg"></div>

            <div className="container has-pagehead is-pagetitle">
                <div className="section">
                    <h5 className="pagetitle">Virtual Experiences</h5>
                </div>
            </div>

            <div className="container over banner-carousel mb0">
                <div className="section pb0">
                    <div className="spacer"></div>

                    <div className="carousel carousel-fullscreen carousel-slider home_carousel carousel-events-home">
                        <EventsSlider events={EventsData} />
                    </div>

                    <div className="spacer"></div>

                    <div className="row mb0">
                        <div className="col s12 pad-0"><h5 className="bot-20 sec-tit  ">Upcoming Events</h5>
                            <div className="spacer"></div>

                            {/* <ul className="events">

                                {upcoming.map((e, i) => (

                                    <li className="event-item" key={e.id}>
                                        <a href="ui-app-event-view.html" >
                                            <img alt="image" className="image" style={{ width: `100%` }} src={e.image} />
                                        </a>
                                        <div className="info">

                                            <div className="date-bubble"><span>27</span>Jan</div>

                                            <a href="ui-app-event-view.html" >
                                                <h4 className="title ">{e.title}</h4>
                                            </a>
                                            <div className="organizer">{e.organizer}</div>
                                            <div className="time">{e.time}</div>
                                            <div className="location">{e.location}</div>
                                            <div className="people avatar-list">
                                                <a href="#!"><img src={UserPlaceholder} alt={e.name} title={e.name}
                                                    className="circle" /></a>
                                                <a href="#!"><img src={UserPlaceholder} alt={e.name} title={e.name}
                                                    className="circle" /></a>
                                                <a href="#!"><img src={UserPlaceholder} alt={e.name} title={e.name}
                                                    className="circle" /></a>
                                                <a href="#!"><img src={UserPlaceholder} alt={e.name} title={e.name}
                                                    className="circle" /></a>
                                                <div className="people-total">250+ going</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul> */}
                        </div>
                    </div>

                    <div className="row mb0">
                        <div className="col s12 pad-0">
                            <h5 className="bot-20 sec-tit  ">Popular Events</h5>
                            <div className="spacer"></div>

                            {/* <ul className="events mini events-masonry row " >
                                {upcoming.map((e, i) => (
                                    <li className="event-item col s6">
                                        <div className="item-wrap ">
                                            <a href="ui-app-event-view.html" >
                                                <img alt="image" className="image" style={{ width: `100%` }} src={e.image} />
                                            </a>
                                            <div className="info">
                                                <div className="date-bubble"><span>27</span>Jan</div>
                                                <a href="ui-app-event-view.html" >
                                                    <h4 className="title ">{e.title}</h4>
                                                </a>
                                                <div className="organizer">{e.organizer}</div>
                                                <div className="time">{e.time}</div>
                                                <div className="location">{e.location}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>

            <Navbar />
        </>
    );
}

export default Events;