import { Link } from "react-router-dom";

const BookVirtualTour = () => {
    return (
        <div className="row primary-bg ">
            <div className="spacer"></div>
            <div className="spacer"></div>
            <h5 className="center bot-0 sec-tit white-text pad-15">Book a Free Concierge Session</h5>
            <p className="center-align white-text pad-30">Considering Cape Town as your next travel or work destination? Or perhaps you're thinking of studying in Cape Town and want to know more about the city? Then you should book your free concierge session today.</p>
            <div className="center">
                <Link to="/events" className="btn-large waves-effect theme-bg-btn">Book Now</Link>
            </div>
            <div className="spacer"></div>
            <div className="spacer"></div>
        </div>
    );
}

export default BookVirtualTour;