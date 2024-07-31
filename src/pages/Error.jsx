import { Link } from 'react-router-dom'
import '../styles/Pages/Error.scss'

function Error() {
    return (
        <div className="errorContainer">
            <p className="404">404</p>
            <p className="errorMessage">Oups! La pageque vous demandez n'existe pas.</p>
            <Link to="/" className="homeLink">Retourner sur la page d'acceuil</Link>
        </div>
    )
}

export default Error