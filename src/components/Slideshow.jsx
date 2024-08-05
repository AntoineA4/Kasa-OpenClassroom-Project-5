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
    const renderContent= () => {
        if (images.length === 1) {
            return (
                <div>
                <img src={currentImage} alt={currentImage.title} className="slide-image" />
                </div>
            )
        }
        else {
            return (
                <div>
                    <button  onClick={prevSlide} className='prev-slide'>❮</button>
                    <img src={currentImage} alt={currentImage.title} className="slide-image" />
                    <p className='imgCounter'>{currentIndex + 1}/{images.length}</p>
                    <button onClick={nextSlide} className='next-slide'>❯</button>  
                </div>
            )

        }
    }
    return (
        <div className='slideShow'>
            {renderContent()}
        </div>
    )
}

Slideshow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired, 
};


export default Slideshow