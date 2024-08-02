import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Slideshow.scss';

function Slideshow({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1  + images.length) % images.length);
    }
    const currentImage = images[currentIndex];
    return (
        <div className='slideShow'>
            <button  onClick={prevSlide} className='prev-slide'>❮</button>
            <img src={currentImage} alt={currentImage.title} className="slide-image" />
            <button onClick={nextSlide} className='next-slide'>❯</button>  
        </div>
    )
}

Slideshow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired, 
};


export default Slideshow