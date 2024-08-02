import '../styles/components/Card.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function Card({ id, title, cover }) {
    return (
        <Link to={`/logements/${id}`} className="card">
            <img src={cover} alt={title} className="card-cover" />
            <div className="card-title">{title}</div>
        </Link>
    );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default Card;