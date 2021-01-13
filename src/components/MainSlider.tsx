import * as React from 'react';
import Slider from "react-slick";

// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MainSlider.scss';
import slider01 from 'asset/slider_01.jpg';
import slider02 from 'asset/slider_02.jpg';

function MainSlider() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 200,
        autoPlay: true,
    };

    return (
        <div>
            <Slider {...settings}>
                <div className='slider'>
                    <img className='sliderImg' src={slider01} alt="slider01"/>
                </div>
                <div>
                    <img className='sliderImg' src={slider02} alt="slider02"/>
                </div>
            </Slider>
        </div>
    )

}

export default MainSlider;