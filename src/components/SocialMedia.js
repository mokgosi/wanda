import React from "react";

const SocialMedia = ({socials}) => {
    return ( 
        <ul className="social-wrap">
            <li className="social">
                {socials.map((s, i) => (
                    <a href={s.url} key={s.id}><i className={s.class}></i></a>
                ))}
            </li>
        </ul>
    );
}

export default SocialMedia;