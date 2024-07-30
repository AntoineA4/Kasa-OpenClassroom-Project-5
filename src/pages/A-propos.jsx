import Banner from '../components/Banner';
import BannerAboutImage from '../assets/Image Apropos.png';
import Collapse from '../components/Collapse';

function Apropos() {
    return (
        <div>
            <Banner 
                imageSrc={BannerAboutImage} 
                altText="Autre description de l'image" 
                text="" 
            />
            <Collapse />
        </div>
    );
}

export default Apropos;

