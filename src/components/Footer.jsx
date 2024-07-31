import  "../styles/components/Footer.scss"
import LOGO_white from '../assets/LOGO-white.png'

function Footer() {
    return (
        <div className="footer-container">
            <img src={LOGO_white} alt='Logo Kasa' className="footer-logo" />
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer