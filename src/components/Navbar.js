import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import './styles/_navbar.css';

const Navbar = (props) => {
    return (
        <div className="footer-menu circular">
            <ul>
                <li><Link to="/home"><i className="mdi mdi-home-outline"></i><span>Home</span></Link></li>
                <li><Link to="/blog"><i className="mdi mdi-image-album"></i><span>Local Tips</span></Link></li>
                <li><Link to="/events"><i className="mdi mdi-calendar-clock"></i><span>Book</span></Link></li>
                <li><Link to="/wander"><i className="mdi mdi-compass-outline"></i><span>Wander</span></Link></li>
                <li>
                    <a href="https://forms.gle/JESdQe8kReYZunfz5" target="_blank" rel="noreferrer noopener">
                        <i className="mdi mdi-comment-outline"></i><span>Feedback</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;