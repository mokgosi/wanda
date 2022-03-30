import React from "react";

const Rating = ({rating}) => {

    const rate = rating => {

        let stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<i className='mdi mdi-star colored' key={i} ></i>);
        }
        return stars;
    };

    return ( 
        <>
            {rate(rating)}
        </>
    );
}
 
export default Rating;