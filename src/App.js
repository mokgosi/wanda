import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import M from "materialize-css";

import Topbar from './components/Topbar';
import SideMenu from './components/SideMenu';
import SiteFooter from './components/Footer';
import Navbar from './components/Navbar';

import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Events from './pages/Events.js';
import Book from './pages/Book';
import Wander from './pages/Wander';
import Feedback from './pages/Feedback';
import Tips from './pages/Tips';
import Blog from './pages/Blog';
import BlogView from './pages/BlogView';

import FAQs from './pages/FAQ';

import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import About from './pages/About';
import Contactus from './pages/Contactus';

import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Protection from './pages/Protection';

import "materialize-css/dist/css/materialize.min.css";
import "@mdi/font/css/materialdesignicons.min.css";
import "./assets/fonts/mdi/appicon/appicon.css";
import "./App.scss";
import { Footer } from "react-materialize";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {




  useEffect(() => {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});

    var nav = document.querySelectorAll('.sidenav');
    var navigator = M.Sidenav.init(nav, {

      onOpenStart: function () {
        document.querySelector('body').classList.add("menu-open");
        //console.log("onopen");
      },
      onCloseStart: function () {
        document.querySelector('body').classList.remove("menu-open");
      },
      inDuration: 250,
      outDuration: 250,

    });
  });

  return (
    <Router>
      <>
        <Topbar />
        <SideMenu />

        <div className="content-area">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/home" component={Home} />
            <Route path="/blog" component={Tips} />
            <Route path="/blog-item" component={BlogView} />

            <Route path="/events" component={Events} />
            <Route path="/book" component={Book} />


            <Route path="/wander" component={Wander} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/faqs" component={FAQs} />
            <Route path="/team" component={Team} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/about-us" component={About} />
            <Route path="/contact-us" component={Contactus} />

            <Route path="/terms-of-use" component={Terms} />
            <Route path="/privacy-policy" component={Privacy} />
            <Route path="/data-protection" component={Protection} />
          </Switch>

          <ScrollToTop />
          <SiteFooter />
        </div>
        {/* <Navbar /> */}
      </>
    </Router>
  );
}

export default App;