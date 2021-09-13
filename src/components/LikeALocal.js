import React from "react";

const LikeALocal = ({locals}) => {
    return (
        <div>
            {locals.map((l, i) => (
                <div key={l.id} className="col s6">
                    <a className="img-wrap round" href={l.url}>
                        <img src={l.image} alt="image" style={{width: `100%`}} />
                    </a>
                    <a href={l.url}>
                        <h6>{l.title}</h6>
                        {/* <div className="tagline">{l.tagline}</div> */}
                    </a>
                </div>
            ))}
        </div>
    );
}
 
export default LikeALocal;