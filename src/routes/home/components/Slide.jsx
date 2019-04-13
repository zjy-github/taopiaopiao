import React from 'react';
import PropTypes from 'prop-types';
import Slide from 'react-slick';
import './Slide.css';

const PosterSlide = ( { data } ) => {
    const  setting = {
        dots : true,
        autoplay: true,
        className: 'posterSlide',
        dotsClass: 'posterSlide__dots'
    }; 
    return (
        <Slide {...setting}>
            { data.map(item => <div key={item}><img className="posterSlide__image" src={item.image} alt=""/></div>) }
        </Slide>
    );
};

Slide.propTypes = {
    data : PropTypes.array
};

export default PosterSlide;
