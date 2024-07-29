import '../styles/components/Card.scss'
import { Link } from 'react-router-dom'

function Card({ title, cover }) {
    return (
        <Link to="/Logements" className="card">
            <img src={cover} alt={title} className="card-cover" />
            <div className="card-title">{title}</div>
        </Link>
    );
}

export default Card;