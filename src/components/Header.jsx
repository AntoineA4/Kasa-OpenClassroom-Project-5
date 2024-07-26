import LOGO from '../assets/LOGO.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <img src={LOGO} alt='Logo Kasa'/>
            <nav>
                <Link to="/">Acceuil</Link>
                <Link to="/a-propos">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header 