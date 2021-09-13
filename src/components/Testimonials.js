import React from "react";

const Testimonials = ({testimonials}) => {

    return ( 
        <div className="Testimonials">
            {testimonials.map((t, i) => (
                <div key={i}>
                <h6>{t.name}</h6>
                <p>{t.message}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Testimonials;