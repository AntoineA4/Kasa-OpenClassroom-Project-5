import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Banner.scss';

function Banner({ imageSrc, altText, children }) {
    return (
        <div className="banner-container">
            <img src={imageSrc} alt={altText} className="banner-image" />
            {children && <div className="banner-text">{children}</div>}
        </div>
    );
}

Banner.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default Banner;