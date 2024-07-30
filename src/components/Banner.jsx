import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Banner.scss';

function Banner({ imageSrc, altText, text }) {
    return (
        <div className="banner-container">
            <img src={imageSrc} alt={altText} className="banner-image" />
            {text && <div className="banner-text">{text}</div>}
        </div>
    );
}

Banner.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default Banner;