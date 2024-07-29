import LOGO from '../assets/LOGO.png'
import { NavLink } from 'react-router-dom'
import '../styles/components/Header.scss'

function Header() {
    return (
        <div className="header-container">
            <img src={LOGO} alt='Logo Kasa' className="header-logo" />
            <nav className="header-nav">
                <NavLink
                    to="/"
                    className={({ isActive }) => "header-link" + (isActive ? " active-link" : "")}
                    end
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/a-propos"
                    className={({ isActive }) => "header-link" + (isActive ? " active-link" : "")}
                >
                    À Propos
                </NavLink>
            </nav>
        </div>
    );
}
export default Header 