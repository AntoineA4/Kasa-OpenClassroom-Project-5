import  "../styles/components/Footer.scss"
import LOGO_PHONE from '../assets/LOGO-PHONE.png'

function Footer() {
    return (
        <div className="footer-container">
            <img src={LOGO_PHONE} alt='Logo Kasa' className="footer-logo" />
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer