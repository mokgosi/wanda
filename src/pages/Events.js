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

                    <div class="row mb0">
                        <div class="col s12 pad-0"><h5 class="bot-20 sec-tit  ">Upcoming Events</h5>
                            <div class="spacer"></div>

                            <ul class="events">

                                {upcoming.map((e, i) => (

                                    <li class="event-item" key={e.id}>
                                        <a href="ui-app-event-view.html" >
                                            <img alt="image" class="image" style={{ width: `100%` }} src={e.image} />
                                        </a>
                                        <div class="info">

                                            <div class="date-bubble"><span>27</span>Jan</div>

                                            <a href="ui-app-event-view.html" >
                                                <h4 class="title ">{e.title}</h4>
                                            </a>
                                            <div class="organizer">{e.organizer}</div>
                                            <div class="time">{e.time}</div>
                                            <div class="location">{e.location}</div>
                                            <div class="people avatar-list">
                                                <a href="#!"><img src={UserPlaceholder} alt={e.name} title={e.name}
                                                    class="circle" /></a>
                                                <a href="#!"><img src={UserPlaceholder} alt={e.name} title={e.name}
                                                    class="circle" /></a>
                                                <a href="#!"><img src={UserPlaceholder} alt={e.name} title={e.name}
                                                    class="circle" /></a>
                                                <a href="#!"><img src={UserPlaceholder} alt={e.name} title={e.name}
                                                    class="circle" /></a>
                                                <div class="people-total">250+ going</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div class="row mb0">
                        <div class="col s12 pad-0">
                            <h5 class="bot-20 sec-tit  ">Popular Events</h5>
                            <div class="spacer"></div>

                            <ul class="events mini events-masonry row " >
                                {upcoming.map((e, i) => (
                                    <li class="event-item col s6">
                                        <div class="item-wrap ">
                                            <a href="ui-app-event-view.html" >
                                                <img alt="image" class="image" style={{ width: `100%` }} src={e.image} />
                                            </a>
                                            <div class="info">
                                                <div class="date-bubble"><span>27</span>Jan</div>
                                                <a href="ui-app-event-view.html" >
                                                    <h4 class="title ">{e.title}</h4>
                                                </a>
                                                <div class="organizer">{e.organizer}</div>
                                                <div class="time">{e.time}</div>
                                                <div class="location">{e.location}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>






            <Navbar />
        </>
    );
}

export default Events;