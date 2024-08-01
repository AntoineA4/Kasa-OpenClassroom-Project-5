import Banner from '../components/Banner';
import BannerAboutImage from '../assets/Image Apropos.png';
import Collapse from '../components/Collapse';
import '../styles/Pages/A-propos.scss';

function Apropos() {
    return (
        <div>
            <Banner 
                imageSrc={BannerAboutImage} 
                altText="Image de riviere au milieu des montagnes" 
                text="" 
            />
            <Collapse />
        </div>
    );
}

export default Apropos;

