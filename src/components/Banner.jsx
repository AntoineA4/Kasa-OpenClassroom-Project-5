import Banner_Home from '../assets/Image Home.png'
import '../styles/components/Banner.scss'

function Banner() {
    return (
        <div className="banner-container">
            <img src={Banner_Home} alt='Paysage de falaise se jetant dans la mer' className="banner-image"/>
            <div className="banner-text">Chez vous, partout et ailleurs</div>
        </div>
    )
}

export default Banner