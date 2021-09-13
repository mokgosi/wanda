import React, { useState, useEffect } from "react";

import Members from "../data/team"
import Navbar from '../components/Navbar';

const Team = () => {

    const [team, setTeam] = useState(Members);

    return (
        <>
            <div className="pagehead-bg primary-bg">
            </div>
            <div className="container has-pagehead is-pagetitle">
                <div className="section">
                    <h5 className="pagetitle">Team</h5>
                </div>
            </div>
            <div className="container over">
                <div className="section">
                    <div className="row ui-mediabox team-box">
                        {team.map((t, i) => (
                            <div className="col s12 pad-0  team-member card" key={t.id}>
                                <a className="img-wrap" href={t.image} data-fancybox="images" data-caption={t.name}>
                                    <img alt="image" className="z-depth-1" style={{ width: `100%` }} src={t.image} />
                                </a>
                                <h5 className="bot-0 name">{t.name}</h5>
                                <span className="light">{t.title}</span>

                                <div className="brief">{t.tagline}</div>
                                <div className="social">
                                    <a className="" href="#!"><i className="mdi mdi-facebook"></i></a>
                                    <a className="" href="#!"><i className="mdi mdi-twitter"></i></a>
                                    <a className="" href="#!"><i className="mdi mdi-google-plus"></i></a>
                                    <a className="" href="#!"><i className="mdi mdi-linkedin"></i></a>
                                </div>
                                <div className="spacer"></div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <Navbar />
        </>
    );
}

export default Team;