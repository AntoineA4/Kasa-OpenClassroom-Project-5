import Star from "../assets/star-active.png";
import EmptyStar from "../assets/star-empty.png";
import PropTypes from 'prop-types';
import "../styles/components/StarsRate.scss";

function StarsRate ({ rating }) {
    const totalStars = 5;

    return (
        <div className="starsRate">
            {[...Array(totalStars)].map((_, index) => (
                <img
                    key={index}
                    src={index < rating ? Star : EmptyStar}
                    alt={index < rating ? 'red-star' : 'grey-star'}
                    className="stars"
                />
            ))}
        </div>
    );
}

StarsRate.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default StarsRate;