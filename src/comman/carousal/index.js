import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Carousal({ settings, children }) {
    const arr = {
        ...settings,
        
    }
    return (
        <div>
            <Slider {...arr}>
                {children}
            </Slider>
        </div>
    )
}

export default Carousal
